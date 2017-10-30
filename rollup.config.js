import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import {minify} from 'uglify-es'
import resolve from 'rollup-plugin-node-resolve'

import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import alias from 'rollup-plugin-alias'
import babelrc from 'babelrc-rollup'

import fs from 'fs'
import path from 'path'
import fr from 'find-root'
import rimraf from 'rimraf'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

function fixbabelrc(rc) {
    return Object.assign({}, rc, {
        presets: rc.presets.map((preset) => {
            if (preset[0] === 'es2015') {
               return preset
            }
            delete preset[1].modules
            return Object.keys(preset[1]).length ? preset : preset[0]
        })
    })
}

const rc = fixbabelrc(babelrc())

const isUglify = process.env.UGIFY === 1 || process.env.NODE_ENV === 'production'

const baseConfig = {
    sourcemap: isUglify,
    plugins: [
        resolve({
            browser: true,
            module: true
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        commonjs({
            namedExports: {
                'mobx': ['observable'],
                'mobx-react': ['observer'],
                'inferno-mobx': ['observer'],
                'inferno-compat': ['render', 'createElement', 'Component'],
                'react-dom': ['render', 'findDOMNode', 'unstable_batchedUpdates'],
                'react': ['createElement', 'Component', 'Children']
            },
            include: [
                'node_modules/create-react-class/**',
                'node_modules/hoist-non-react-statics/**',
                'node_modules/preact-classless-component/**',
                'node_modules/fbjs/**',
                'node_modules/object-assign/**',
                'node_modules/react/**',
                'node_modules/react-dom/**',
                'node_modules/prop-types/**',
                'node_modules/inferno*/**',
                'node_modules/hoist-non-inferno-statics/**',
                'node_modules/preact/**',
                'node_modules/mobx/**',
                'node_modules/inferno-mobx/**',
                'node_modules/mobx-react/**',
                'node_modules/mobx-preact/**'

            ],
            exclude: [
                 'node_modules/process-es6/**',
                //  'node_modules/preact/**',
                 'node_modules/reactive-di/**',
                 'node_modules/lom_atom/**'
            ]
        }),

        sourcemaps(),
        babel(rc),
        globals(),
    ].concat(isUglify ? [uglify({}, minify)] : [])
}

function toConfig({frm, stateFrm}) {
    const name = `${frm.name}-${stateFrm.name}`

    return Object.assign({}, baseConfig, {
        input: `src/perf/${stateFrm.name}/index.js`,
        output: [
            {file: `docs/examples/${name}/bundle.js`, format: 'iife', name: name.replace(/\-/g, '_')}
        ],
        plugins: baseConfig.plugins.concat([
            alias({
                'react-stubs': `src/stubs/${frm.name}.js`
            })
        ])
    })
}

function getInfo(rawName) {
  const name = path.basename(rawName, '.js')
  const pkgStr = name === 'raw' ? null : ('' + fs.readFileSync(path.join(fr(require.resolve(name)), 'package.json')))
  return {
    name,
    pkg: pkgStr ? JSON.parse(pkgStr) : null
  }
}

function intersect(a1, a2) {
    return a1.reduce((acc, frm) => {
        return acc.concat(a2.map((stateFrm) => ({
          frm,
          stateFrm
        })))
    }, [])
}


function formatVersion({name, pkg}) {
  return `${name}${pkg ? ` ${pkg.version}` : ''}`
}
function genIndex(items) {
    return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Demo examples</title>
  </head>
  <body>
      <div id="app"></div>
      <a href="./benchmark">mol benchmark</a><br/>
      <ul>
        ${items.map(({frm, stateFrm}) => `
            <li>
              <a href="./examples/${frm.name}-${stateFrm.name}/index.html">
                ${formatVersion(frm)} + ${formatVersion(stateFrm)}
              </a>
            </li>
          `).join("\n")}
      </ul>
  </body>
</html>
`
}

function genLearn(frms, stateFrms) {
  const obj = {}

  frms.forEach((frm) => {
    const key = `${frm.name}_utb`
    const pkg = frm.pkg || {}
    obj[key] = {
      name: formatVersion(frm),
      description: pkg.description || frm.name,
      homepage: pkg.homepage || null,
      examples: stateFrms.map((stateFrm) => ({
        name: formatVersion(stateFrm),
        url: `examples/${frm.name}-${stateFrm.name}`
      }))
    }
  })

  return JSON.stringify(obj, null, '  ')
}

function genFrmIndex(frm) {
    return `<!doctype html>
<html lang="en" data-framework="${frm.name}">
  <head><meta charset="utf-8">
    <title>${frm.name}, ${frm.pkg ? frm.pkg.version : ''} • TodoMVC</title>
    <link rel="stylesheet" href="../../bower_components/todomvc-common/base.css">
    <link rel="shortcut icon" href="/favicon.ico">
  </head>
  <body>
    <section id="todoapp"></section>
    <script src="../../bower_components/todomvc-common/base.js"></script>
    <script src="bundle.js"></script>
  </body>
</html>
`
}

// main
const COMPONENT_FRAMEWORKS = fs.readdirSync(path.join(__dirname, 'src', 'stubs')).map(getInfo)
const STATE_FRAMEWORKS = fs.readdirSync(path.join(__dirname, 'src', 'perf')).map(getInfo)

const items = intersect(COMPONENT_FRAMEWORKS, STATE_FRAMEWORKS)
const learnItems = genLearn(COMPONENT_FRAMEWORKS, STATE_FRAMEWORKS)

const exampleDir = path.join(__dirname, 'docs', 'examples')
rimraf.sync(exampleDir)
fs.mkdirSync(exampleDir)

fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), genIndex(items))
fs.writeFileSync(path.join(__dirname, 'docs', 'learn.json'), learnItems)

items.forEach(({frm, stateFrm}) => {
    const dir = path.join(exampleDir, `${frm.name}-${stateFrm.name}`)
    fs.mkdirSync(dir)
    fs.writeFileSync(path.join(dir, 'index.html'), genFrmIndex(frm))
})

export default items.map(toConfig)

// @flow
import {Reaction} from 'mobx'
import createMobxAtom from 'urc/dist/createMobxAtom.es'
import {createReactWrapper, createCreateElement, Injector} from 'reactive-di'
import {h, Component} from 'stubs/react'
import {AbstractLocationStore, BrowserLocationStore} from '../../common/utils'

function ErrorableView({
    error
}: {
    error: Error
}) {
    return <div>
        {error instanceof Error
            ? <div>
                Loading...
            </div>
            : <div>
                <h3>Fatal error !</h3>
                <div>{error.message}</div>
                <pre>
                    {error.stack.toString()}
                </pre>
            </div>
        }
    </div>
}

const lomCreateElement = createCreateElement(
    createReactWrapper(
        Component,
        ErrorableView,
        createMobxAtom(Reaction),
        new Injector([
            [AbstractLocationStore, new BrowserLocationStore(location, history)]
        ])
    ),
    h
)
global['lom_h'] = lomCreateElement

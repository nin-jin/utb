// @flow
import {action, observable} from 'mobx'
import {ENTER_KEY} from '../../../common/interfaces'
import TodoRepository from './TodoRepository'
import TodoHeaderViewOrig from '../../../common/TodoHeaderView'

export class TodoHeaderService {
    @observable title: string = ''
    _todoRepository: TodoRepository

    static deps = [TodoRepository]

    constructor(todoRepository: TodoRepository) {
        this._todoRepository = todoRepository
    }

    onInput = action(({target}: Event) => {
        this.title = (target: any).value
    })

    onKeyDown = action((e: Event) => {
        if (e.keyCode === ENTER_KEY && this.title) {
            e.preventDefault()
            const text = this.title.trim()
            if (text) {
                this._todoRepository.addTodo(text)
                this.title = ''
            }
        }
    })
}

export default function TodoHeaderView(
    _: {},
    {todoHeaderService}: {
        todoHeaderService: TodoHeaderService;
    }
) {
    return TodoHeaderViewOrig(todoHeaderService)
}
TodoHeaderView.deps = [{
    todoHeaderService: TodoHeaderService
}]

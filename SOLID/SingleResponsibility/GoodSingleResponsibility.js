class ToDo {
    constructor() {
        this.todos = {}
    }

    addTodo (todo) {
        this.todos.push(todo)
    }

    removeTodo (index) {
        delete this.todos[index]
    }

    toString() {
        return Object.values(this.todos).join('\n')
    }

    // This class just has one responsibility => Manage a ToDos.
}


import fs from 'fs'
class FileSystemManager {
    saveToFile (itemToSave, filename) {
        fs.writeFileSync(filename, itemToSave.toString)
    }

    loadFile (filename) {
        //
    }
}



const todo = new ToDo()
todo.addTodo('First ToDo')
todo.addTodo('Second ToDo')

const fileManager = new FileSystemManager()
fileManager.saveToFile(todo, 'todos.txt')
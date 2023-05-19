import fs from 'fs'

class ToDo
{
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

    // Till here the class are responsible for one task.
    // Manage the ToDos


    // Let say that we need to add functions to save, load this ToDos in / from a file.

    save (filename) {
        fs.writeFileSync(filename, this.toString())
    }

    loadFormFile(filename) {

    }

    // Here we add a new responsibility to this class, and it is manage the file system.
    // The best way to keep the single responsibility principle is to create a new class that do all file system management.

}
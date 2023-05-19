const priority = Object.freeze({
    high: 'High',
    medium: 'Medium',
    low: 'Low'
})

const category = Object.freeze({
    work: 'Work',
    uni: 'Uni',
    freeTime: 'Free time'
})

class ToDo
{
    constructor(name, category, priority) {
        this.name = name
        this.category = category
        this.priority = priority
    }
}

// We want to filter the ToDos, so we will create a new class to handle all filter functions.

class ToDoFilter
{
    filterByCategory (todos, category) {
        return todos.filter(todo => todo.category === category)
    }

    filterByPriority (todos, priority) {
        return todos.filter(todo => todo.priority === priority)
    }
}

const todoWork = new ToDo('first todo', category.work, priority.high)
const todoUni = new ToDo('second todo', category.uni, priority.medium)
const todoFreeTime = new ToDo('third todo', category.freeTime, priority.medium)

const todos = [todoWork, todoUni, todoFreeTime]

const todoFilter = new ToDoFilter()
const filteredTodosByCategory = todoFilter.filterByCategory(todos, category.uni)
const filterTodosByPriority = todoFilter.filterByPriority(todos, priority.medium)


// Let's say we want to add a new filter filterByCategoryAndPriority
// In this case we need to modify the filter class and add a new function.
// This process hurts the OCP.
// Because OCP means that when any new feature should be implemented, we should not modify (make changes) on our class.
// To avoid that we need to create classes to any filter we add, in this case we are extending the process not modifying.

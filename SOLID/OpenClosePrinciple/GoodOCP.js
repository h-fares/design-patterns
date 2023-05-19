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

class CategorySpecification
{
    constructor(category) {
        this.category = category
    }

    isSatisfied(item) {
        return item.category === this.category
    }
}

class PrioritySpecification
{
    constructor(priority) {
        this.priority = priority
    }

    isSatisfied(item) {
        return item.priority === this.priority
    }
}

const todoWork = new ToDo('first todo', category.work, priority.high)
const todoUni = new ToDo('second todo', category.uni, priority.medium)
const todoFreeTime = new ToDo('third todo', category.freeTime, priority.medium)

const todos = [todoWork, todoUni, todoFreeTime]


const filterByWorkCategory = new CategorySpecification(category.work)
let filteredTodosByWorkCategory = []
for (let todo of todos) {
    if (filterByWorkCategory.isSatisfied(todo)) filteredTodosByWorkCategory.push(todo)
}

const filterByHighPriority = new PrioritySpecification(priority.high)
let filteredTodosByHighPriority = []
for (let todo of todos) {
    if (filterByHighPriority.isSatisfied(todo)) filteredTodosByHighPriority.push(todo)
}

// Let's say that we want to filter by category and priority
// That is easy. Add new class

class CategoryPrioritySpecification
{
    constructor(category, priority) {
        this.category = category
        this.priority = priority
    }

    isSatisfied(item) {
        return item.category === this.category && item.priority === this.priority
    }
}

// In this case we can create a lot of objects to filter the todos without modifying any class.

const filterByWorkCategoryAndHighPriority = new CategoryPrioritySpecification(category.work, priority.high)
let filteredTodosWorkCategoryAndByHighPriority = []
for (let todo of todos) {
    if (filterByWorkCategoryAndHighPriority.isSatisfied(todo)) filteredTodosWorkCategoryAndByHighPriority.push(todo)
}

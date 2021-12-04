class Todo {
  constructor() {
    this.todoItems = []
    this.idCount = 0
  }

  addItem(itemText, id) {
    const item = {
      id: id,
      text: itemText,
      isCompleted: false
    }
    this.todoItems.push(item)
  }

  deleteItem(index) {
    this.todoItems.splice(index, 1)
  }

  toggleItem(index) {
    this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted
  }
}

if (typeof module !== 'undefined') {
  module.exports = Todo
}
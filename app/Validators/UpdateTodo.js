'use strict'

class UpdateTodo {
  get rules () {
    return {
      editTask: "required|min:4"
    }
  }

  get messages () {
    return {
      'editTask.required': "Title tidak boleh kosong",
      'editTask.min': "Title harus minimal 4 karakter",
    }
  }
}

module.exports = UpdateTodo

'use strict'

class TambahTodo {
  get rules () {
    return {
      newTask: "required|min:4"
    }
  }

  get messages () {
    return {
      'newTask.required': "Title tidak boleh kosong",
      'newTask.min': "Title harus minimal 4 karakter",
    }
  }
}

module.exports = TambahTodo

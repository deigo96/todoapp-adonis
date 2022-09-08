"use strict";

const auth = require("@adonisjs/auth");

const Todo = use("App/Models/Todo");
const { validate } = use("Validator");

class TodoController {
  async index({ view, auth }) {
    // const todos = await Todo.all()
    // const page = request)
    const todos = await Todo.query().where("user_id", auth.user.id).fetch();

    return view.render("index", {
      todos: todos.toJSON(),
      name: auth.user.username,
    });
  }

  async tambah({ request, session, response, auth }) {
    // const rules = {
    //   newTask: "required|min:4"
    // };

    // const messages = {
    //   'newTask.required': "Title tidak boleh kosong",
    //   'newTask.min': "Title harus minimal 4 karakter",
    // }

    // const validation = await validate(request.all(), rules, messages);

    // if (validation.fails()) {
    //   session.withErrors(validation.messages()).flashAll();

    //   return response.redirect("back");
    // }

    const todo = await Todo.create({
      user_id: auth.user.id,
      title: request.input("newTask"),
    });

    session.flash({ successMessage: "Task Berhasil ditambah" });
    return response.redirect("back");
  }

  async edit({ params, session, request, auth, response, view }) {
    const todo = await Todo.findOrFail(params.id);

    if(auth.user.id !== todo.user_id) {
      session.flash({ successMessage: "Task tidak ditemukan" });
      return response.route("todos.index"); 
    }

    return view.render("edit", { todo });
  }

  async update({ params, auth, session, request, response }) {
    const todo = await Todo.findOrFail(params.id);

    if(auth.user.id !== todo.user_id) {
      session.flash({ successMessage: "Task tidak ditemukan" });
      return response.route("todos.index"); 
    }

    todo.title = request.input("editTask");
    // todo.status = request.input('completeTask') === 'on' ? true : false

    await todo.save();

    session.flash({ successMessage: "Task berhasil di update" });
    return response.route("todos.index");
  }

  async completeTask({ params, auth, session, request, response }) {
    const todo = await Todo.findOrFail(params.id);
    // return todo
    if(auth.user.id !== todo.user_id) {
      session.flash({ successMessage: "Task tidak ditemukan" });
      return response.route("todos.index"); 
    }

    todo.status = true;

    await todo.save();

    session.flash({ successMessage: "Task complete" });
    return response.route("todos.index");
  }

  async hapus({ params, auth, session, request, response }) {
    const todo = await Todo.findOrFail(params.id);

    if(auth.user.id !== todo.user_id) {
      session.flash({ successMessage: "Task tidak ditemukan" });
      return response.route("todos.index"); 
    }

    await todo.delete();

    session.flash({ successMessage: "Task berhasil di dihapus" });
    return response.redirect("back");
  }
}

module.exports = TodoController;

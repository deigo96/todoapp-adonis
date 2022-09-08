"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.get("/register", "UserController.index").as("register.index");
  Route.post("/register", "UserController.store")
  .as("register.store")
  .validator("Register");
  Route.get("/login", "UserController.login").as("login.store");
  Route.post("/login", "UserController.auth").as("login.auth");
  
}).middleware(['guest'])

Route.group(() => {
  Route.get("/", async ({ response }) => {
    return response.redirect("/todos");
  });
  Route.get("/todos", "TodoController.index").as("todos.index");
  Route.post("/todos", "TodoController.tambah")
    .as("todos.tambah")
    .validator("TambahTodo");
  Route.get("/todos/:id/edit", "TodoController.edit").as("todos.edit");
  Route.patch("/todos/:id", "TodoController.update")
    .as("todos.update")
    .validator("UpdateTodo");
  Route.patch("/todos/complete/:id", "TodoController.completeTask").as(
    "todos.completeTask"
  );
  Route.delete("/todos/:id", "TodoController.hapus").as("todos.delete");
  Route.post("/logout", "UserController.destroy").as("logout");
}).middleware(["auth"]);

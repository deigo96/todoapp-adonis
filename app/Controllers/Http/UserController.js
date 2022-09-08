'use strict'

// mengambil model
const User = use('App/Models/User')

class UserController {
  async index({view}) {
    return view.render('register')
  }

  async store({request,session, response, view}) {
    const users = await User.create({
      username: request.input('username'),
      email: request.input('email'),
      password: request.input('password'),
    })

    session.flash({successMessage: "Register Berhasil Silahkan login"})
    return response.redirect('/login')
  }

  async login({view}) {
    return view.render('login')
  }

  async auth({request, session, response, auth}) {
    await auth.attempt(request.input('email'), request.input('password'))

    session.flash({successMessage: "Login Berhasil"})
    return response.route('/')
  }

  async destroy({session, auth, request, response}){
    await auth.logout()

    session.flash({successMessage: "Logout Berhasil"})
    return response.route('login.store')
  }
}

module.exports = UserController

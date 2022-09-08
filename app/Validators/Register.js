'use strict'

class Register {
  get rules () {
    return {
      username: "required",
      email: 'required|email|unique:users',
      password: 'required|min:6|confirmed'
    }
  }

  get messages () {
    return {
      'username.required': "Nama tidak boleh kosong",
      'email.required': "Email tidak boleh kosong",
      'email.email': "Email tidak valid",
      'email.unique': "Email sudah digunakan",
      'password.required': "Password harus diisi",
      'password.min': "Password harus minimal 4 karakter",
      'password.confirmed': "Password tidak sama",
    }
  }
}

module.exports = Register

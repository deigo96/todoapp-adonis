const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  Exception.handle('ValidationException', async (error, { response, session }) => {
    session.withErrors(error.messages).flashAll()
    await session.commit()
    response.redirect('back')
    return
  })

  Exception.handle('InvalidSessionException', async (error, {response, session}) => {
    return response.redirect('/login')
  })

  Exception.handle('HttpException', async (error, {response, session}) => {
    return response.redirect('/')
  })
})
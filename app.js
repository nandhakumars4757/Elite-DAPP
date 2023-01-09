import UAuth from '@uauth/js'

const uauth = new UAuth({
    clientID: "ad1c7ab9-25ea-4c77-bfaa-4bc8b2d628ce",
    redirectUri: "http://localhost:3000",
    scope: "openid wallet email profile:optional social:optional"
  })


window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()
 
    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}


window.logout = async () => {
  await uauth.logout()
  console.log('Logged out with Unstoppable')
}
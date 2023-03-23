const TOKEN_KEY = 'kas_commerce'

// export const ADMIN_BASE_URL =
//     process.env.REACT_APP_ADMIN_BASE_PROTOCOL + '://' +// changed to add protocol
//     //'https://' +
//     process.env.REACT_APP_ADMIN_BASE_URL +
//     ':' +
//     process.env.REACT_APP_ADMIN_BASE_URL_PORT
//     + '/'
//     + (process.env.REACT_APP_ADMIN_BASE_CONTEXT === undefined ? "undefined" : process.env.REACT_APP_ADMIN_BASE_CONTEXT)
//     + '/';
// //http://192.168.15.27:8080/desadmin/

export function setAuthorizationHeader(token) {
  let auth = localStorage.getItem(TOKEN_KEY)
  let config = {
    headers: {
      Authorization: 'Bearer ' + auth,
      'Cache-Control': 'no-cache',
    },
  }
  return config
}

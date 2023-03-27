import axios from 'axios'
import { setAuthorizationHeader } from '../httpConstants'

export const authenticateUser = (p_user, p_password) => {
  let userData = {}
  userData.email = p_user
  userData.password = p_password
  return new Promise((resolve, reject) => {
    let full_url =
      'http://localhost:8080' +
      //"https://888b-203-212-212-161.ngrok.io" //for temporary use
      '/api/auth/signin'
    axios
      .post(full_url, userData, setAuthorizationHeader(undefined))
      .then((response) => {
        resolve({ users: response.data })
      })
      .catch((response) => {
        reject(response?.response?.data?.message)
      })
  })
}

export const createUser = (userData) => {
  userData.roles = ['user', 'moderator']
  delete userData.touched
  delete userData.errorFor
  console.log(userData)
  return new Promise((resolve, reject) => {
    let full_url = 'http://localhost:8080' + '/api/auth/signup' //for temporary use
    axios
      .post(full_url, userData, setAuthorizationHeader(undefined))
      .then((response) => {
        resolve({ users: response.data })
      })
      .catch((response) => {
        reject(response?.response?.data?.message)
      })
  })
}

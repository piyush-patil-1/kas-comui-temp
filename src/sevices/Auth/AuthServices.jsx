import axios from 'axios';
import { setAuthorizationHeader } from '../httpConstants'

export const authenticateUser = (p_user, p_password) => {
    let userData = {};
    userData.username = "piyush.patil"; //p_user
    userData.password = p_password;
    return new Promise((resolve, reject) => {
        let full_url = "https://888b-203-212-212-161.ngrok.io" //for temporary use
            + '/api/auth/signin';
        axios
            .post(full_url, userData, setAuthorizationHeader(undefined))
            .then(response => {
                resolve({ users: response.data });
            })
            .catch(response => {
                reject('Invalid Username or Password');
            });
    });
};


export const createUser = (userData) => {
    userData.roles = ["user", "moderator"]; 
    console.log(userData);
    return new Promise((resolve, reject) => {
        let full_url = "https://888b-203-212-212-161.ngrok.io" //for temporary use
            + '/api/auth/signup';
        axios
            .post(full_url, userData, setAuthorizationHeader(undefined))
            .then(response => {
                resolve({ users: response.data });
            })
            .catch(response => {
                reject('Invalid Username or Password');
            });
    });
};

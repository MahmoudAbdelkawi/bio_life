import http from './httpService';
const apiUrl = "https://biollife.herokuapp.com/api";

const apiEndpoint = apiUrl + "/users";

export function register(username,email,password){
    return http.post(apiEndpoint, {username,email,password});
}
export function getUser(userId) {
    return http.get(userUrl(userId));
  }

export function putUser(fname,lname,email,phoneNumber) {
    return http.put(apiEndpoint,{fname,lname,email,phoneNumber});
}

function userUrl(id) {
    return `${apiEndpoint}/${id}`;
  }

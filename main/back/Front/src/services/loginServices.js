import jwtDecode from 'jwt-decode';
import http from "./httpService";
const apiUrl = "https://biollife.herokuapp.com/api";
const apiEndpoint = apiUrl + "/login";
const tokenKey = 'x-auth-token';

http.setJwt(getJwt());

export async function login (email,password){
  const {data:jwt}= await http.post(apiEndpoint,{email,password});
  localStorage.setItem(tokenKey,jwt);
}

export function logout(){
   localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
   try{
      const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
       } catch(ex){
       return null;
    }
}

export function getJwt(){
  return localStorage.getItem(tokenKey);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   login,
   logout,
   getCurrentUser,
   getJwt
}
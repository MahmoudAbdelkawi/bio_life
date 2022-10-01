import http from "./httpService";
const apiUrl = "https://biollife.herokuapp.com/api";
const apiEndpoint = apiUrl + "/admins";

export function getUsers() {
  return http.get(apiEndpoint + "/users");
}
export function getUsersLimit() {
  return http.get(apiEndpoint + "/users/limit");
}

export async function deleteUser(id) {
  await http.delete(userUrl(id));
}

function userUrl(id) {
  return `${apiEndpoint}/user/${id}`;
}

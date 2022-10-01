import http from "./httpService";
const apiUrl = "https://biollife.herokuapp.com/api";

export function getServices() {
  return http.get(apiUrl + "/services");
}
export function getServicesLimit() {
  return http.get(apiUrl + "/services/limit");
}
export async function deleteServices(id){
  await http.delete(ServicesUrl(id));
}

function ServicesUrl(id) {
  return `${apiUrl}/services/${id}`;
}

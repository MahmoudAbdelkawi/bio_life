import http from "./httpService";
const apiUrl = "https://biollife.herokuapp.com/api";

const apiEndpoint = apiUrl + "/departments";

export async function addDepartment(name) {
  await http.post(apiEndpoint, { name });
}

export function getDepartments() {
  return http.get(apiEndpoint);
}

export async function deleteDepartment(id) {
  await http.delete(departmentUrl(id));
}

function departmentUrl(id) {
  return `${apiEndpoint}/${id}`;
}

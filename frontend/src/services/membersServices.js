import http from "./httpService";
const apiUrl = "https://biollife.herokuapp.com/api";

export  function getMembers() {
  return http.get(apiUrl + "/members");
}
function memberUrl(id) {
  return `${apiUrl+'/members'}/${id}`;
}
export function getMember(memberId) {
  return http.get(memberUrl(memberId));
}
export async function deleteMember(id) {
  await http.delete(memberUrl(id));
}
export function getDepartments() {
  return http.get(apiUrl + "/departments");
}
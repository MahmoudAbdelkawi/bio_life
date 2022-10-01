import http from "./httpService";
const apiUrl= "https://biollife.herokuapp.com/api";
const apiEndPoint=apiUrl+'/members';

export async function addMember(name,email,image,department,position,paragraph,fromTime,toTime,fromDay,toDay) {
  await http.post(apiEndPoint, { name,email,image,department,position,paragraph,fromTime,toTime,fromDay,toDay });
}

export  function getMembers() {
  return http.get(apiEndPoint);
}

export  function getMembersLimit() {
  return http.get(apiEndPoint+'/limit');
}

export  function getTeams() {
  return http.get(`${apiUrl}/teams`);
}
export async function deleteMember(id) {
  await http.delete(memberUrl(id));
}
function memberUrl(id) {
  return `${apiEndPoint}/${id}`;
}
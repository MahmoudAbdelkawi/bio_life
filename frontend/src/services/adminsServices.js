import http from "./httpService";
const  apiUrl ="https://biollife.herokuapp.com/api";
const apiEndpoint = apiUrl + "/admins";

export async function register (name,email,password,isAdmin,isSubAdmin){
 await http.post(apiEndpoint,{name,email,password,isAdmin,isSubAdmin});
}

export function getAdmins(){
    return http.get(apiEndpoint);
}

export async function deleteAdmin(id){
   await http.delete(adminUrl(id));
}

function adminUrl(id) {
    return `${apiEndpoint}/${id}`;
}
  
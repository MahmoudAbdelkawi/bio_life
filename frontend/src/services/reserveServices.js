import http from './httpService';
const apiUrl = "https://biollife.herokuapp.com/api";


export function reserve(fname,lname,email,phoneNumber,date,department){
    return http.post(apiUrl + "/reserve", {fname,lname,email,phoneNumber,date,department});
}
export function reserve_doctor(fname,lname,email,phoneNumber,date,doctor){
    return http.post(apiUrl + "/reserve/doctor", {fname,lname,email,phoneNumber,date,doctor})}

export function reserve_doctor_user(fname,lname,email,phoneNumber,date,doctor){
    return http.post(apiUrl + "/myReserve/doctor", {fname,lname,email,phoneNumber,date,doctor})}

export function reserve_user(fname,lname,email,phoneNumber,date,department){
    return http.post(apiUrl +"/myReserve",{fname,lname,email,phoneNumber,date,department});
    }
export function myReserve(){
    return http.get(apiUrl+'/myReserve/limit');
}

export function getReserve(){
    return http.get(apiUrl+'/reserve');
}

export function reserveLimit(){
    return http.get(apiUrl+'/reserve/limit');
}

export function resOffers(){
    return http.get(apiUrl+'/resOffers');
}
export function resOffersLimit(){
    return http.get(apiUrl+'/resOffers/limit');
}

export function putReserve(id,status){
    return http.put(reserveUrl(id), {status});
}
export function putReserveOffer(id,status){
    return http.put(reserveOfferUrl(id), {status});
}
function reserveUrl(id) {
    return `${apiUrl+'/myReserve'}/${id}`;
}
function reserveOfferUrl(id) {
    return `${apiUrl+'/myOffers'}/${id}`;
}
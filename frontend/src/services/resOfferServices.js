import http from './httpService';
const apiUrl = "https://biollife.herokuapp.com/api";


export function reserve(fname,lname,email,phoneNumber,offer){

    return http.post(apiUrl + "/resOffers", {fname,lname,email,phoneNumber,offer});

}
export function reserve_user(fname,lname,email,phoneNumber,offer){

    return http.post(apiUrl +"/myOffers",{fname,lname,email,phoneNumber,offer});
    }
export function myReserveOffer(){
    return http.get(apiUrl+'/myOffers/limit');
}


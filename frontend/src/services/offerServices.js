import http from './httpService';
const apiUrl = "https://biollife.herokuapp.com/api";
const apiEndpoint = apiUrl + "/offers";



export async function deleteOffer(id){
  await http.delete(offerUrl(id));
}
export function getOffers() {
    return http.get(apiEndpoint);
  }

  export function getOffer(OfferId) {
    return http.get(offerUrl(OfferId));
  }
  export function getOfferLimit() {
    return http.get(apiEndpoint+'/limit');
  }
  function offerUrl(id) {
    return `${apiEndpoint}/${id}`;
}
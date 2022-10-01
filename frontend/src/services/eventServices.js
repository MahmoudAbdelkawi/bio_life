import http from './httpService';
const apiUrl = "https://biollife.herokuapp.com/api";
const apiEndpoint = apiUrl + "/events";

function eventUrl(id) {
  return `${apiEndpoint}/${id}`;
}
function eventCommentsUrl(id) {
  return `${apiEndpoint}/${id}/comment`;
}
function eventLikesUrl(id) {
  return `${apiEndpoint}/${id}/like`;
}
function isLiked(id) {
  return `${apiEndpoint}/like/${id}`;
}

export function getIsLiked(blogId) {
  return http.get(isLiked(blogId));
}

export function getEventsLimit() {
  return http.get(apiEndpoint+'/limit');
}
export function getEvent(id) {
    return http.get(eventUrl(id));
  }
  

export async function deleteEvent(id){
    await http.delete(eventUrl(id));
 }
 

export function getEvents() {
  return http.get(apiEndpoint+'/limit');
}
export function getEventComments(eventId) {
  return http.get(eventCommentsUrl(eventId));
}
export function postEventComments(text, eventId) {
  return http.post(eventCommentsUrl(eventId), {
    comment: text
  });
}
export function putEventLikes(eventId){
  return http.put(eventLikesUrl(eventId));
}
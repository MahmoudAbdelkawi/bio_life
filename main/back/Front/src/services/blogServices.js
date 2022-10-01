import http from './httpService';
const apiUrl = "https://biollife.herokuapp.com/api";
const apiEndpoint = apiUrl + "/blogs";

function blogUrl(id) {
  return `${apiEndpoint}/${id}`;
}
function blogCommentsUrl(id) {
  return `${apiEndpoint}/${id}/comment`;
}
function blogLikesUrl(id) {
  return `${apiEndpoint}/${id}/like`;
}
function isLiked(id) {
  return `${apiEndpoint}/like/${id}`;
}

export async function deleteBlog(id){
  await http.delete(blogUrl(id));
}
export function getBlogs() {
  return http.get(apiEndpoint);
}
export function getBlog(blogId) {
  return http.get(blogUrl(blogId));
}
export function getBlogComments(blogId) {
  return http.get(blogCommentsUrl(blogId));
}
export function getIsLiked(blogId) {
  return http.get(isLiked(blogId));
}
export function postBlogComments(text, blogId) {
  return http.post(blogCommentsUrl(blogId), {
    comment: text
  });
}
export function putBlogLikes(blogId) {
  return http.put(blogLikesUrl(blogId));
}
export function blogLimit(){
  return http.get(apiEndpoint+'/limit');
}

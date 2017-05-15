import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY='?key=RRBA9876';

export function fetchPosts(){
    const  request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
// action creator for creating a new post and dynamically nagivation back to index page
export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values )
    .then( () => callback() ); // promise success

    return {
        type: CREATE_POST,
        payload: request
    }
}

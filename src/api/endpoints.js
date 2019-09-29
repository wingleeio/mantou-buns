const BASE_URL = "https://mantou-buns.herokuapp.com/api/v1";

// Authentication Endpoints
export const LOGIN_ROUTE = `${BASE_URL}/login`;
export const LOGOUT_ROUTE = `${BASE_URL}/logout`;
export const REGISTER_ROUTE = `${BASE_URL}/register`;

// Post Endpoints
export const GET_POST_ROUTE = id => `${BASE_URL}/post/${id}`;
export const POSTS_ROUTE = `${BASE_URL}/posts`; /* GET: fetch all posts POST: create post*/
export const REPOST_ROUTE = `${BASE_URL}/reposts`;
export const LIKE_ROUTE = `${BASE_URL}/like`;

// User Endpoints
export const FOLLOW_ROUTE = `${BASE_URL}/follow`;
export const USERS_ROUTE = `${BASE_URL}/users`;
export const USER_ROUTE = `${BASE_URL}/user`; /* GET: fetch one user POST: update user profile */

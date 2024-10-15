import * as actions from "../constants/actionTypes";

// Action user
export const act_login_user = (user) => {
  return {
    type: actions.LOGIN_USER,
    payload: { user },
  };
};

export const act_logout_user = () => {
  return {
    type: actions.LOGOUT_USER,
  };
};

export const act_set_user = (user) => {
  return {
    type: actions.SET_USER,
    payload: { user },
  };
};

// Loading
export const set_Loading = () => ({
  type: actions.SET_LOADING,
});

// Action Creators
export const act_list_posts = () => {
  return {
    type: actions.LIST_POSTS,
  };
};

export const act_list_comments = (postId, comments) => {
  return {
    type: actions.LIST_COMMENTS,
    payload: { postId, comments },
  };
};

export const act_list_likes = () => {
  return {
    type: actions.LIST_LIKES,
  };
};

// Action push
export const act_push_posts = (post) => {
  return {
    type: actions.PUSH_POST,
    payload: post,
  };
};

export const act_push_comments = (postId, comments) => {
  return {
    type: actions.PUSH_COMMENTS,
    postId,
    comments,
  };
};

export const act_push_likes = (postId) => {
  return {
    type: actions.PUSH_LIKES,
    payload: postId,
  };
};

// Action update
export const act_update_posts = (post) => {
  return {
    type: actions.UPDATE_POST,
    payload: { post },
  };
};

export const act_update_comments = (postId, comments) => {
  return {
    type: actions.UPDATE_COMMENT,
    payload: { postId, comments },
  };
};

export const act_update_likes = (postId) => {
  return {
    type: actions.UPDATE_LIKE,
    payload: { postId },
  };
};

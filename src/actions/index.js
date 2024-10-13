import * as actions from "../constants/actionTypes";

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
export const act_push_posts = (post, contents, image) => {
  console.log(post, contents, image);

  return {
    type: actions.PUSH_POST,
    payload: { post, contents, image },
  };
};

export const act_push_comments = (postId, comments) => {
  return {
    type: actions.PUSH_COMMENTS,
    payload: { postId, comments },
  };
};

export const act_push_likes = (postId) => {
  return {
    type: actions.PUSH_LIKES,
    payload: { postId },
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

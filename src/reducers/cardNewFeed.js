import { LIST_POSTS } from "../constants/actionTypes";

const initialState = {
  newFeed: [
    {
      id: 1,
      title: "Đoàn Đức Nam",
      avatar:
        "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=4pGkZmgsya0Q7kNvgGWxfLC&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AQ9d5DHdA5fPBIgyxSGxLMI&oh=00_AYAnEpB4gD8mKxmGSZf2isYxfIEBmCtyFHv-0JVWtdwS5A&oe=670DA5B4",
      time: "1 phut trước",
      content: "Bài viết mới nhất",
      slug: "bai-viet-moi-nhat",
      detail: "Bài viết mới nhất",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Bloomberg",
      avatar: "images/page-thumb-1.png",
      time: "4 giờ trước",
      content: "Bài viết mới nhất",
      slug: "bai-viet-moi-nhat",
      detail: "Bài viết mới nhất",
      image: "images/feed-image-1.jpg",
    },
  ],
};

const cardNewFeed = (state = initialState.newFeed, action) => {
  switch (action.type) {
    case LIST_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return state;
  }
};

export default cardNewFeed;

import {
  LIST_POSTS,
  SET_USER,
  LOGOUT_USER,
  SET_LOADING,
} from "../constants/actionTypes";
import { LOCAL_STORAGE_NAME } from "../constants/localStorage";
import { PUSH_POST } from "../constants/actionTypes";

const MAX_STORAGE_SIZE = 5 * 1024 * 1024; // 5MB

const saveToLocalStorage = (key, value) => {
  try {
    const currentSize = new Blob([JSON.stringify(localStorage.getItem(key))])
      .size;
    const newSize = new Blob([JSON.stringify(value)]).size;

    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

let initialState = {
  status: "success",
  currentUser: {
    userId: 1,
    username: "Đoàn Đức Nam",
    avatar:
      "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=4pGkZmgsya0Q7kNvgGWxfLC&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AwYCL4pRFo1QPf8ktFMPpLs&oh=00_AYBUvIK0_chBSWMiFI9gSOdZ9P04GoQ2kJslqomVIgL1Iw&oe=670DDDF4",
  },
  loading: false,
  newFeed: [
    {
      id: 1,
      user: {
        userId: 1,
        username: "Đoàn Đức Nam",
        avatar:
          "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg",
      },
      post_user: {
        userId: 2,
        username: "Nguyễn Văn B",
        avatar: "https://example.com/avatar2.jpg",
      },
      time: "14/10/2024, 10:00:00 AM",
      content: "Bài viết của Nguyễn Văn B",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      user: {
        userId: 1,
        username: "Đoàn Đức Nam",
        avatar:
          "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg",
      },
      post_user: {
        userId: 1,
        username: "Phạm văn D",
        avatar:
          "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg",
      },
      time: "14/10/2024, 10:10:00 AM",
      content: "Bài viết của tôi",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      user: {
        userId: 1,
        username: "Đoàn Đức Nam",
        avatar:
          "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg",
      },
      post_user: {
        userId: 3,
        username: "Trần Thị C",
        avatar: "https://example.com/avatar3.jpg",
      },
      time: "14/10/2024, 10:15:00 AM",
      content: "Bài viết của Trần Thị C",
      image: "https://picsum.photos/200/300",
    },
  ],
};

const newFeedLocalStorage = localStorage.getItem(LOCAL_STORAGE_NAME);
if (newFeedLocalStorage) {
  try {
    const parsedFeed = JSON.parse(newFeedLocalStorage);

    // Đảm bảo parsedFeed là một mảng
    // initialState.newFeed = Array.isArray(parsedFeed) ? parsedFeed : [];
    initialState.newFeed = parsedFeed;
  } catch (error) {
    console.error("Error parsing localStorage:", error);
  }
}

const cardNewFeed = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: // Khi bật loading
      return {
        ...state,
        loading: true,
      };

    case PUSH_POST: {
      const newPost = action.payload;

      // Đảm bảo rằng newFeed là một mảng trước khi spread
      const updatedFeed = [newPost, ...state.newFeed];

      // Lưu toàn bộ state vào localStorage
      saveToLocalStorage(LOCAL_STORAGE_NAME, updatedFeed);

      return { ...state, newFeed: [newPost, ...state.newFeed], loading: false };
    }

    default:
      return state;
  }
};

export default cardNewFeed;

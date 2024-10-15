import { SET_USER, LOGOUT_USER } from "../constants/actionTypes";
import { LOCAL_STORAGE_NAME } from "../constants/localStorage";

const initialState = {
  userId: "12345",
  username: "Đoàn Đức Nam",
  email: "namdoan@example.com",
  avatar:
    "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=4pGkZmgsya0Q7kNvgGWxfLC&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AwYCL4pRFo1QPf8ktFMPpLs&oh=00_AYBUvIK0_chBSWMiFI9gSOdZ9P04GoQ2kJslqomVIgL1Iw&oe=670DDDF4",
  role: "user", // user, admin, etc.
  token: "JWT_TOKEN",
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default currentUser;

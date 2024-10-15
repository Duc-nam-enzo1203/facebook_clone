import React, { useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { Avatar, AvatarGroup } from "@mui/material";
import { Card } from "react-bootstrap";
import CardNewFeed from "../components/CardNewFeed";
import { useDispatch, useSelector } from "react-redux";
import CardUpPost from "../components/CardUpPost";
import slugifyText from "../utils/slugifyText";

export default function Profile() {
  const [modalShow, setModalShow] = React.useState(false);

  const state = useSelector((state) => state.cardNewFeed.newFeed);

  const myPost = state.map((post) =>
    post.post_user.username === "Đoàn Đức Nam" ? (
      <CardNewFeed
        key={post.id}
        username={post?.post_user?.username || "No username available"}
        avatar={post?.post_user?.avatar || "https://via.placeholder.com/150"}
        content={post?.content || "No content available"}
        slug={slugifyText(post?.content || "No content")}
        detail={post?.time || "No time available"}
        image={post?.image || "https://via.placeholder.com/150"}
      />
    ) : null
  );

  return (
    <>
      <div className=" container-fluid d-flex d-sm-block p-0">
        <div className="container-lg bg-light h-100 p-0">
          <div className="container-lg d-flex justify-content-center p-0">
            <img
              className="w-100 h-100"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              style={{ objectFit: "cover", maxHeight: "60vh" }}
            />
          </div>
        </div>
        <div
          className="container-lg row h-100 head_profile"
          style={{ margin: "-36px auto 0 auto" }}
        >
          <div className="col-12 col-lg-6 row align-items-end ">
            <div className="col-4 col-lg-4">
              <img
                className="rounded-circle border border-5 border-light w-100"
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=4pGkZmgsya0Q7kNvgGWxfLC&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AwYCL4pRFo1QPf8ktFMPpLs&oh=00_AYBUvIK0_chBSWMiFI9gSOdZ9P04GoQ2kJslqomVIgL1Iw&oe=670DDDF4"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-8 mb-lg-4">
              <div className="d-flex flex-column gap-lg-2 box_profile">
                <h1 className="fw-bolder" style={{ fontSize: "28px" }}>
                  Đoàn Đức Nam
                </h1>
                <span>1.4k người bạn</span>
                <AvatarGroup total={24} max={5}>
                  <Avatar
                    className="avt"
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  />
                  <Avatar
                    className="avt"
                    alt="Travis Howard"
                    src="../images/107385504_3254268864636602_4940680397346018818_o.jpg"
                  />
                  <Avatar
                    className="avt"
                    alt="Agnes Walker"
                    src="../images/107385504_3254268864636602_4940680397346018818_o.jpg"
                  />
                  <Avatar
                    className="avt"
                    alt="Trevor Henderson"
                    src="../images/107385504_3254268864636602_4940680397346018818_o.jpg"
                  />
                </AvatarGroup>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6  pb-lg-4 gap-lg-2 setting_profile">
            <div>
              <button className="btn btn-primary border-0 text-white fw-semibold rounded">
                + Thêm vào tin
              </button>
              <button className="ms-2 border-0 fw-semibold rounded btn btn-secondary">
                Chỉnh sửa trang cá nhân
              </button>
            </div>
            <div>
              <img
                className="rounded-circle border border-5 border-light w-100"
                src="https://img.icons8.com/fluency-systems-filled/15/null/ellipsis.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* option links to move */}
      </div>
      <div className="container-lg">
        <hr />
        <div className="container-lg d-lg-block d-lg-flex mt-lg-2 link d-flex p-0 justify-content-between">
          <div className="col-11 col-lg-8 d-flex gap-3">
            <a className="text-decoration-none fw-semibold" id="post" href="#">
              Bài viết
            </a>
            <a className="text-decoration-none fw-semibold" href="#">
              Giới thiệu
            </a>
            <a className="text-decoration-none fw-semibold" href="#">
              Bạn bè
            </a>
            <a className="text-decoration-none fw-semibold" href="#">
              Ảnh
            </a>
            <a className="text-decoration-none fw-semibold" href="#">
              Reels
            </a>
            <a className="text-decoration-none fw-semibold" href="#">
              Check-ins
            </a>
            <a className="text-decoration-none fw-semibold" href="#">
              Xem thêm ...
            </a>
          </div>
          <div className="col-lg-4 d-flex gap-2">
            <div className="w-100 d-flex justify-content-end">
              <button
                className="btn btn-secondary rounded fw-semibold border-0"
                style={{
                  padding: "5px 18px 7px 18px",
                  backgroundColor: "#e4e4e7",
                }}
              >
                <img src="https://img.icons8.com/fluency-systems-filled/15/null/ellipsis.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-lg mt-3 mb-5 pb-3"
        style={{ height: "fit-content" }}
      >
        {/* Bio Mr.Zuckerburg */}
        <div className="row  d-lg-flex d-block w-100 m-auto">
          <div className="col-12 col-lg-5 m-0 p-0  rounded-2">
            <div className="d-flex justify-content-end w-100">
              {/* position fixed*/}
              <div
                className="card pb-0 shadow-sm w-100"
                style={{
                  height: "fit-content",
                  width: "23rem",
                  borderRadius:
                    "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
                }}
              >
                {/* bio links of Mr. Zuck */}
                <div className="card-body d-flex flex-column gap-3">
                  <h5 className="card-title mb-2 fw-bold ">Giới thiệu</h5>
                  <p className="card-text text-center mb-1">True Blue.</p>
                  <button className="btn btn-secondary w-100 fw-semibold">
                    Chỉnh sửa tiểu sử
                  </button>
                  <div className="list-work d-flex align-items-center w-100">
                    <img src="./images/work.png" alt="" className="col-0.5" />
                    <p className="col-11.5">
                      Làm việc tại{" "}
                      <span className="fw-bold">React Developer</span>
                    </p>
                  </div>
                  <div className="list-work d-flex align-items-center">
                    <img
                      src="./images/location.png"
                      alt=""
                      className="col-0.5"
                    />
                    <p className="col-11.5">
                      Đến từ: <span className="fw-bold">Thái Nguyên</span>
                    </p>
                  </div>
                  <div className="list-work d-flex align-items-center">
                    <img src="./images/home.png" alt="" className="col-0.5" />
                    <p className="col-11.5">
                      Đang sống tại <span className="fw-bold">Hà Nội</span>
                    </p>
                  </div>
                  <div className="list-work d-flex align-items-center">
                    <img src="./images/heart.png" alt="" className="col-0.5" />
                    <p className="col-11.5">
                      Đang hẹn hò với <span className="fw-bold">Thái Hà</span>
                    </p>
                  </div>
                  <div className="list-work d-flex align-items-center">
                    <img
                      src="./images/followed.png"
                      alt=""
                      className="col-0.5"
                    />
                    <p className="col-11.5">
                      Có <span className="fw-bold">2.503 Người</span> theo dõi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* show more photos div  */}
            <div className="d-flex justify-content-end pt-3 w-100">
              <div
                className=" bg-body  pt-2 p-1 pb-3 shadow-sm w-100"
                style={{
                  height: "fit-content",

                  borderRadius:
                    "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
                }}
              >
                <div className="d-flex ps-3 pe-3">
                  <div className="w-50  d-flex justify-content-start">
                    <a
                      className="text-decoration-none text-dark fw-bold fs-5"
                      href="#"
                    >
                      Photos
                    </a>
                  </div>
                  <div className="w-50 d-flex justify-content-end align-items-end">
                    <a
                      className="text-decoration-none"
                      style={{ fontSize: "large" }}
                      href="#"
                    >
                      See all photos
                    </a>
                  </div>
                </div>
                {/* photos or Mr.Zuckerburg */}
                <div className="container">
                  <div className="row pt-3 g-3 row-cols-1 row-cols-lg-3 g-lg-1">
                    <div className="col g-1">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage:
                            "url(https://th.bing.com/th/id/OIP.isEVI5aWBMRmmY8Y40fawAHaEY?w=300&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7)",
                          backgroundSize: "cover",
                          height: 105,
                          borderRadius: "10px 0px 0px 0px",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage: "url(data:image/jpeg",
                          backgroundSize: "cover",
                          height: 105,
                          padding: "50%",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage:
                            "url(https://th.bing.com/th/id/OIP.sstLscq5OjzTCylZitO4rgHaE8?rs=1&pid=ImgDetMain)",
                          backgroundSize: "cover",
                          height: 105,
                          borderRadius: "0px 10px 0px 0px",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage: "url(data:image/jpeg",
                          backgroundSize: "cover",
                          height: 105,
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage: "url(data:image/jpeg",
                          backgroundSize: "cover",
                          height: 105,
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage: "url(data:image/jpeg",
                          backgroundSize: "cover",
                          height: 105,
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage:
                            "url(https://th.bing.com/th/id/OIP.DMgfYozLVYhHQ4ci8cVCpwHaGa?w=211&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7)",
                          backgroundSize: "cover",
                          height: 105,
                          borderRadius: "0px 0px 0px 10px",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage:
                            "url(https://th.bing.com/th/id/OIP.AftoTxE8v4beTQsroA4mCgHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7)",
                          backgroundSize: "cover",
                          height: 105,
                        }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="p-5 border bg-light"
                        style={{
                          backgroundImage:
                            "url(https://th.bing.com/th/id/OIP.IJqEY_0T3nU3POBGVFbiiAHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7)",
                          backgroundSize: "cover",
                          height: 105,
                          borderRadius: "0px 0px 10px 0px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* friends of Mr. Zuckerberg */}
            <div className="d-flex justify-content-end pt-3 w-100">
              <div
                className="text-center bg-body  d-flex p-3 w-100 shadow-sm"
                style={{
                  height: "fit-content",
                  borderRadius:
                    "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
                }}
              >
                <div className="d-flex align-items-center w-50 ps-3">
                  <a
                    className="text-decoration-none text-dark fs-5 fw-bold"
                    href="#"
                  >
                    Friends
                  </a>
                </div>
                <div
                  className="d-flex justify-content-end align-items-center w-50 pe-3"
                  style={{ fontSize: "large" }}
                >
                  <a className="text-decoration-none" href="#">
                    See all friends
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end pt-3 w-100">
              <div
                className="text-center bg-body p-3 shadow-sm w-100"
                style={{
                  height: "fit-content",

                  borderRadius:
                    "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
                }}
              >
                <div className="pb-3">
                  <div className="d-flex">
                    <div className=" w-100 d-flex justify-content-start">
                      <a
                        className="text-decoration-none text-dark fs-5 fw-bold"
                        href="#"
                      >
                        Life events
                      </a>
                    </div>
                    <div className=" w-100 d-flex justify-content-end">
                      <a
                        className="text-decoration-none"
                        style={{ fontSize: "large" }}
                        href="#"
                      >
                        See all
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block d-lg-flex" style={{ gap: 4 }}>
                  <div
                    className="pb-5"
                    style={{
                      width: "18rem",
                      borderRadius: "10px 0px 0px 10px",
                      border: "1px solid rgb(231, 228, 228)",
                    }}
                  >
                    <a className="text-decoration-none text-dark" href="#">
                      <img
                        style={{ borderRadius: "10px 0px 0px 0px" }}
                        src="https://scontent.fdel6-1.fna.fbcdn.net/v/t31.18172-8/21125382_10103996696998971_9026128102099043001_o.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=2e566b&_nc_ohc=WGUBi2Mnwe8AX_OrxXy&_nc_ht=scontent.fdel6-1.fna&oh=00_AfByOvT7flEseEu7gwxBBEFJWHSCCADmod4bdJlepXuw_w&oe=63C2667F"
                        className="card-img-top"
                      />
                      <div style={{ position: "relative", bottom: 15 }}>
                        <img
                          className="rounded-circle"
                          src="milk.png"
                          alt=""
                          height={40}
                        />
                      </div>
                      <div className="pb-2">
                        <h5 className="card-title fs-6 fw-semibold p-0 pb-1 m-0">
                          August Was Born
                        </h5>
                        <p className="card-text" style={{ fontSize: 13 }}>
                          August2017
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="pb-5"
                    style={{
                      width: "18rem",
                      borderRadius: "0px 10px 10px 0px",
                      border: "1px solid rgb(231, 228, 228)",
                    }}
                  >
                    <a className="text-decoration-none text-dark" href="#">
                      <img
                        style={{ borderRadius: "0px 10px 0px 0px" }}
                        src="https://scontent.fdel6-1.fna.fbcdn.net/v/t31.18172-8/18620824_10103748160328451_4582996853759431167_o.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=2e566b&_nc_ohc=oH3zDmFFVIsAX_J33qW&_nc_ht=scontent.fdel6-1.fna&oh=00_AfDUJw3AM2z2_jNC4yT_Wob3hfuLnQsqpAjPt2-L4BGfYA&oe=63C263BA"
                        className="card-img-top"
                      />
                      <div style={{ position: "relative", bottom: 15 }}>
                        <img
                          className="rounded-circle"
                          src="degree.png"
                          alt=""
                          height={40}
                        />
                      </div>
                      <div className="pb-2">
                        <h5 className="card-title fs-6 fw-semibold p-0 pb-1 m-0">
                          Harvard Degree
                        </h5>
                        <p className="card-text" style={{ fontSize: 13 }}>
                          May 25, 2017
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end pt-3 w-100">
              <div
                className="  d-lg-flex  w-100 d-none "
                style={{
                  height: "fit-content",

                  borderRadius:
                    "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
                }}
              >
                <div>
                  <a
                    className="text-decoration-none text-secondary fw-semibold"
                    style={{ fontSize: "smaller" }}
                    href="#"
                  >
                    Privacy•
                  </a>
                  <a
                    className="text-decoration-none text-secondary fw-semibold"
                    style={{ fontSize: "smaller" }}
                    href="#"
                  >
                    Terms•
                  </a>
                  <a
                    className="text-decoration-none text-secondary fw-semibold"
                    style={{ fontSize: "smaller" }}
                    href="#"
                  >
                    Advertising•
                  </a>
                  <a
                    className="text-decoration-none text-secondary fw-semibold"
                    style={{ fontSize: "smaller" }}
                    href="#"
                  >
                    Ad Choices•
                  </a>
                  <a
                    className="text-decoration-none text-secondary fw-semibold"
                    style={{ fontSize: "smaller" }}
                    href="#"
                  >
                    Cookies•
                  </a>
                  <a
                    className="text-decoration-none text-secondary fw-semibold"
                    style={{ fontSize: "smaller" }}
                    href="#"
                  >
                    More•
                  </a>
                  <br />
                  <p
                    className="text-decoration-none text-secondary"
                    style={{ fontSize: "smaller" }}
                  >
                    Meta © 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* post collage */}
          <div className="d-flex flex-column d-lg-block col-12 col-lg-7 ps-lg-3 p-0">
            <CardUpPost modalShow={modalShow} setModalShow={setModalShow} />
            <div className="card d-sm-flex justify-content-start bg-body shadow-sm rounded-2">
              <div className="card-body p-2 d-flex align-items-center">
                <h5 className="card-title fw-bolder">Posts</h5>
                <div className=" w-100 d-flex justify-content-end">
                  <button
                    className="btn d-flex"
                    style={{ backgroundColor: "#efeff4", width: 90 }}
                  >
                    <img
                      className="me-2 mt-1"
                      src="https://img.icons8.com/material-outlined/20/null/sorting-options.png"
                      height={18}
                    />
                    Filters
                  </button>
                </div>
              </div>
            </div>
            {/* post of mark -----------------------------*/}
            {myPost}
          </div>
        </div>
      </div>
    </>
  );
}

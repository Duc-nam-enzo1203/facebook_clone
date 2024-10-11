import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  return (
    <>
      <div className=" container-fluid d-flex d-sm-block">
        <div className="container bg-light h-100">
          <div className="container-md d-flex justify-content-center p-0">
            <img
              className="w-100 h-100"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              style={{ objectFit: "cover", maxHeight: "60vh" }}
            />
          </div>
        </div>
        <div
          className="container row h-100"
          style={{ margin: "-36px auto 0 auto" }}
        >
          <div className="col-12 col-lg-6 row align-items-end ">
            <div className="col-12 col-lg-4">
              <img
                className="rounded-circle border border-5 border-light w-100"
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=4pGkZmgsya0Q7kNvgGWxfLC&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AwYCL4pRFo1QPf8ktFMPpLs&oh=00_AYBUvIK0_chBSWMiFI9gSOdZ9P04GoQ2kJslqomVIgL1Iw&oe=670DDDF4"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-8 mb-lg-4">
              <div className="d-flex flex-column gap-lg-2">
                <h1 className="fw-bolder" style={{ fontSize: "28px" }}>
                  Đoàn Đức Nam
                </h1>
                <span>1.4k người bạn</span>
                <ul className="d-flex ">
                  <li className="col-lg-1">
                    <img
                      className="rounded-circle w-100 border border-2 border-light"
                      src="../images/107385504_3254268864636602_4940680397346018818_o.jpg"
                      alt=""
                    />
                  </li>
                  <li className="col-lg-1" style={{ marginLeft: "-4px" }}>
                    <img
                      className="rounded-circle w-100 border border-2 border-light"
                      src="../images/107385504_3254268864636602_4940680397346018818_o.jpg"
                      alt=""
                    />
                  </li>
                  <li className="col-lg-1" style={{ marginLeft: "-4px" }}>
                    <img
                      className="rounded-circle w-100 border border-2 border-light"
                      src="../images/107385504_3254268864636602_4940680397346018818_o.jpg"
                      alt=""
                    />
                  </li>
                  <li className="col-lg-1" style={{ marginLeft: "-4px" }}>
                    <img
                      className="rounded-circle w-100 border border-2 border-light"
                      src="../images/107385504_3254268864636602_4940680397346018818_o.jpg"
                      alt=""
                    />
                  </li>
                  <li className="col-lg-1" style={{ marginLeft: "-4px" }}>
                    <img
                      className="rounded-circle w-100 border border-2 border-light"
                      src="../images/107385504_3254268864636602_4940680397346018818_o.jpg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-end align-items-end pb-lg-4 gap-lg-2">
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
      <div className="container">
        <hr />
        <div className="container d-none d-lg-block d-lg-flex mt-2 link">
          <div className="col-12 col-lg-8 d-flex gap-3">
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
          <div className="col-12 col-lg-4 d-flex gap-3">
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
      <div className="container mt-3">
        {/* Bio Mr.Zuckerburg */}
        <div className="row  d-lg-flex d-block">
          <div className="col-5 m-0 p-0  rounded-2">
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
                className="  d-flex  w-100 "
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
          <div className="d-flex justify-content-center d-lg-block col-7 ps-3 ">
            <div className="card">
              <div className="new-post-action">
                <img src="images/profile-320.jpg" className="my-profile" />
                <input placeholder="What's on your mind, Yongmin?" />
              </div>
              <div className="new-post-types">
                <div className="post-type">
                  <i className="live-video-icon" /> Live Video
                </div>
                <div className="post-type">
                  <i className="photo-video-icon" /> Photo/Video
                </div>
                <div className="desktop-tablet-only">
                  <div className="post-type">
                    <i className="feeling-activity-icon" /> Felling/Activity
                  </div>
                </div>
              </div>
            </div>
            <div className="card d-sm-flex justify-content-start bg-body shadow-sm rounded-2 ">
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
            <div className="posts shadow-sm">
              <div className="profile bg-body mt-3 rounded-3 pt-2  d-flex flex-column">
                <div className="w-100 d-flex ps-3 justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=4pGkZmgsya0Q7kNvgGWxfLC&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AwYCL4pRFo1QPf8ktFMPpLs&oh=00_AYBUvIK0_chBSWMiFI9gSOdZ9P04GoQ2kJslqomVIgL1Iw&oe=670DDDF4"
                      alt=""
                      height={43}
                    />
                    <div className="">
                      <h6 className="m-0 pb-0 d-flex align-items-center">
                        Đoàn Đức Nam
                      </h6>
                      <a
                        className=" d-flex align-items-center fw-semibold m-0 pt-0 globe"
                        style={{ color: "grey", fontSize: "small" }}
                        href="#"
                      >
                        December 7 at 1:28 PM ·
                      </a>
                    </div>
                  </div>
                  <div className=" ms-1 w-50 d-flex align-items-center justify-content-end ">
                    <button className="border-0 bg-body">
                      <img src="https://img.icons8.com/fluency-systems-filled/15/null/ellipsis.png" />
                    </button>
                  </div>
                </div>

                <p className="mt-2 ps-3 pe-2 " style={{ lineHeight: "1.4em" }}>
                  We're bringing avatars to WhatsApp! Now you can use your
                  avatar as a sticker in chats. More styles coming soon across
                  all our apps.
                </p>

                <a href="#" className="w-100 ps-3 " style={{ minHeight: 400 }}>
                  <img
                    className="mt-2 w-100 h-100"
                    src="https://i.ytimg.com/vi/vlDDtDPVvVY/maxresdefault.jpg"
                  />
                </a>
                <div className="class container pb-2">
                  <div className="d-flex align-items-center p-2  bg-body">
                    <img
                      src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                      alt=""
                      height={20}
                    />
                    <img
                      src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e"
                      alt=""
                      height={20}
                    />
                    <img
                      src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                      alt=""
                      height={20}
                    />
                    <a
                      className="text-secondary text-decoration-none ms-2"
                      href="#"
                    >
                      49K
                    </a>
                    <div className="link-secondary w-100 d-flex justify-content-end ">
                      <a
                        className="text-decoration-none text-secondary me-2"
                        href="#"
                      >
                        11k comments
                      </a>
                      <a
                        className="text-decoration-none text-secondary"
                        href="#"
                      >
                        {" "}
                        1.1K shares
                      </a>
                    </div>
                  </div>
                  {/* like commments shares */}
                  <div
                    className=" text-align-end d-flex justify-content-center pt-2 pb-2"
                    style={{
                      borderBottom: "1px solid rgb(191, 189, 189)",
                      borderTop: "1px solid rgb(191, 189, 189)",
                    }}
                  >
                    <button className="text-secondary text-align-center border-0 bg-body d-flex align-items-center justify-content-center w-100">
                      <img
                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                        alt=""
                      />{" "}
                      Thích
                    </button>
                    <button className="text-secondary border-0 bg-body w-100">
                      Comment
                    </button>
                    <button className="text-secondary border-0 bg-body w-100">
                      Share
                    </button>
                  </div>
                  {/* dropdown comments */}
                  <div className="container d-flex justify-content-end pt-2">
                    <select
                      className="border-0 fw-semibold text-secondary"
                      style={{ outline: 0 }}
                      name="Most Relevant"
                      id="Most Relevant"
                    >
                      <option value="Most Relevant">Most Relevant</option>
                    </select>
                  </div>
                  {/* enter a comments */}
                  <div className="container mt-2 ps-1 d-flex mb-2">
                    {/* profile Photo */}
                    <div
                      className="d-flex rounded-circle align-items-end justify-content-end me-2"
                      style={{
                        backgroundImage:
                          "url(https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=4pGkZmgsya0Q7kNvgGWxfLC&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AwYCL4pRFo1QPf8ktFMPpLs&oh=00_AYBUvIK0_chBSWMiFI9gSOdZ9P04GoQ2kJslqomVIgL1Iw&oe=670DDDF4)",
                        width: 45,
                        height: 40,
                        backgroundSize: "cover",
                      }}
                    >
                      {/* online Green dot */}
                      <img
                        className="rounded-circle bg-body p-0 m-0"
                        src="https://img.icons8.com/emoji/15/null/green-circle-emoji.png"
                        style={{ width: 16, height: 16 }}
                      />
                    </div>
                    <div
                      className="input-group d-flex align-items-center ms-0  rounded-5 justify-content-between"
                      style={{ backgroundColor: "rgb(228, 225, 225)" }}
                    >
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        className="border-0  p-0 ps-3"
                        style={{ backgroundColor: "transparent" }}
                      />
                      {/* sides input img links */}
                      <span className=" w-50 d-flex justify-content-end">
                        <a href="#">
                          <img
                            className="me-1"
                            src="./images/avatar.png"
                            alt=""
                            height={20}
                          />
                        </a>
                        <a href="#">
                          <img
                            className="me-1"
                            src="./images/smile.png"
                            alt=""
                            height={20}
                          />
                        </a>
                        <a href="#">
                          <img
                            className="me-1"
                            src="./images/canera.png"
                            alt=""
                            height={20}
                          />
                        </a>
                        <a href="#">
                          <img
                            className="me-1"
                            src="./images/gif.png"
                            alt=""
                            height={20}
                          />
                        </a>
                        <a href="#">
                          <img
                            className="me-1"
                            src="./images/sticker.png"
                            alt=""
                            height={20}
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                  {/* enter to share comment */}
                  <span
                    style={{ fontSize: "smaller", color: "rgb(71, 71, 71)" }}
                  >
                    <p className="ps-5 ms-1">Press Enter to post.</p>
                  </span>
                  {/* comments */}
                  <div className="container-fluid d-flex p-0 mt-2">
                    <img
                      className="rounded-circle"
                      src="https://avatars.githubusercontent.com/u/120738980?v=4"
                      height={35}
                      alt=""
                    />
                    <div
                      className="rounded-5 ps-1"
                      style={{ backgroundColor: "rgb(228, 225, 225)" }}
                    >
                      <div className="d-flex align-items-center pt-2 ps-2">
                        <a
                          className="text-decoration-none text-black fw-bold d-flex gap-lg-1 align-content-center"
                          style={{ fontSize: "small" }}
                          href="#"
                        >
                          Samad Aman{" "}
                          <span>
                            <img
                              src="./images/tick.png"
                              style={{ width: 16, height: 16 }}
                            />
                          </span>
                        </a>
                        <a
                          className="text-decoration-none ms-1"
                          style={{ fontSize: "small" }}
                          href="#"
                        >
                          .Follow
                        </a>
                      </div>
                      <div className="p-2">
                        <p
                          className="p-0 m-0 pb-2"
                          style={{ textAlign: "start" }}
                        >
                          Mark! <br />
                          There are so many questions about the way your
                          operation team runs Facebook ,how is there tons of
                          porn commercial advertising left unsolved, and also
                          lots of fake accounts attacking every account that we
                          report complains , and be left wondering…{" "}
                          <a
                            className="fw-semibold text-decoration-none text-dark"
                            href="#"
                          >
                            {" "}
                            See more
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* comments like reply */}
                  <div
                    className="container ps-5 pt-2 d-flex"
                    style={{ gap: 15 }}
                  >
                    <a
                      className="text-decoration-none fw-bold "
                      style={{
                        color: "rgb(81, 81, 81)",
                        fontSize: "smaller",
                      }}
                      href="#"
                    >
                      Like
                    </a>
                    <a
                      className="text-decoration-none fw-bold "
                      style={{
                        color: "rgb(105, 105, 105)",
                        fontSize: "smaller",
                      }}
                      href="#"
                    >
                      Reply
                    </a>
                    <a
                      className="text-decoration-none  text-secondary"
                      style={{ fontSize: "smaller" }}
                      href="#"
                    >
                      2d
                    </a>
                    <div
                      className="d-flex w-100 justify-content-end align-items-center"
                      style={{ position: "relative", bottom: 15 }}
                    >
                      <button
                        className="border-0 m-0 ps-0 bg-body shadow-sm rounded-5"
                        style={{ fontSize: "smaller", color: "grey" }}
                      >
                        {" "}
                        <img
                          className="p-0 m-0"
                          src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                          height={19}
                        />{" "}
                        1.2K
                      </button>
                    </div>
                  </div>
                  {/* view more replies */}
                  <div className="container ps-5 mt-1 d-flex align-items-center gap-lg-2">
                    <img src="./images/arrow.png" alt="" />
                    <span>
                      <a
                        className="text-secondary fw-semibold text-decoration-none"
                        href="#"
                      >
                        61 Replies
                      </a>
                    </span>
                  </div>
                  {/* view more commments */}
                  <div className=" container">
                    <div className="row">
                      <div className="col d-flex  align-items-center">
                        <a
                          className=" fw-semibold text-secondary text-decoration-none"
                          href="#"
                        >
                          View more comments
                        </a>
                      </div>
                      <div className="col d-flex align-items-center justify-content-end">
                        <a
                          className="text-decoration-none text-secondary"
                          href="#"
                        >
                          1 of 2,408
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* last div -------------------------*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

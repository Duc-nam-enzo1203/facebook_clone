import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { act_push_posts } from "../actions/index";
import TriggerRendererProp from "./TriggerRendererProp";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./ModalUpPost.css";

export default function ModalUpPost(props) {
  const [showUpload, setShowUpload] = useState(props.show);
  const dispatch = useDispatch();
  const cardNewFeed = useSelector((state) => state.cardNewFeed);
  const currentUser = useSelector((state) => state.currentUser); // Giả sử bạn có lưu user hiện tại trong Redux store

  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const fileInputRef = useRef(null);

  const handleContents = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      updateThumbnail(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      updateThumbnail(droppedFile);
    }
  };

  const updateThumbnail = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setThumbnail(reader.result);
      };
    } else {
      setThumbnail(null);
    }
  };

  const handleClose = () => {
    setShowUpload(false);
    setFile(null);
    setThumbnail(null);
    setContent("");
  };

  const pushPost = () => {
    // Tạo đối tượng post theo cấu trúc API
    const post = {
      id: cardNewFeed.newFeed.length + 1, // Tạo ID tự tăng
      user: {
        userId: currentUser.userId,
        username: currentUser.username,
        avatar: currentUser.avatar,
      },
      post_user: {
        userId: currentUser.userId,
        username: currentUser.username,
        avatar: currentUser.avatar,
      },
      time: new Date().toLocaleString(),
      content: content,
      image: thumbnail, // Sử dụng thumbnail base64 cho đơn giản
    };
    dispatch(act_push_posts(post));
    handleClose();
    setShowUpload(props.onHide);
  };

  const elementsUpload = (
    <div className="upload-container border border-1 border-gray p-1">
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={handleClose}
      ></button>
      <div>
        <form
          className="d-flex flex-column align-items-center justify-content-between gap-2 p-2 pt-4 pb-4 position-relative"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div
            className={`drop-zone ${thumbnail ? "" : "drop-zone__prompt"}`}
            onClick={() => fileInputRef.current.click()}
          >
            <Button
              type="file"
              variant="light"
              className="drop-zone__prompt  d-flex align-items-center justify-content-center p-0 m-0"
              style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              onClick={(e) => e.preventDefault()}
            >
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  className="w-100 h-100 position-absolute top-0 left-0 object-fit-cover"
                  style={{ borderRadius: "8px" }}
                />
              ) : (
                <Image
                  roundedCircle
                  src="../images/photos.png"
                  className="w-100"
                />
              )}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              name="myFile"
              className="drop-zone__input"
              onChange={handleFileChange}
            />
          </div>
          <h2>Thêm ảnh/video</h2>
          <p>hoặc kéo và thả</p>
        </form>
      </div>
      <div className="d-flex align-items-center justify-content-between gap-2 p-2">
        <p className="col-9">Thêm ảnh và video từ thiết bị di động.</p>
        <button className="btn btn-secondary col-2">Thêm</button>
      </div>
    </div>
  );

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHide} // Đóng modal khi bấm ngoài
    >
      <Modal.Header
        closeButton
        className="d-flex flex-column justify-content-center"
      >
        <Modal.Title id="contained-modal-title-vcenter" className="fw-bolder">
          Tạo bài viết
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column gap-2">
        <div className="d-flex align-items-center gap-lg-1">
          <img
            src={currentUser.avatar}
            className="col-1 rounded-circle"
            alt="User Avatar"
          />
          <div className="col-11 d-flex flex-column g-md-2 gap-1">
            <h4 className="fw-bolder">{currentUser.username}</h4>
            <button
              className="btn btn-outline-secondary btn-sm w-fit-content d-flex align-items-center p-0"
              style={{ width: "25%" }}
            >
              <img src="./images/friendBlack.png" alt="" className="col-3" />
              <span className="col-7 fw-bolder" style={{ fontSize: "12px" }}>
                Bạn bè
              </span>
              <i className="chevron-bottom-icon col-2"></i>
            </button>
          </div>
        </div>
        <div>
          <textarea
            rows="1"
            placeholder="Bạn đang nghĩ gì ?"
            className="border-0 pt-2 w-100 content"
            value={content}
            style={{ minHeight: "150px" }}
            onChange={handleContents}
          />
        </div>
        {showUpload ? elementsUpload : null}
        <div
          className="d-flex border border-1 border-gray p-2 align-items-center justify-content-between "
          style={{ borderRadius: "12px" }}
        >
          <h4 className="col-7">Thêm vào bài viết của bạn</h4>
          <TriggerRendererProp onClickUpload={() => setShowUpload(true)} />
        </div>

        <div className="w-100">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={pushPost}
          >
            Đăng
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

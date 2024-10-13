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
  const [contents, setContents] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: "",
    slug: "",
    time: "",
    avatar: "",
    content: "",
    detail: "",
    image: "",
  });

  const handleContents = (e) => {
    setContents(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleUpload = () => {
    setShowUpload(true);
  };

  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const fileInputRef = useRef(null);

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
      setThumbnail(null); // Reset thumbnail for non-image files
    }
  };

  // if (!showUpload) return null;

  const handleClose = () => {
    setShowUpload(false);
    setFile(null);
    setThumbnail(null);
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
                  src={thumbnail} // Display the selected image
                  className="w-100 h-100 position-absolute top-0 left-0 object-fit-cover"
                  style={{ borderRadius: "8px" }}
                />
              ) : (
                <Image
                  roundedCircle
                  src="../images/photos.png" // Default image
                  className="w-100"
                />
              )}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              name="myFile"
              class="drop-zone__input"
              onChange={handleFileChange} // Handle file input change
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

  const pushPost = (post, contents, image) => {
    console.log(post, contents, image);
    dispatch(act_push_posts(post, contents, image));
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=NC3vci7UqLcQ7kNvgE0gZsZ&_nc_ht=scontent.fhan14-3.fna&_nc_gid=At7mn0jdliKnNbr9X20zsBt&oh=00_AYBNbpBzATWSjPq5aY6pJH4VHI25FDWfYmkO2ED-xJCNKg&oe=670E86B4"
            className="col-1 rounded-circle"
          />
          <div className="col-11 d-flex flex-column g-md-2 gap-1">
            <h4 className="fw-bolder">Đoàn Đức Nam</h4>
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
            placeholder="Nhập tiêu đề bài viết..."
            className="border-0 pt-2 w-100 content"
            value={contents}
            style={{ minHeight: "150px" }}
            onChange={(e) => handleContents(e)}
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
            onClick={() => pushPost(post, contents, thumbnail)}
          >
            Đăng
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

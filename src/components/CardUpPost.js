import React from "react";
import ModalUpPost from "../components/ModalUpPost";
import Button from "react-bootstrap/Button";
import TriggerRendererProp from "./TriggerRendererProp";

export default function CardUpPost({ modalShow, setModalShow }) {
  return (
    <div className="card">
      <div className="new-post-action">
        <img src="images/profile-320.jpg" className="my-profile " />
        <Button
          className="w-100 bg-body-secondary border-0 text-start "
          style={{ color: "black", borderRadius: "24px" }}
          onClick={() => setModalShow(true)}
        >
          Nam ơi, bạn đang nghĩ gì thế ?
        </Button>
        <ModalUpPost show={modalShow} onHide={() => setModalShow(false)} />
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
  );
}

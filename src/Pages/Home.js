import React, { useState } from "react";
import slugifyText from "../utils/slugifyText";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalUpPost from "../components/ModalUpPost";
import CardNewFeed from "../components/CardNewFeed";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  const newFeed = useSelector((state) => state.cardNewFeed);
  const dispatch = useDispatch();

  const renderNewFeed = newFeed.map((post) => (
    <CardNewFeed
      key={post.id}
      title={post.title}
      avatar={post.avatar}
      time={post.time}
      content={post.content}
      slug={post.slug}
      detail={post.detail}
      image={post.image}
    />
  ));

  return (
    <div className="content-grid">
      <div className="column-left desktop-tablet-only">
        <div className="fixed-area">
          <ul className="menus px-2">
            <li className="menu-profile-item">
              <Link
                to={`/profile`}
                className="d-flex align-items-center text-decoration-none"
              >
                <img src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/344383217_1602548420214456_8251093224590840578_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFhlzcyTjlcrZyYHqQqyAm-luPyiUS3a-SW4_KJRLdr5KknJ76yA18NYZRzgox4rAYkMNN65ccrSO1d8yMlee0D&_nc_ohc=4pGkZmgsya0Q7kNvgGWxfLC&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AQ9d5DHdA5fPBIgyxSGxLMI&oh=00_AYAnEpB4gD8mKxmGSZf2isYxfIEBmCtyFHv-0JVWtdwS5A&oe=670DA5B4" />
                <span style={{ color: "black" }}>Đoàn Đức Nam</span>
              </Link>
            </li>
            <li className="menu-page-item">
              <img src="../images/friend.png" />
              <div>
                <span>Bạn bè</span>
                <div className="new-info">
                  <span className="dot" />
                  <span>5 new</span>
                </div>
              </div>
            </li>
            <li>
              <img src="../images/memories.png" />
              <span>Kỷ niệm</span>
            </li>
            <li>
              <img src="../images/saved.png" />
              <span>Đã lưu</span>
            </li>
            <li>
              <img src="../images/menu-groups.png" />
              <span>Nhóm</span>
            </li>
            <li>
              <div className="action-button-3">
                <i className="chevron-bottom-icon" />
              </div>
              <span>Xem thêm</span>
            </li>
          </ul>
          <div className="separator" />
          <div className="shortcuts">
            <span className="title">Lối tắt của bạn</span>
            <ul className="px-2">
              <li>
                <img src="../images/shortcut-1.jpg" />
                <span>Harbor School</span>
              </li>
              <li>
                <img src="../images/shortcut-2.jpg" />
                <span>Framer Korea</span>
              </li>
              <li>
                <img src="../images/shortcut-3.jpg" />
                <span>Framer</span>
              </li>
              <li>
                <div className="action-button-3">
                  <i className="chevron-bottom-icon" />
                </div>
                <span>Xem thêm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column-center">
        <div className="content-area">
          <div className="stories">
            <div className="story">
              <div className="story-inner story-cta">
                <div className="story-cta-profile">
                  <img src="/images/profile-320.jpg" />
                </div>
                <div className="overlay-gradient" />
                <div className="story-cta-text">
                  <span>Create a Story</span>
                  <div className="new-story-button-wrap">
                    <div className="new-story-button">
                      <i className="plus-icon-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="story">
              <div className="story-inner">
                <img src="/images/story-1.jpg" />
                <div className="overlay-gradient" />
                <div className="story-author-img">
                  <img src="https://randomuser.me/api/portraits/women/13.jpg" />
                </div>
                <div className="story-author-name">Avi Sandoval</div>
              </div>
            </div>
            <div className="story">
              <div className="story-inner">
                <img src="/images/story-2.jpg" />
                <div className="overlay-gradient" />
                <div className="story-author-img">
                  <img src="https://randomuser.me/api/portraits/women/14.jpg" />
                </div>
                <div className="story-author-name">Fynley Bowman</div>
              </div>
            </div>
            <div className="story">
              <div className="story-inner">
                <img src="/images/story-3.jpg" />
                <div className="overlay-gradient" />
                <div className="story-author-img">
                  <img src="https://randomuser.me/api/portraits/women/15.jpg" />
                </div>
                <div className="story-author-name">Frida Hays</div>
              </div>
            </div>
            <div className="story desktop-only">
              <div className="story-inner">
                <img src="/images/story-4.jpg" />
                <div className="overlay-gradient" />
                <div className="story-author-img">
                  <img src="https://randomuser.me/api/portraits/women/16.jpg" />
                </div>
                <div className="story-author-name">Karam Turnbull</div>
              </div>
            </div>
            <div className="story desktop-only">
              <div className="story-inner">
                <img src="/images/story-5.jpg" />
                <div className="overlay-gradient" />
                <div className="story-author-img">
                  <img src="https://randomuser.me/api/portraits/women/17.jpg" />
                </div>
                <div className="story-author-name">Leona Chester</div>
              </div>
            </div>
            <div className="desktop-tablet-only">
              <div className="more-stories-button">
                <i className="right-arrow-icon" />
              </div>
            </div>
          </div>
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
              <ModalUpPost
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
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
          {renderNewFeed}
        </div>
      </div>
      <div className="column-right  desktop-tablet-only">
        <div className="fixed-area">
          <div className="sponsored">
            <span className="title">Sponsored</span>
            <div className="sponsor-list">
              <div className="sponsor-item">
                <img src="/images/sponsor-1.jpg" />
                <div className="sponsor-info">
                  <span>Create your perfect video</span>
                  <div>artlist.io</div>
                </div>
              </div>
              <div className="sponsor-item">
                <img src="/images/sponsor-2.jpg" />
                <div className="sponsor-info">
                  <span>Create your perfect video</span>
                  <div>artlist.io</div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator" />
          <div className="birthdays">
            <span className="title">Birthdays</span>
            <div className="info">
              <i className="birthday-icon" />
              <span>
                <strong>Cydney Barron</strong> and <strong>4 others</strong>{" "}
                have birthdays today.
              </span>
            </div>
          </div>
          <div className="separator" />
          <div className="contacts">
            <div className="header">
              <span className="title">Contacts</span>
              <div className="actions">
                <i className="contact-live-video-icon" />
                <i className="contact-search-icon" />
                <i className="contact-menu-icon" />
              </div>
            </div>
            <ul className="contacts-list">
              <li className="contacts-item">
                <img src="https://randomuser.me/api/portraits/men/20.jpg" />
                <span>Serenity Nunez</span>
              </li>
              <li className="contacts-item">
                <img src="https://randomuser.me/api/portraits/women/21.jpg" />
                <span>Dottie Whittaker</span>
              </li>
              <li className="contacts-item">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" />
                <span>Frida Hays</span>
              </li>
              <li className="contacts-item">
                <img src="https://randomuser.me/api/portraits/women/23.jpg" />
                <span>Leona Chester</span>
              </li>
              <li className="contacts-item">
                <img src="https://randomuser.me/api/portraits/women/24.jpg" />
                <span>Toyah Martin</span>
              </li>
              <li className="contacts-item">
                <img src="https://randomuser.me/api/portraits/women/25.jpg" />
                <span>Saffa Mcdermott</span>
              </li>
              <li className="contacts-item">
                <img src="https://randomuser.me/api/portraits/women/26.jpg" />
                <span>Teodor Mcphee</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

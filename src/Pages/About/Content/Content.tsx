import React from "react";
import styles from "./Content.module.scss";
import BreakLine from "../../../Components/UI/BreakLine/BreakLine";
import ContentWrap from "../../../Layouts/ContentWrap/ContentWrap";
import image from "./../../../assets/img/About-Image 1.jpg";
import image2 from "./../../../assets/img/About-Image-2.jpg";
import isabel from "./../../../assets/img/product/Isabel.jpg";
import fred from "./../../../assets/img/product/Fred.jpg";
import maurice from "./../../../assets/img/product/Maurice.jpg";
const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.background}>&nbsp;</div>
      <BreakLine>Introduction</BreakLine>
      <ContentWrap>
        <h2>Overlaid the jeepers uselessly much excluding everyday life.</h2>
        <p>
          t is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
      </ContentWrap>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h3 className={styles.heading}>
            Overlaid the jeepers uselessly much excluding everyday life.
          </h3>
          <p>
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
        </div>

        <div className={styles.gridItem}>
          <h3 className={styles.heading}>
            Overlaid the jeepers uselessly much excluding everyday life.
          </h3>
          <p>
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={image2} alt="" />
        </div>
      </div>
      <BreakLine>Introduction</BreakLine>
      <div className={styles.teamPictures}>
        <div className={styles.teamContainer}>
          <div className={styles.teamPicture}>
            <img src={fred} alt="" />
          </div>
          <h3 className={styles.name}>Fred Gleason</h3>
          <p className={styles.position}>Brand Owner</p>
        </div>
        <div className={styles.teamContainer}>
          <div className={styles.teamPicture}>
            <img src={isabel} alt="" />
          </div>
          <h3 className={styles.name}>Fred Gleason</h3>
          <p className={styles.position}>Brand Owner</p>
        </div>
        <div className={styles.teamContainer}>
          <div className={styles.teamPicture}>
            <img src={maurice} alt="" />
          </div>
          <h3 className={styles.name}>Fred Gleason</h3>
          <p className={styles.position}>Brand Owner</p>
        </div>
      </div>
    </div>
  );
};

export default Content;

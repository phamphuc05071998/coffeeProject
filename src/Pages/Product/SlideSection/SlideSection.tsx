import React from "react";
import styles from "./SlideSection.module.scss";
import CardImage from "../../../Components/CardImage/CardImage";
import TextGroup from "../../../Components/UI/TextGroup/TextGroup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const image = require("./../../../assets/img/About-Image-2.jpg");
const image2 = require("./../../../assets/img/product/bar-cafe-caffeine-1002740.jpg");

const SlideSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      autoplay
      navigation
      className={styles.slide}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className={styles.slideItem}>
          <CardImage
            size="small"
            image={image}
            buttonText="Explore our offices"
          />
          <TextGroup
            title="Health Check: why do I get a headache when I haven’t had my coffee?"
            description="It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            label="NEW ARTICLE IS LIVE"
            buttonText="Read the full story"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slideItem}>
          <CardImage
            size="small"
            image={image2}
            buttonText="Explore our offices"
          />
          <TextGroup
            title="Health Check: why do I get a headache when I haven’t had my coffee?"
            description="It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
            label="NEW ARTICLE IS LIVE"
            buttonText="Read the full story"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideSection;

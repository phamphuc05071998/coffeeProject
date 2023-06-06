import React from "react";
import styles from "./Content.module.scss";
import logo from "./../../../assets/img/CoffeeStyle-Logo.png";
import StoryItem from "../../../Components/StoryItem/StoryItem";
import PostItem from "../PostItem/PostItem";
import CustomLink from "../../../Components/UI/Link/CustomLink";
import { Link } from "react-router-dom";
import isabel from "./../../../assets/img/product/Isabel.jpg";
import fred from "./../../../assets/img/product/Fred.jpg";
import maurice from "./../../../assets/img/product/Maurice.jpg";
const DUMMY_DATA = [
  {
    id: "s1",
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    image: require("./../../../assets/img/product/Blog-Pic-Head-1.jpg"),
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: "OCTOBER 9, 2018",
  },
  {
    id: "s2",
    title: "How long does a cup of coffee keep you awake?",
    image: require("./../../../assets/img/product/Blog-Pic-Head-8.jpg"),
    description: "How long does a cup of coffee keep you awake?",
    date: "OCTOBER 9, 2018",
  },
];

const POST = [
  {
    id: "s1",
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    image: require("./../../../assets/img/product/Blog-Pic-Head-1.jpg"),
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: "OCTOBER 9, 2018",
  },
  {
    id: "s2",
    title: "How long does a cup of coffee keep you awake?",
    image: require("./../../../assets/img/product/Blog-Pic-Head-8.jpg"),
    description: "How long does a cup of coffee keep you awake?",
    date: "OCTOBER 9, 2018",
  },
  {
    id: "s3",
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    image: require("./../../../assets/img/product/Blog-Pic-Head-1.jpg"),
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: "OCTOBER 9, 2018",
  },
  {
    id: "s4",
    title: "How long does a cup of coffee keep you awake?",
    image: require("./../../../assets/img/product/Blog-Pic-Head-8.jpg"),
    description: "How long does a cup of coffee keep you awake?",
    date: "OCTOBER 9, 2018",
  },
  {
    id: "s4",
    title: "How long does a cup of coffee keep you awake?",
    image: require("./../../../assets/img/product/Blog-Pic-Head-8.jpg"),
    description: "How long does a cup of coffee keep you awake?",
    date: "OCTOBER 9, 2018",
  },
];
const Content = () => {
  return (
    <>
      <div className={styles.storyList}>
        {DUMMY_DATA.map((story) => (
          <StoryItem
            key={story.id}
            title={story.title}
            image={story.image}
            description={story.description}
            date={story.date}
          />
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.heading}>Latest Post</div>
          <div className={styles.postList}>
            {POST.map((post) => (
              <PostItem
                image={post.image}
                description={post.description}
                title={post.description}
                date={post.date}
              />
            ))}
          </div>
        </div>
        <div className={styles.author}>
          <div className={styles.heading}>About Us</div>
          <div className={styles.about}>
            <img className={styles.logo} src={logo} alt="logo"></img>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <CustomLink href="/about">Read the full Story</CustomLink>
            <div className={styles.heading}>Categories</div>
            <div>
              <Link className={styles.link} to="">
                Barista
              </Link>
              <Link className={styles.link} to="">
                Coffee
              </Link>
              <Link className={styles.link} to="">
                Lifestyles
              </Link>
              <Link className={styles.link} to="">
                Mugs
              </Link>
            </div>
            <div className={styles.heading}>Authors</div>

            <div>
              <Link to="" className={styles.link} >
                <div className={styles.authorImage}>
                  <img src={fred} alt="" />
                </div>
                <div>Fred Gleason</div>
              </Link>
              <Link to="" className={styles.link}>
                <div className={styles.authorImage}>
                  <img src={isabel} alt="" />
                </div>
                <div>Isabel Hamill</div>
              </Link>
              <Link to="" className={styles.link}>
                <div className={styles.authorImage}>
                  <img src={maurice} alt="" />
                </div>
                <div>Maurice Herman</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.quote}>
      <blockquote className={styles.blockquote}>
      "I wake up some mornings and sit and have my coffee and look out at my beautiful garden, and I go, ’Remember how good this is. Because you can lose it."
      </blockquote>
      <p className={styles.quoteAuthor}>Jason johnson - owner of coffee styles</p>
      </div>
    </>
  );
};

export default Content;

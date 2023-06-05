import React from "react";
import StoryItem from "../StoryItem/StoryItem";
import styles from "./StoryList.module.scss"
const DUMMY_DATA = [
  {
    id: "s1",
    title:
      "Health Check: why do I get a headache when I haven’t had my coffee?",
    image: require("./../../assets/img/product/bar-cafe-caffeine-1002740.jpg"),
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: "OCTOBER 9, 2018",
  },
  {
    id: "s2",
    title: "How long does a cup of coffee keep you awake?",
    image: require("./../../assets/img/product/Blog-Pic-Head-1.jpg"),
    description: "How long does a cup of coffee keep you awake?",
    date: "OCTOBER 9, 2018",
  },
  {
    id: "s3",
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    image: require("./../../assets/img/product/Blog-Pic-Head-8.jpg"),
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: "OCTOBER 9, 2018",
  },
];

const StoryList = () => {
  return (
    <div className={styles.container}>
      {DUMMY_DATA.map((story) => (
        <StoryItem
          title={story.title}
          image={story.image}
          date={story.date}
          key={story.id}
          description={story.description}
        />
      ))}
    </div>
  );
};

export default StoryList;

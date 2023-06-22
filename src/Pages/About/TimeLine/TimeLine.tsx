import React from "react";
import styles from "./TimeLine.module.scss";
import TimLineEvent from "./TimeLineEvent/TimLineEvent";

import Line from "./Line/Line";
const Data = [
  {
    id: "t1",
    title: "One day however a small line",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.",
    count: "04",
    date: "october 2018",
  },
  {
    id: "t2",
    title: "Overlaid the jeepers uselessly",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.",
    count: "03",
    date: "august 2018",
  },
  {
    id: "t3",
    title: "Pointing has no control about",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.",
    count: "02",
    date: "june 2018",
  },
  {
    id: "t4",
    title: "We've started CoffeeStyle.",

    count: "01",
    date: "november 2017",
  },
];
const TimeLine = () => {
  return (
    <div className={styles.container}>
      {Data.map((timeLine) => {
        return (
          <>
            <TimLineEvent
              title={timeLine.title}
              description={timeLine.description}
              count={timeLine.count}
              date={timeLine.date}
              key={timeLine.id}
            />
            <Line />
          </>
        );
      })}
    </div>
  );
};

export default TimeLine;

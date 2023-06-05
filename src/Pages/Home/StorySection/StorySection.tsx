import React from "react";
import styles from "./StorySection.module.scss";
import Wrap from "../../../Layouts/Wrap/Wrap";
import BreakLine from "../../../Components/UI/BreakLine/BreakLine";
import StoryList from "../../../Components/StoryList/StoryList";
const StorySection = () => {
  return (
    <Wrap>
      <BreakLine>BEHIND THE MUGS, LIFESTYLE STORIES</BreakLine>
      <StoryList/>
    </Wrap>
  );
};

export default StorySection;

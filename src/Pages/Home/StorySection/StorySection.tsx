import React from "react";

import Wrap from "../../../Layouts/Wrap/Wrap";
import BreakLine from "../../../Components/UI/BreakLine/BreakLine";
import StoryList from "../../../Components/StoryList/StoryList";
const StorySection = () => {
  return (
    <Wrap>
      <BreakLine>BEHIND THE MUGS, LIFESTYLE STORIES</BreakLine>
      <div className="mb-100">
        <StoryList />
      </div>
    </Wrap>
  );
};

export default StorySection;

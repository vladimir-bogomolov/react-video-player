import React from "react";
import StyledPlayListHeader from "./styles/StyledPlaylistHeader";
import StyledJourney from "./styles/StyledJourney";

const PlayListHeader = ({ active, total }) => {
  return (
    <StyledPlayListHeader>
      <p>{active.title}</p>
      <StyledJourney>
        {active.num} / {total}
      </StyledJourney>
    </StyledPlayListHeader>
  );
};
export default PlayListHeader;

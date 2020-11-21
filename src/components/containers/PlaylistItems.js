import React from "react";
import withLink from "../hoc/withLink";
import StyledPlaylistitems from "../styles/StyledPlaylistitems";
import PlaylistItem from "../PlaylistItem";

const PlayListItemWithLink = withLink(PlaylistItem);

const PlayListItems = ({ videos, active }) => {
  return (
    <StyledPlaylistitems>
      {videos.map((video) => (
        <PlayListItemWithLink
          key={video.id}
          video={video}
          active={video.id === active.id ? true : false}
          played={video.played}
        />
      ))}
    </StyledPlaylistitems>
  );
};
export default PlayListItems;

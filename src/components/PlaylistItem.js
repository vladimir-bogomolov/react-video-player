import React from "react";
import StyledPlaylistitem from "./styles/StyledPlaylistItem";
// import Video from "./Video";

const PlaylistItem = ({ active, played, video }) => (
  <StyledPlaylistitem active={active} played={played} video={video}>
    <div className="wbn-player__video-nr">{video.num}</div>
    <div className="wbn-player__video-name">{video.title}</div>
    <div className="wbn-player__video-time">{video.duration}</div>
  </StyledPlaylistitem>
);

export default PlaylistItem;

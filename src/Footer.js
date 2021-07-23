import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import { IconButton } from "@material-ui/core";
export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "auto",
      }}
    >
      <IconButton>
        <HomeIcon size="large"></HomeIcon>
      </IconButton>
      <IconButton>
        <ExploreIcon size="large"></ExploreIcon>
      </IconButton>
      <IconButton>
        <HeadsetMicIcon size="large"></HeadsetMicIcon>
      </IconButton>
    </div>
  );
}

import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
export default function AddButton() {
  return (
    <div style={{ marginLeft: "80vw", marginTop: "20vh" }}>
      <IconButton>
        <AddIcon fontSize="large" style={{ color: "#f9b208" }}></AddIcon>
      </IconButton>
    </div>
  );
}

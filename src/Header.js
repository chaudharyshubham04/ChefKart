import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="menu_title">
        <Button>
          <MenuIcon></MenuIcon>
        </Button>
        <h2>ChefKart</h2>
      </div>
      <Button>
        <SearchIcon></SearchIcon>
      </Button>
    </div>
  );
}

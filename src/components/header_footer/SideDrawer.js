import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => console.log("hh")}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log("hh")}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => console.log("hh")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("hh")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("hh")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;

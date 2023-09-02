import React from "react";
import './Sidebar.css'
import { Search, Twitter } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { MailOutline } from "@mui/icons-material";
import { BookmarkBorder } from "@mui/icons-material";
import { ListAlt } from "@mui/icons-material";
import { PermIdentity } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { NotificationsNone } from "@mui/icons-material";
import Sidebaroption from '../Sidebaroption/Sidebaroption';
import { Button } from "@mui/material";
const Sidebar = () => {
  return(
    <div className="sidebar">
      <Twitter className="sidebar__twitter"/>
      <Sidebaroption text="Home" Icon={Home}/>
      <Sidebaroption text="Explore" Icon={Search}/>
      <Sidebaroption text="Notification" Icon={NotificationsNone}/>
      <Sidebaroption text="Messages" Icon={MailOutline}/>
      <Sidebaroption text="Bookmarks" Icon={BookmarkBorder}/>
      <Sidebaroption text="Lists" Icon={ListAlt}/>
      <Sidebaroption text="Profile" Icon={PermIdentity}/>
      <Sidebaroption text="More" Icon={MoreHoriz}/>
      <Button variant="Outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};
export default Sidebar;
import React, { useState, useEffect} from "react";
import './App.css';
import Sidebar from "./Component/Sidebar/Sidebar";
import Feed from "./Component/Feed/Feed";
import Widgets from "./Component/Widgets/Widget";
import { useStateValue } from "./DataLayer/StateProvider";
import Login from "./Component/Login/Login";
import { SwipeableDrawer } from "@mui/material";

function App(){
  const [{ user}] = useStateValue();
  const [open, setOpen] = useState(false);
  const [Mobile, setMobile] = useState(false);
  useEffect(() => {
    let mounted = true;
    if (window.innerWidth < 720){
      if (mounted) {
        setMobile(true);
        setOpen(true);
      }
    }
    return () => {
      mounted = (false);
    };
  }, []);
  useEffect(() => {
    let mounted = true;
    window.addEventListener("resize", () => {
      if (window.innerWidth <720)
{
  if (mounted) {
    setMobile(true);
    setOpen(false);
  }
}  
  });
  return () => {
    mounted= false;
  };
  }, []);
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          {Mobile ? (
            <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            >
            </SwipeableDrawer>
          ) : (
            <Sidebar/>
          )}
            <Feed/>

            <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
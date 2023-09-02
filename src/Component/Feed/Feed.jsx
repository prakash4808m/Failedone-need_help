import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../Tweetbox/TweetBox";
import Post from "../Post/Post";
import db from "../../firebase";
import { Button } from "@mui/material";
import { Flip } from "@mui/icons-material";
import { useStateValue } from "../../DataLayer/StateProvider";
import { actionType } from "../../DataLayer/reducer";
function Feed(){
  const [posts, setPosts] = useState([]);
  const [dispatch] = useStateValue();

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  const logout =() =>{
    dispatch({
      type: actionType.SET_USER,
      user: null
    });
  };
  return (
    <div className="feed">
        {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
        <Button onClick={logout}>Logout</Button>
      </div>
     {/* box */}
    <TweetBox />
      {/* Posts */}
      <Flip>
        {posts?.map(
          ({ avatar, displayName, verified, text, image, username }, index) => {
            return (
              <Post
                key={index}
                displayName={displayName}
                username={username}
                verified={verified}
                text={text}
                image={image}
                avatar={avatar}
              />
            );
          }
        )}
      </Flip>
    </div>
  );
};

export default Feed;
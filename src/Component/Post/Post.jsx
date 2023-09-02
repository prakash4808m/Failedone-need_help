import React, { forwardRef, useState} from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Publish } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { Verified } from "@mui/icons-material";

function Post({ displayName, username, verified, text, image, avatar }) {
        const [liked, setLiked] = useState(false);
        return(
            <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} alt="user"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <Verified className="post_badge"/> } @
                               {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerdesc">
                        <p>{text}</p>
                    </div>
                </div>
                 <img src={image} alt="post_img" />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small"/>
                    <Repeat fontSize="small"/>
                    {liked ? (
                        <Favorite
                        onclick={() => setLiked(!liked)}
                        fontSize="small"
                        className="post__liked"
                        />
                     ) : (
                        <FavoriteBorder 
                        onclick={() => setLiked(!liked)}
                        fontSize="small"
                        />
                     )}
                     <Publish fontSize="small" />
                     </div>
                  </div>
                </div>
        );
    };
export default Post;
import React from 'react';
import { Search } from '@mui/icons-material';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import './Widget.css';

function Widget() {
  return (
    <div className='widgets'>
       <div className='widgets__input'>
      <Search className='widgets__Search'/>
      <input placeholder="Search Twitter" type='text'/>
    </div>
    <div className='widgets__widgetContainer'>
        <h2>What's Hapenning</h2>
        <TwitterTweetEmbed
        tweetId={'9837372375652'}
        options={{Height : 350}}
        />
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='reactjs'
        noScrollbar
        style={{width: "100%"}}
        />
    </div>
    </div>
  );
};

export default Widget;
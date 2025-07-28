import React, { useState } from 'react';
import HomeFeed from "../../../assets/HomeFeed.json";
import Home from "../Home";
import moment from 'moment';
import "../index.css"


interface user {
  user_id: string;
  username: string;
  profile_picture: string;
}

interface MediaItem {
  type: string;
  url: string;
  width: number;
  height: number;
}

interface Comment {
  comment_id: string;
  user: {
    user_id: string;
    username: string;
  };
  text: string;
  timestamp: string;
}

interface Location {
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface FeedProps {
  id: string;
  user: user;
  profilePic: string;
  media: MediaItem[];
  caption: string;
  likes: number;
  comments: Comment[];
  location: Location | null;
  hashtags: string[];
  timestamp : string;
}

const Feed: React.FC<FeedProps> = (props) => {
  let { id, user, profilePic, media, caption, likes, comments, location, hashtags ,timestamp} = props

const [likecount, setlikecount] = useState(likes)

const handleLike = () => {
  setlikecount(previousCount => previousCount > likes ? likes : previousCount + 1)
}
  

  return (
    <div className='d-flex'>
      <div className=''>
        <div className=' d-flex'>
          <div className='image2  d-flex'>
            <img src={profilePic} alt="profile" />
          </div>
          <div className=' d-flex'><span className=' text1'><b>{user.username}</b> • {moment(timestamp).fromNow()}</span>
            <span><i className="dotted bi bi-three-dots"></i></span></div>

        </div>
          <p className='location'>{location?.name ?? `No location`}</p>


        <div className='feed'>
          <div className='content1 d-flex'>
            <img src={media[0].url} alt="image" />
          </div>
          <span className='feedicons'><i className={`feedicon bi bi-heart${likecount > likes ? "-fill colorRed": ""}`} onClick={handleLike}></i><i className="feedicon bi bi-chat"></i><i className="feedicon bi bi-send-arrow-up"></i></span>
          <p className='likes'>{likecount} likes</p>
          <p className='likes'>{user.username}</p>
          <p className='commentscolor'>view all {comments.length} comments</p>
          <p className='commentscolor'>Add a comment...</p>
        </div>
      </div>
    </div>

  );
};

export default Feed;
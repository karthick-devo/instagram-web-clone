import React from 'react';
import "../home/index.css"
import Text from '../../components/Text';
import HomeFeed from "../../assets/HomeFeed.json"
import Feed from './components/Feed';
import { NavLink, useNavigation } from 'react-router';


interface Props {

}

const Home: React.FC<Props> = (props) => {

    return (

        <NavLink
            to="/Shome">
            <div className='Home bg- w-100 d-flex flex-column bg-black p-2'>
                <div>
                    {HomeFeed.map((item) => (<Feed id={item.user.user_id} user={item.user} profilePic={item.user.profile_picture} media={item.media} caption={item.caption} likes={item.likes} comments={item.comments} location={item.location} hashtags={item.hashtags} timestamp={item.timestamp} />))}
                </div>
            </div>
        </NavLink>
    );
};

export default Home;
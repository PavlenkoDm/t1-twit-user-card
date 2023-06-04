
import { useState } from 'react';
import style from './TweetCard.module.css';

export const TweetCard = ({ options }) => {
    const [following, setFollowing] = useState(false);

    useState(() => {
        setFollowing(options.isFollowed);
    }, []);
    const { avatar, followers, id, isFollowed, tweets, user } = options;

    const handleFollowClick = (e) => {
        if (e.target.name !== "toFollow") return;
        
    }

    return (
        <li>
            <div className={style.card}>
                <img src="../../svg/elements-comments.svg" alt="comments" />
                <div>
                    <img src="../../svg/rectangle.svg" alt="rectangle" />
                    <img src="../../svg/circle.svg" alt="circle" />
                </div>
                <p>{tweets} TWEETS</p>
                <p>{followers} FOLLOWERS</p>
                <button type="button" name="toFollow" onClick={handleFollowClick}>
                    {isFollowed ? 'FOLLOWING' : 'FOLLOW'}
                </button>
            </div>
        </li>
    );
};

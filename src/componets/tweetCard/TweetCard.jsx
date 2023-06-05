import { putchUserFollowing } from 'api/api';

import { useState } from 'react';
import style from './TweetCard.module.css';

export const TweetCard = ({ options }) => {
    const [following, setFollowing] = useState(options.isFollowed);
    const [followersAm, setFollowersAm] = useState(options.followers);

    const handleFollowClick = e => {
        if (e.target.name !== 'toFollow') return;

        const followersAmount = following ? followersAm - 1 : followersAm + 1;

        putchUserFollowing({
            id: options.id,
            tweets: options.tweets,
            followers: followersAmount,
            user: options.user,
            avatar: options.avatar,
            isFollowed: !following,
        }).then(data => {
            if (!data) return;
            setFollowing(!following);
            setFollowersAm(followersAmount);
        })
    };

    return (
        <li>
            <div className={style.card}>
                <img src="../../svg/elements-comments.svg" alt="comments" />
                <div>
                    <img src="../../svg/rectangle.svg" alt="rectangle" />
                    <img src="../../svg/circle.svg" alt="circle" />
                </div>
                <p>{options.tweets} TWEETS</p>
                <p>{followersAm} FOLLOWERS</p>
                <button
                    type="button"
                    name="toFollow"
                    onClick={handleFollowClick}
                >
                    {following ? 'FOLLOWING' : 'FOLLOW'}
                </button>
            </div>
        </li>
    );
};

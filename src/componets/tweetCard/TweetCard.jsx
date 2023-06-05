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
                <p className={style.title}>{options.user}</p>
                <p className={style.title}>{options.tweets} TWEETS</p>
                <p className={style.title}>{followersAm} FOLLOWERS</p>
                <button className={style.Button}
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


import { TweetCard } from 'componets/tweetCard/TweetCard';
import style from './TweetsList.module.css'

export const TweetsList = ({ users }) => {
    return (
        <ul className={style.container}>
            {users.map(user => {
                return (
                    <TweetCard key={user.id} options={user} />
                );
            })}
        </ul>
    );
}
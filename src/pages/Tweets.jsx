import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TweetsList } from 'componets/tweetsList/TweetsList';
import { fetchUsers } from 'api/api';
import { Filter } from 'componets/filter/Filter';

import style from './Tweets.module.css';

const Tweets = () => {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [filter, setFilter] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
         fetchUsers(pageNumber, filter).then(data => {
            setUsers(users => [...users, ...data]);
        });
    }, [filter, pageNumber]);


    const handleOnLoadMore = e => {
        if (!e.target.name === 'load-more') return;
        setPageNumber(pageNumber => (pageNumber += 1));
    };


    const getFilterValue = (value) => {
        setUsers([]);
        setPageNumber(1);
        setFilter(value);
    };

    return (
        <div className={style.container}>
            <main>
                <Helmet>
                    <title>Tweets</title>
                </Helmet>
                <section>
                    <h1 style={{ display: 'none' }}>Tweets</h1>
                    <div className={style.head}>
                        <button className={style.Button} type="button" onClick={() => navigate("/")}>Go Back</button>
                        <Filter options={['All', 'Follow', 'Followings']} filter={getFilterValue} />
                    </div>
                    {users.length > 0 && (<TweetsList users={users} />)}                    
                    {users.length > 0 && users.length < 15 && (
                        <button
                            className={style.Button}
                            type="button"
                            name="load-more"
                            onClick={handleOnLoadMore}
                        >
                            Load More
                        </button>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Tweets;

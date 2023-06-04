import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <main>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <h1>Welcome to Tweets App</h1>
            </main>
        </div>
    );
};

export default Home;

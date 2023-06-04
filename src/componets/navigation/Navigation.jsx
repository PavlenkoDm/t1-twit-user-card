import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css';

export const Navigation = () => {
    return (
        <header className={style.header}>
            <nav>
                <NavLink className={style.link} to="/">
                    Home
                </NavLink>
                <NavLink className={style.link} to="/tweets">
                    Tweets
                </NavLink>
            </nav>
        </header>
    );
};

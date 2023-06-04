import { Outlet } from 'react-router-dom';

import { Navigation } from 'componets/navigation/Navigation';

export const SharedLayout = () => {
    return (
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
            <Navigation />
            <Outlet />
        </div>
    );
};

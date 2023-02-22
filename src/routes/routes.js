import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Library from '~/pages/Profile';
import Lovesong from '~/pages/Upload';
import Search from '~/pages/Search';
import Playlist from '~/pages/Playlist';

// Public routes

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.library, component: Library },
    { path: config.routes.lovesong, component: Lovesong },
    { path: config.routes.playlist, component: Playlist },
    { path: config.routes.search, component: Search },
];
// const publicRoutes = [
//     { path: '/', component: Home },
//     { path: '/library', component: Library },
//     { path: '/lovesong', component: Lovesong },
//     { path: '/playlist', component: Playlist },
//     { path: '/search', component: Search },
// ];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

import Add from './components/add';
import Guide from './components/guide';
import Home from './components/home';
export const router = [
  {
    path: '/',
    exact: true,
    mani: () => <Home />,
  },
  {
    path: '/guide',
    exact: true,
    mani: () => <Guide />,
  },
  {
    path: '/add',
    exact: true,
    mani: () => <Add />,
  },
];

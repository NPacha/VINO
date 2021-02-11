import Home from '../pages/Home';
import About from '../pages/About';
import MyFavs from '../pages/MyFavs';

const routes = [
	{
		Component: MyFavs,
		key: 'MyFavs',
		path: '/myfavs'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;

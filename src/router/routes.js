import Home from '../pages/Home';
import About from '../pages/About';
import MyFavs from '../pages/MyFavs';
import ShowWine from '../pages/ShowWine';
import LandingPage from '../pages/LandingPage';
import UpdateNotes from '../pages/UpdateNotes';

const routes = [
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: MyFavs,
		key: 'MyFavs',
		path: '/myfavs'
	},
	{
		Component: UpdateNotes,
		key: 'UpdateNotes',
		path: '/:id/edit'
	},
	{
		Component: ShowWine,
		key: 'ShowWine',
		path: '/:id'
	},

	{
		Component: LandingPage,
		key: 'LandingPage',
		path: '/'
	}
];

export default routes;

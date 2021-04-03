import Home from '../pages/Home';
import About from '../pages/About';
import MyFavs from '../pages/MyFavs';
import ShowWine from '../pages/ShowWine';
import LandingPage from '../pages/LandingPage';
import UpdateNotes from '../pages/UpdateNotes';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import LogOut from '../components/LogOut';
import AddPhoto from '../components/AddPhoto';

const routes = [
	{
		Component: AddPhoto,
		key: 'AddPhoto',
		path: '/addphoto'
	},
	{
		Component: SignUp,
		key: 'SignUp',
		path: '/register'
	},
	{
		Component: LogIn,
		key: 'LogIn',
		path: '/login'
	},
	{
		Component: LogOut,
		key: 'LogOut',
		path: '/logout'
	},
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

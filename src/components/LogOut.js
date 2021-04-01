import React from 'react';

export default function LogOut(props) {
	const handleLogOut = () => {
		localStorage.clear();
		props.setIsLoggedIn(false);
		window.location.assign('/home');
	};
	return (
		<div>
			<h2>Log Out</h2>

			<form>
				<input value="Log Out" type="submit" onClick={handleLogOut} />
			</form>
		</div>
	);
}

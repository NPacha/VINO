import React from 'react';

export default function LogOut(props) {
	const handleLogOut = () => {
		localStorage.clear();
		props.setIsLoggedIn(false);
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

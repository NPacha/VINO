import React, { useState } from 'react';

export default function MyFavs(props) {

	const [myFavs, setMyFavs] = useState([]);

	
	return <div className="MyFavs">This is the {props.page} page</div>;
}

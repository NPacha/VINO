import React, { useState, useEffect, useRef } from 'react';

export default function UpdateNotes(props) {
	const [wine, setWine] = useState({
		MyTastingNotes: ''
	});

	const notesInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/wines/${props.match.params.id}`); //Just like req.params on the backend....The location of where that params is on the front end for react.
				const data = await response.json();
				setWine(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/wines/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					MyTastingNotes: notesInput.current.value
				})
			});
			const data = await response.json();
			setWine(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign(`/${props.match.params.id}`);
		}
	};

	return (
		<div className={'updateNotes'}>
			<div className={'favssection'}>
				<form
					style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleSubmit}
				>
					<label>
						{' '}
						My Tasting Notes:{' '}
						<input type="text" ref={notesInput} defaultValue={wine.body} />
					</label>{' '}
					<br />
					<input type="submit" value="Update Notes" />
				</form>
			</div>
		</div>
	);
}

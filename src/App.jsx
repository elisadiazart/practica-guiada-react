import { useEffect, useState } from 'react';

const App = () => {
	const [user, setUser] = useState(3);
	const [selectValue, setSelectValue] = useState(0);

	useEffect(() => {
		if (selectValue!== 0) {
		fetchData
		(`https://jsonplaceholder.typicode.com/users/${selectValue}`, setUser
		);
	}
}, [selectValue]);



	return (
		<>
			<select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
				<option value='0'>Select User</option>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
				<option value='9'>9</option>
				<option value='10'>10</option>
			</select>
			<h1>{user ? user.name : 'Cargando...'}</h1>
		</>
	);
};

const fetchData = async (url, setUser) => {
	const request = await fetch(url);
	const data = await request.json();
	console.log(data);
	setUser(data);
};

export default App;

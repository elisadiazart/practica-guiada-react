import { useEffect, useState } from "react";

export const useUser = () => {
    const [user, setUser] = useState(3);
	const [selectValue, setSelectValue] = useState(0);

	useEffect(() => {
		if (selectValue!== 0) {
		fetchData
		(`https://jsonplaceholder.typicode.com/users/${selectValue}`, setUser
		);
	}
}, [selectValue]);

const fetchData = async (url, setUser) => {
	const request = await fetch(url);
	const data = await request.json();
	console.log(data);
	setUser(data);
};

return {setSelectValue, user, selectValue}

}
const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

import { useState, useEffect } from "react";
import Axios from "axios";
import { Row } from 'react-bootstrap';

interface User {
	username: string;
	totalSales: number;
	subUsers?: User[];
}

interface UserTreeNodeProps {
	user: User;
}

const UserTreeNode: React.FC<UserTreeNodeProps> = ({ user }) => {
	return (
		<details className={`tree-nav__item ${user.subUsers && user.subUsers.length > 0 ? 'is-expandable' : ''}`}>
			<summary className="tree-nav__item-title">
				<div>
					<span>User: {user.username}</span>
					<br />
					<span>Total Sales: {user.totalSales}</span>
				</div>
			</summary>
			{user.subUsers && user.subUsers.length > 0 && (
				<ul style={{ listStyleType: "none" }}>
					{user.subUsers.map((subUser) => (
						<li key={subUser.username}>
							<UserTreeNode user={subUser} />
						</li>
					))}
				</ul>
			)}
		</details>
	);
};

const Starter: React.FC = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	const [userTree, setUserTree] = useState<User[] | null>(null);

	useEffect(() => {
		let configGetInfo = {
			method: "get",
			url: `${url}/api/user/getTree/${username}`
		};

		Axios(configGetInfo)
			.then(response => {
				setUserTree(response.data);
			})
			.catch(error => {
				console.error("Error fetching user tree:", error);
			});
	}, [username]);

	return (
		<Row className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
			{userTree && userTree.length > 0 && (
				<ul style={{ listStyleType: "none" }}>
					{userTree.map((user) => (
						<li key={user.username}>
							<UserTreeNode user={user} />
						</li>
					))}
				</ul>
			)}
		</Row>
	);
};

export default Starter;

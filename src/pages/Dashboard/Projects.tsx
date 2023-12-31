import { Table } from 'react-bootstrap'
import Axios from "axios";
import { useState, useEffect } from "react";

// components
import { CustomCardPortlet } from '@/components'

const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

const Projects = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	const [data, setData] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			let configCommissionHistory = {
				method: "get",
				url: `${url}/api/history/commissionForDashboard/${username}`
			};

			const fetchData = async () => {
				const response = await Axios(configCommissionHistory);
				setData(response.data);
			};

			fetchData();
		}, 500);
	}, []);

	return (
		<CustomCardPortlet cardTitle="Latest transaction" titleClass="header-title">
			<Table hover responsive className="table-nowrap mb-0">
				<thead>
					<tr>
						<th>#</th>
						<th>Time</th>
						<th>Code</th>
						<th>Amount</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, idx) => (
						<tr key={idx}>
							<td>{idx + 1}</td>
							<td>{(row as { time?: string }).time}</td>
							<td>{(row as { code?: string }).code}</td>
							<td>{(row as { amount?: string }).amount}</td>
							<td>{(row as { type?: string }).type}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</CustomCardPortlet>
	)
}

export default Projects

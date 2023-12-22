import { Col, Row } from 'react-bootstrap'
import Statistics from './Statistics'
import WeeklySelesChart from './WeeklySelesChart'
import Projects from './Projects'
import Axios from "axios";
import { useState, useEffect } from "react";

const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

// componets


const Dashboard = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	const [cashBalance, setCashBalance] = useState("");
	const [commissionBalance, setCommissionBalance] = useState("");
	const [personalSale, setPersonalSale] = useState(0);
	// const [investments, setInvestments] = useState([]);
	// const [expenses, setExpenses] = useState({});

	useEffect(() => {
		setTimeout(() => {
			let configGetInfo = {
				method: "get",
				url: `${url}/api/user/${username}`
			};

			Axios(configGetInfo).then(response => {
				setCashBalance(response.data.cashbalance);
				setCommissionBalance(response.data.commissionbalance);
				setPersonalSale(response.data.user.sales);
			});
		}, 500);
	}, []);
	
	return (
		<>
			<Row>
				<Col xxl={4} sm={6} className="mt-2">
					<Statistics
						title={"Account Balance"}
						stats={`$${cashBalance}`}
						change={"0%"}
						icon={"ri-wallet-2-line"}
						variant={"text-bg-purple"}
					/>
				</Col>
				<Col xxl={4} sm={6} className="mt-2">
					<Statistics
						title={"Commission Balance"}
						stats={`$${commissionBalance}`}
						change={"0%"}
						icon={"ri-shopping-basket-line"}
						variant={"text-bg-info"}
					/>
				</Col>
				<Col xxl={4} sm={6} className="mt-2">
					<Statistics
						title={"Total sales"}
						stats={`$${personalSale}`}
						change={"0%"}
						icon={"ri-group-2-line"}
						variant={"text-bg-primary"}
					/>
				</Col>
			</Row>

			<Row>
				<Col lg={12}>
					<WeeklySelesChart />
				</Col>
			</Row>

			<Row>
				<Col xl={12}>
					<Projects />
				</Col>
			</Row>
		</>
	)
}

export default Dashboard

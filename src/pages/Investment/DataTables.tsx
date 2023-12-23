import { Card, Col, Row, FloatingLabel, Form, Button } from 'react-bootstrap'
import Axios from "axios";
import { useState, useEffect } from "react";
import qs from 'qs';

//dummy data
import { employeeRecords } from './data'
import { Column } from 'react-table'
import { Employee } from './types'

// components
import { PageSize, Table } from '@/components'

const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

const columns: ReadonlyArray<Column> = [
	{
		Header: 'ID',
		accessor: 'id',
		defaultCanSort: true,
	},
	{
		Header: 'Time',
		accessor: 'time',
		defaultCanSort: true,
	},
	{
		Header: 'Code',
		accessor: 'code',
		defaultCanSort: false,
	},
	{
		Header: 'Capital',
		accessor: 'capital',
		defaultCanSort: true,
	},
	{
		Header: 'Time end',
		accessor: 'timeEnd',
		defaultCanSort: true,
	},
]

const sizePerPageList: PageSize[] = [
	{
		text: '5',
		value: 5,
	},
	{
		text: '10',
		value: 10,
	},
	{
		text: '25',
		value: 25,
	},
	{
		text: 'All',
		value: employeeRecords.length,
	},
]

interface Package {
	id: number
	name: string
	price: number
	daily: number
}

interface Time {
	id: number
	name: string
}

const timeArray : Time[] = [
	{ id: 1, name: "6 tháng" },
	{ id: 2, name: "12 tháng" }
]

const FloatingLabels = () => {
	const [packs, setPacks] = useState<Package[] | null>([]);
	const [times] = useState<Time[] | null>(timeArray);
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	const [price, setPrice] = useState<number | 0>(0);
	const [daily, setDaily] = useState<number | 0>(0);
	const [timeChoose, setTimeChoose] = useState<string | null>(null);
	const [packChoose, setPackChoose] = useState<number | null>(null);

	const handlePackageChange = (packageId: number) => {
		setPackChoose(packageId || 0);
		if (packs !== null) {
			setPrice(packs[packageId - 1]?.price || 0);
			setDaily(packs[packageId - 1]?.daily || 0);
		  }
	};

	const handleTimeChange = (time: string) => {
		console.log(time);
		setTimeChoose(time || null);
	};

	useEffect(() => {
		let config = {
			method: "get",
			url: `${url}/api/packages`
		};

		Axios(config).then(response => {
			setPacks(response.data);
		});
	}, [username]);

	const handleSubmit = () => {
		if (packChoose === 0 || timeChoose === "" || packChoose === null || timeChoose === null) {
			return;
		}
		console.log(timeChoose);

		const timeConvert = times ? (times as { name: string }[])[parseInt(timeChoose) - 1]?.name : '';

		let data = qs.stringify({
			packid: packChoose,
			username: username,
			timeEnd: timeConvert
		});

		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: `${url}/api/package/buy`,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			data: data
		};

		Axios(config).then(response => {
			if (response.data === "Failed, balance is not enough to buy this package") {
				alert("Số dư không đủ để mua gói này");
			} else {
				alert("Mua gói thành công!");
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			}
		});
	}

	return (
		<Card className="mt-2">
			<Card.Header>
				<h4 className="header-title">Mua gói mới</h4>
			</Card.Header>
			<Card.Body>
				<Row>
					<Col lg={12} className="mb-2">
						<h5 className="mb-3">Chọn gói</h5>
						<FloatingLabel
							controlId="floatingSelectPackage"
							label="Chọn gói"
							className="mb-3"
						>
							<Form.Select aria-label="Floating label select example" onChange={(e) => handlePackageChange(parseInt(e.target.value))}>
								<option defaultValue="selected">Danh sách các gói</option>
								{packs?.map((pack) => (
									<option key={pack.id} value={pack.id}>
										{pack.name}
									</option>
								))}
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col lg={12} className="mb-2">
						<h5 className="mb-3">Chọn thời gian</h5>
						<FloatingLabel
							controlId="floatingSelectTime"
							label="Chọn thời gian"
							className="mb-3"
						>
							<Form.Select aria-label="Floating label select example" onChange={(e) => handleTimeChange(e.target.value)}>
								<option defaultValue="selected">Danh sách thời gian</option>
								{times?.map((time) => (
									<option key={time.id} value={time.id}>
										{time.name}
									</option>
								))}
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col lg={12} className="mb-2">
						<FloatingLabel
							controlId="floatingInput"
							label="Giá gói"
							className="mb-3"
						>
							<Form.Control type="text" value={`${price}$`} readOnly={true} />
						</FloatingLabel>
					</Col>
					<Col lg={12} className="mb-2">
						<FloatingLabel
							controlId="floatingInput"
							label="Lãi hàng ngày"
							className="mb-3"
						>
							<Form.Control type="text" value={`${daily}%`} readOnly={true} />
						</FloatingLabel>
					</Col>
					<Col lg={12} className="mb-2 text-center">
						<Button onClick={(e) => { handleSubmit() }}>Mua gói</Button>
					</Col>

				</Row>
			</Card.Body>
		</Card>
	)
}

const DataTables = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	const [data, setData] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			let configCommissionHistory = {
				method: "get",
				url: `${url}/api/history/investment/${username}`
			};

			const fetchData = async () => {
				const response = await Axios(configCommissionHistory);
				setData(response.data);
			};

			fetchData();
		}, 500);
	}, [username]);

	return (
		<>
			<Row className="mt-2">
				<Col>
					<FloatingLabels />
				</Col>
			</Row>
			<Row className="mt-2">
				<Col>
					<Card>
						<Card.Header>
							<h4 className="header-title">Lịch sử gói</h4>
						</Card.Header>
						<Card.Body>
							<Table<Employee>
								columns={columns}
								data={data}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
								isSearchable={true}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default DataTables

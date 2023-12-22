import { Card, Col, Row, FloatingLabel, Form, Button } from 'react-bootstrap'
import Axios from "axios";
import { useState, useEffect } from "react";

//dummy data
import { employeeRecords, expandableRecords } from './data'
import { Column } from 'react-table'
import { Employee } from './types'

// components
import { PageSize, Table } from '@/components'

// const url = "https://seashell-app-bbv6o.ondigitalocean.app";
const url = "http://localhost:8080";

const columns: ReadonlyArray<Column> = [
	{
		Header: 'Code',
		accessor: 'code',
		defaultCanSort: false,
	},
	{
		Header: 'Time',
		accessor: 'time',
		defaultCanSort: true,
	},
	{
		Header: 'Amount',
		accessor: 'amount',
		defaultCanSort: true,
	},
	{
		Header: 'Investment Package',
		accessor: 'frominvestment',
		defaultCanSort: true,
	},
	{
		Header: 'Type',
		accessor: 'type',
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

const FloatingLabels = () => {
	const handleSubmit = () => {

	}

	return (
		<Card className="mt-2">
			<Card.Header>
				<h4 className="header-title">Tạo lệnh nạp tiền</h4>
			</Card.Header>
			<Card.Body>
				<Row>
					<Col lg={12} className="mb-2">
						<h5 className="mb-3">Chọn mạng</h5>
						<FloatingLabel
							controlId="floatingSelectPackage"
							label="Chọn mạng"
							className="mb-3"
						>
							<Form.Select aria-label="Floating label select example">
								<option defaultValue="selected">Danh sách các mạng</option>
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col lg={12} className="mb-2">
						<h5 className="mb-3">Chọn loại tiền</h5>
						<FloatingLabel
							controlId="floatingSelectTime"
							label="Chọn loại tiền"
							className="mb-3"
						>
							<Form.Select aria-label="Floating label select example">
								<option defaultValue="selected">Danh sách các loại tiền</option>
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col lg={12} className="mb-2">
						<FloatingLabel
							controlId="floatingInput"
							label="Số tiền nạp"
							className="mb-3"
						>
							<Form.Control type="text" placeholder="Nhập số tiền nạp" />
						</FloatingLabel>
					</Col>
					<Col lg={12} className="mb-2 text-center">
						<Button onClick={(e) => { handleSubmit() }}>Rút tiền</Button>
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
	const [token] = useState(parsedUserData?.token || '');
	const [data, setData] = useState([]);

	useEffect(() => {
		let configCommissionHistory = {
			method: "get",
			url: `${url}/api/getTransaction/${username}/Deposit`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		};

		const fetchData = async () => {
			const response = await Axios(configCommissionHistory);
			
			setData(response.data);
		};

		fetchData();
	}, []);

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
							<h4 className="header-title">Lịch sử nạp tiền</h4>
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

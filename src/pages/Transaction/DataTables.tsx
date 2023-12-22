import { Card, Col, Row, FloatingLabel, Form, Button } from 'react-bootstrap'
import Axios from "axios";
import { useState, useEffect } from "react";
import qs from 'qs';

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

const DataTables = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	const [data, setData] = useState([]);

	useEffect(() => {
        let configCommissionHistory = {
            method: "get",
            url: `${url}/api/history/commission/${username}`
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
					<Card>
						<Card.Header>
							<h4 className="header-title">Lịch sử nhận IB</h4>
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

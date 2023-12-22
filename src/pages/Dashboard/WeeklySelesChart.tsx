import { Col, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import Axios from "axios";
import { useState, useEffect } from "react";

const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

// components
import { CustomCardPortlet } from '@/components'

interface ChartData {
	amount: number;
	time: string;
}

const WeeklySelesChart = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	const [data, setData] = useState<ChartData[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await Axios.get(`${url}/api/user/stat/${username}`);
				setData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [username]);


	const weeklyChartOpts: ApexOptions = {
		series: [
			{
				name: 'IB',
				data: data.map(item => item.amount),
			},
		],
		chart: {
			height: 377,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				columnWidth: '60%',
			},
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		dataLabels: {
			enabled: false,
		},
		colors: ['#3bc0c3', '#1a2942', '#d1d7d973'],
		xaxis: {
			categories: data.map(item => item.time),
		},
		yaxis: {
			title: {
				text: 'IB',
			},
		},
		legend: {
			offsetY: 7,
		},
		grid: {
			padding: {
				bottom: 20,
			},
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return '$ ' + val
				},
			},
		},
	}

	return (
		<CustomCardPortlet
			cardTitle="Weekly Sales Report"
			titleClass="header-title"
		>
			<div dir="ltr">
				<ReactApexChart
					height={377}
					options={weeklyChartOpts}
					series={weeklyChartOpts.series}
					type="bar"
					className="apex-charts"
				/>
			</div>

			<Row className="text-center">
				<Col>
					<p className="text-muted mt-3">Current Week</p>
					<h3 className=" mb-0">
						<span>$0</span>
					</h3>
				</Col>
				<Col>
					<p className="text-muted mt-3">Previous Week</p>
					<h3 className=" mb-0">
						<span>$0 </span>
					</h3>
				</Col>
				<Col>
					<p className="text-muted mt-3">Diff</p>
					<h3 className=" mb-0">
						<span>0%</span>
					</h3>
				</Col>
			</Row>
		</CustomCardPortlet>
	)
}

export default WeeklySelesChart

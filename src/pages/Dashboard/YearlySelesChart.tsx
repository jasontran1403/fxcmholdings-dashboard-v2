import { Col, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { CustomCardPortlet } from '@/components'

const YearlySelesChart = () => {
	const yearlyChartOpts: ApexOptions = {
		series: [
			{
				name: 'Mobile',
				data: [25, 15, 25, 36, 32, 42, 45],
			},
			{
				name: 'Desktop',
				data: [20, 10, 20, 31, 27, 37, 40],
			},
		],
		chart: {
			height: 250,
			type: 'line',
			toolbar: {
				show: false,
			},
		},
		colors: ['#3bc0c3', '#1a2942', '#d1d7d973'],

		stroke: {
			curve: 'smooth',
			width: [3, 3],
		},
		markers: {
			size: 3,
		},
		xaxis: {
			categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
		},
		legend: {
			show: false,
		},
	}

	return (
		<>
			<CustomCardPortlet
				cardTitle="Yearly Sales Report"
				titleClass="header-title"
			>
				<div dir="ltr">
					<ReactApexChart
						height={377}
						options={yearlyChartOpts}
						series={yearlyChartOpts.series}
						type="line"
						className="apex-charts"
					/>
				</div>
				<Row className="text-center">
					<Col>
						<p className="text-muted mt-3 mb-2">Quarter 1</p>
						<h4 className="mb-0">$56.2k</h4>
					</Col>
					<Col>
						<p className="text-muted mt-3 mb-2">Quarter 2</p>
						<h4 className="mb-0">$42.5k</h4>
					</Col>
					<Col>
						<p className="text-muted mt-3 mb-2">All Time</p>
						<h4 className="mb-0">$102.03k</h4>
					</Col>
				</Row>
			</CustomCardPortlet>
		</>
	)
}

export default YearlySelesChart

import { Col, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { CustomCardPortlet } from '@/components'

const weeklyChartOpts: ApexOptions = {
	series: [
		{
			name: 'IB',
			data: [0, 0, 0, 0, 0, 0, 0],
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
		categories: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
	},
	yaxis: {
		title: {
			text: '$ (thousands)',
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
				return '$ ' + val + ' thousands'
			},
		},
	},
}

const WeeklySelesChart = () => {
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

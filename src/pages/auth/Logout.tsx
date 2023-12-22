import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthContext } from '@/common'
import AuthLayout from './AuthLayout'

// images
import shield from '@/assets/images/svg/shield.gif'

// components


const Logout = () => {
	const { removeSession } = useAuthContext()

	useEffect(() => {
		removeSession()
	}, [removeSession])

	const BottomLink = () => {
		return (
			<Row>
				<Col xs={12} className="text-center">
					<p className="text-dark-emphasis">
						Quay lại?{' '}
						<Link
							to="/login"
							className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
						>
							<b>Đăng nhập</b>
						</Link>
					</p>
				</Col>
			</Row>
		)
	}

	return (
		<>
			<AuthLayout
				authTitle="Đăng xuất thành công!"
				helpText="Bạn đã đăng xuất khỏi FXCM Holdings."
				bottomLinks={<BottomLink />}
				starterClass
			>
				<div className="logout-icon m-auto">
					<Image fluid src={shield} alt="" />
				</div>
			</AuthLayout>
		</>
	)
}

export default Logout

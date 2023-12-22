import { Button, Col, Row } from 'react-bootstrap'
import AuthLayout from '../AuthLayout'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useRegister from './useRegister'

// Components
import { VerticalForm, FormInput } from '@/components'

interface UserData {
	fullname: string
	username: string
	email: string
	password1: string
	rootUsername: string
}
const BottomLink = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Đã có tài khoản?{' '}
					<Link
						to="/auth/login"
						className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
					>
						<b>Đăng nhập</b>
					</Link>
				</p>
			</Col>
		</Row>
	)
}
const Register = () => {
	const { loading, register, error } = useRegister()

	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			fullname: yup.string().required('Vui lòng nhập họ tên'),
			username: yup.string().required('Vui lòng nhập tên đăng nhập'),
			email: yup
				.string()
				.required('Vui lòng nhập địa chỉ email')
				.email('Địa chỉ email không hợp lệ'),
			password1: yup.string().required('Vui lòng nhập mật khẩu'),
			rootUsername: yup.string().required('Vui lòng nhập username người giới thiệu'),
		})
	)

	return (
		<>
			<AuthLayout
				authTitle="Đăng ký"
				helpText="Đăng ký tài khoản tại FXCM Holdings."
				bottomLinks={<BottomLink />}
				hasThirdPartyLogin
			>
				<VerticalForm<UserData> onSubmit={register} resolver={schemaResolver}>
					<FormInput
						label="Họ tên"
						type="text"
						name="fullname"
						placeholder="Nhập họ tên"
						containerClass="mb-3"
						required
					/>

					<FormInput
						label="Tên đăng nhập"
						type="text"
						name="username"
						placeholder="Nhập tên đăng nhập"
						containerClass="mb-3"
						required
					/>

					<FormInput
						label="Địa chỉ email"
						type="text"
						name="email"
						placeholder="Nhập địa chỉ email"
						containerClass="mb-3"
						required
					/>

					<FormInput
						label="Mật khẩu"
						type="password"
						name="password1"
						placeholder="Nhập mật khẩu"
						containerClass="mb-3"
					/>
					<FormInput
						label="Người giới thiệu"
						type="text"
						name="rootUsername"
						placeholder="Nhập username người giới thiệu"
						containerClass="mb-3"
					/>
					{error !== null && (
						<div className="mb-0 text-start fs-italic">
							<span className="fw-bold" style={{ fontStyle: "italic", color: "red" }}>
								{error}
							</span>{' '}
						</div>
					)}
					
					<div className="mb-0 d-grid text-center">
						<Button
							variant="primary"
							disabled={loading}
							className="fw-semibold"
							type="submit"
						>
							Đăng ký
						</Button>
					</div>
				</VerticalForm>
			</AuthLayout>
		</>
	)
}

export default Register

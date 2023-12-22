import { Link, Navigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import AuthLayout from '../AuthLayout'
import useLogin from './useLogin'
import {
	Button,
	Col,
	Row,
} from 'react-bootstrap'

// components
import { VerticalForm, FormInput } from '@/components'

interface UserData {
	email: string
	password: string
	facode: string
}

const BottomLinks = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Chưa có tài khoản tại FXCM Holdings?{' '}
					<Link
						to="/auth/register"
						className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
					>
						<b>Đăng ký</b>
					</Link>
				</p>
			</Col>
		</Row>
	)
}

const schemaResolver = yupResolver(
	yup.object().shape({
		email: yup.string().required('Tên đăng nhập không được để trống'),
		password: yup.string().required('Mật khẩu đăng nhập không được để trống'),
		facode: yup.string(),
	})
)
const Login = () => {
	const { loading, login, redirectUrl, isAuthenticated, error } = useLogin()
	return (
		<>
			{isAuthenticated && <Navigate to={redirectUrl} replace />}

			<AuthLayout
				authTitle="Sign In"
				helpText="Nhập username để đăng nhập."
				bottomLinks={<BottomLinks />}
				hasThirdPartyLogin
			>
				<VerticalForm<UserData>
					onSubmit={login}
					resolver={schemaResolver}
					defaultValues={{ email: '', password: '' }}
				>
					<FormInput
						label="Username"
						type="text"
						name="email"
						placeholder="Username của bạn"
						containerClass="mb-3"
						required
					/>
					<FormInput
						label="Mật khẩu"
						name="password"
						type="password"
						required
						id="password"
						placeholder="Mật khẩu của bạn"
						containerClass="mb-3"
					>
						
						<Link to="/auth/forgot-password" className="text-muted float-end">
							<small>Quên mật khẩu?</small>
						</Link>
					</FormInput>
					<FormInput
							label="Mã bảo mật 2FA"
							name="facode"
							type="text"
							required
							id="facode"
							placeholder="Mã bảo mật 2FA"
							containerClass="mb-3"
						></FormInput>
					{error !== null && (
						<div className="mb-0 text-start fs-italic">
							<span className="fw-bold" style={{ fontStyle: "italic", color: "red" }}>
								{error}
							</span>{' '}
						</div>
					)}
					<div className="mb-0 text-start">
						<Button
							variant="soft-primary"
							className="w-100"
							type="submit"
							disabled={loading}
						>
							<i className="ri-login-circle-fill me-1" />{' '}
							<span className="fw-bold">Đăng nhập</span>{' '}
						</Button>
					</div>
				</VerticalForm>
			</AuthLayout>
		</>
	)
}

export default Login

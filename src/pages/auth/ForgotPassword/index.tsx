import { Button, Col, Row } from 'react-bootstrap'
import AuthLayout from '../AuthLayout'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useRecoverPassword from './useRecoverPassword'

// components
import { FormInput, VerticalForm, PageBreadcrumb } from '@/components'

const BottomLink = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Quay lại{' '}
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
interface UserData {
	email: string
}

const ForgotPassword = () => {
	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			email: yup
				.string()
				.email('Địa chỉ email không hợp lệ')
				.required('Vui lòng nhập địa chỉ email'),
		})
	)

	/*
	 * handle form submission
	 */
	const { loading, onSubmit } = useRecoverPassword()
	return (
		<div>
			<AuthLayout
				authTitle="Quên mật khẩu?"
				helpText="Nhập địa chỉ email để tiến hành khôi phục mật khẩu."
				bottomLinks={<BottomLink />}
			>
				<VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
					<FormInput
						label="Địa chỉ email"
						type="email"
						name="email"
						placeholder="Nhập địa chỉ email"
						containerClass="mb-3"
						required
					/>
					<div className="mb-0 text-start">
						<Button
							variant="soft-primary"
							className="w-100"
							type="submit"
							disabled={loading}
						>
							<i className="ri-loop-left-line me-1 fw-bold" />{' '}
							<span className="fw-bold">Khôi phục mật khẩu</span>{' '}
						</Button>
					</div>
				</VerticalForm>
			</AuthLayout>
		</div>
	)
}

export default ForgotPassword

import { authApi } from '@/common/api'
import { useAuthContext } from '@/common/context'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosResponse } from 'axios'; // Import AxiosResponse type


export default function useRegister() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null); // New state to capture error

	const navigate = useNavigate()

	const { isAuthenticated } = useAuthContext()

	const register = async ({
		fullname,
		username,
		email,
		password1,
		rootUsername,
	}: {
		fullname: string
		username: string
		email: string
		password1: string
		rootUsername: string
	}) => {
		setLoading(true)
		try {
			const result = await authApi.register({
				fullname,
				username,
				email,
				password: password1,
				rootUsername: rootUsername,
			});

			if (result.message === "Đăng ký thành công") {
				navigate('/auth/login')
			} else {
				setError(result.message);
			}
		} finally {
			setLoading(false)
		}
	}

	return { loading, register, isAuthenticated, error }
}

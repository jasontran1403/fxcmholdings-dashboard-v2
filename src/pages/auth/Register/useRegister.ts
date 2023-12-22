import { authApi } from '@/common/api'
import { useAuthContext } from '@/common/context'
import { AxiosResponse } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


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
			const result: AxiosResponse<any, any> = await authApi.register({
				fullname,
				username,
				email,
				password: password1,
				rootUsername,
			  });
			  
			  console.log(result.data.message);
			  
			  if (result.data.message === "Đăng ký thành công") {
				navigate('/auth/login');
			  } else {
				setError(result.data.message);
			  }
			  
		} finally {
			setLoading(false)
		}
	}

	return { loading, register, isAuthenticated, error }
}

import { authApi, useAuthContext } from '@/common'
import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { User } from '@/types'

export default function useLogin() {
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const [error, setError] = useState<string | null>(null); // New state to capture error
	const navigate = useNavigate()

	const { isAuthenticated, saveSession } = useAuthContext()

	const redirectUrl = useMemo(
		() =>
			location.state && location.state.from
				? location.state.from.pathname
				: '/',
		[location.state]
	)

	const login = async ({ email, password, facode }: User) => {
		setLoading(true)
		try {
			const res: any = await authApi.login({ email, password, facode })
			if (res.token) {
				saveSession({ ...(res.user ?? {}), email, token: res.token });
				navigate(redirectUrl)
			}
		} catch (error) {
			setError(error as string);
		}
		 finally {
			setLoading(false)
		}
	}

	return { loading, login, redirectUrl, isAuthenticated, error }
}

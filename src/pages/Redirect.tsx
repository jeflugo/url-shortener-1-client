import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Redirect() {
	useEffect(() => {
		const id = window.location.href.split('/').pop()
		fetch(`${import.meta.env.VITE_SERVER_URL}/urls/${id}`)
			.then(res => res.json())
			.then(data => (window.location.href = data.url))
			.catch(() => toast.error('Something went wrong'))
	}, [])
	return (
		<div className='flex justify-center items-center h-screen'>
			<h2 className='text-xl font-medium'>Redirecting...</h2>
		</div>
	)
}

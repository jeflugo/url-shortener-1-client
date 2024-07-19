import { useEffect } from 'react'
// import toast from 'react-hot-toast'

export default function Redirect() {
	useEffect(() => {
		const id = window.location.href.split('/').pop()
		console.log(id)
		// fetch(`${import.meta.env.VITE_SERVER_URL}/${id}`)
		// 	.then(res => res.json())
		// 	.then(data => console.log(data))
		// 	.catch(() => toast.error('Something went wrong'))
	}, [])
	return <div>redirect</div>
}

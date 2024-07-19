import { useState } from 'react'
import toast from 'react-hot-toast'

function validateUrl(url: string) {
	const pattern = /^(http|https):\/\/\w+/
	return pattern.test(url)
}

type UrlFormProps = {
	setShowShortUrl: React.Dispatch<React.SetStateAction<boolean>>
	setShortUrl: React.Dispatch<React.SetStateAction<string>>
}

export default function UrlForm({
	setShowShortUrl,
	setShortUrl,
}: UrlFormProps) {
	const [text, setText] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!validateUrl(text)) return toast.error('URL is invalid')

		fetch(`${import.meta.env.VITE_SERVER_URL}/urls`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ url: text }),
		})
			.then(res => res.json())
			.then(data => {
				setShortUrl(data.shortUrl)
				setShowShortUrl(true)
				toast.success('URL shortened.')
			})
			.catch(() => {
				setShowShortUrl(false)
				toast.error('Something went wrong.')
			})
	}
	return (
		<form onSubmit={handleSubmit} className='flex flex-col items-start'>
			<label htmlFor='text'>Your URL:</label>
			<input
				className='outline-none mb-2 border-2 border-black rounded p-1 w-full'
				type='text'
				id='text'
				name='text'
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<button
				type='submit'
				className='bg-green-600 p-2 text-white font-semibold rounded'
			>
				Generate URL
			</button>
		</form>
	)
}

import { useState } from 'react'
import toast from 'react-hot-toast'

function validateUrl(url: string) {
	const urlPattern =
		/^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/

	return urlPattern.test(url)
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
		// const url = 'https://www.example.com'
		if (!validateUrl(text)) return toast.error('URL is invalid')

		setShortUrl(text)
		setShowShortUrl(true)
		toast.success('URL shortened.')
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

import { useState } from 'react'
import Header from './components/Header'
import ShortUrl from './components/ShortUrl'
import UrlForm from './components/UrlForm'

export default function App() {
	const [showShortUrl, setShowShortUrl] = useState(false)
	const [shortUrl, setShortUrl] = useState('')

	return (
		<main className='max-w-[400px] mx-auto px-2'>
			<Header />
			<UrlForm setShowShortUrl={setShowShortUrl} setShortUrl={setShortUrl} />
			{showShortUrl && <ShortUrl shortUrl={shortUrl} />}
		</main>
	)
}

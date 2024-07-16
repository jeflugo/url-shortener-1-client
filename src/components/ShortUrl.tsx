import { BiCopy } from 'react-icons/bi'

type ShortUrlProps = {
	shortUrl: string
}

export default function ShortUrl({ shortUrl }: ShortUrlProps) {
	return (
		<div className='text-center mt-4 flex flex-col items-center'>
			<h3 className='text-2xl font-medium'>Short Url:</h3>
			<p className='mb-2'>{shortUrl}</p>
			<button className='flex items-center gap-2 rounded bg-blue-600 text-white py-1 px-2'>
				<span>Copy url</span> <BiCopy />
			</button>
		</div>
	)
}

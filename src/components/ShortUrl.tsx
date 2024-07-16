type ShortUrlProps = {
	shortUrl: string
}

export default function ShortUrl({ shortUrl }: ShortUrlProps) {
	return <div>{shortUrl}</div>
}

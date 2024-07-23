import Landing from '@/components/landing'
import { cookies } from 'next/headers'

export default function Page() {
	const accessToken = cookies().get('password')
	return (
		<>
			<Landing accessToken={accessToken?.value} />

		</>
	)
}

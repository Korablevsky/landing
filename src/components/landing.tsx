'use client'

import { FocusEvent, useEffect, useState } from 'react'
import { getTextContent, setTextContent } from '../shared/action/setTextContent'

export default function Landing({
	accessToken,
}: {
	accessToken: string | undefined
}) {
	const [content, setContent] = useState('')
	useEffect(() => {
		console.log(accessToken, '3333')

		getTextContent('landing').then(r => {
			r && setContent(r.textContent)
		})
	}, [accessToken])

	const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
		const textContent = (event.target as HTMLDivElement).innerText
		// console.log(textContent)

		setTextContent(textContent, 'landing')
	}

	return (
		<div
			contentEditable={!!accessToken}
			suppressContentEditableWarning={true}
			onBlur={handleBlur}
		>
			{content}
		</div>
	)
}

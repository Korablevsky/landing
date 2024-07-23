'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const verificate = (formData: FormData) => {
	const password = formData.get('password') as string

	console.log(password, 'wewrwrwer')

	if (password === '123456') {
		cookies().set('password', password)
		revalidatePath('/')

		redirect('/')
	}
}

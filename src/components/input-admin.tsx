'use client'
import React from 'react'
import { verificate } from '../shared/action/verificate'

export default function InputAdmin() {
	return (
		<form action={verificate}>
			<input className=' bg-slate-500 p-20' name='password' />

			<button>Check</button>
		</form>
	)
}

'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const setTextContent = async (textContent: string, typeSection: string) => {
	console.log('setTextContent', textContent)
	try {
		const r = await prisma.section.upsert({
			where :{
        typeSection,
      },
      update: {
        textContent,
        typeSection
      },
      create:{
        typeSection ,
        textContent,
      }
		})
		return r
	} catch (error) {
		console.error('Error creating firstAction:', error)
		throw new Error('Failed to create firstAction')
	}
}

export const getTextContent = async (section: string) => {
	try {
		const r = await prisma.section.findFirst({
			where: {
				typeSection: section,
			},
		})
		return r
	} catch (error) {
		console.error('Error getting firstAction:', error)
		throw new Error('Failed to get firstAction')
	}
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/pages/home/Home'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
		<Home />
  )
}


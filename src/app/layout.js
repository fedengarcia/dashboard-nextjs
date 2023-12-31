import { Inter } from 'next/font/google'
import {Navbar} from '@/components/Navbar/Navbar'
import "../styles/globals.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const navbarLinks = [{
  label: 'Home',
  route: '/'
},
{
label: 'Posts dashboard',
route: '/dashboard'
},
{
label: 'Posts',
route: '/post'
}

]   



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
      </head>
      <body className={inter.className}>

          <Navbar links={navbarLinks} wallet={true}/>
          {children}
        </body>
    </html>
  )
}

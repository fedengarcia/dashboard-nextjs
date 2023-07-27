import { Navbar } from "@/components/Navbar/Navbar"

const navbarLinks = [{
    label: 'Grafico de velas',
    route: '/dashboard/1'
  },
  {
  label: 'Grafico de grafos',
  route: '/dashboard/2'
  },
  {
  label: 'Grafico de torta',
  route: '/dashboard/0'
  }
  
  ]   


export default function DashboardLayout ({children}) {
    return (
        <div className="page-layout"> 
            <h1 style={{textAlign:"center"}}>Dashboard</h1>
            <Navbar links={navbarLinks} wallet={false}/>
            {children}
        </div>
    )
}
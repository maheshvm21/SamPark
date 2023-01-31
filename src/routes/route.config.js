import Dashboard from '../components/Dashboard'
import Reports from '../components/Reports'
import ServiceTicketTable from '../components/ServiceTicketTable'
import LoginPage from '../pages/LoginPage'

export const RoutesConfig = [
  {
    path: '/',
    exact: true,
    restricted: true,
    component: LoginPage,
  },
  {
    path: '/login',
    exact: true,
    restricted: false,
    component: LoginPage,
  },
  {
    path: '/dashboard',
    exact: true,
    restricted: true,
    component: Dashboard,
  },
  {
    path: '/reports',
    exact: true,
    restricted: true,
    component: Reports,
  },
]

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
    path: '/servicetickettable',
    exact: true,
    restricted: true,
    component: ServiceTicketTable,
  },
]

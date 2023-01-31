import React from 'react'
import StickyHeadTable from './TableComponet/TableList'
import VisibilityIcon from '@mui/icons-material/Visibility';
import PieCharts from './ChartComponets/PieChart'
export default function Dashboard() {
    const data = [
        {
          id: 1,
          order: {
            owner: {
              id: 5,
              user: {
                id: 4,
                first_name: "Bharani",
                last_name: "v"
              }
            }
          },
          application_date: "2020-07-06"
        },
        {
          id: 2,
          order: {
            owner: {
              id: 5,
              user: {
                id: 4,
                first_name: "Mahesh",
                last_name: "V"
              }
            }
          },
          application_date: "2020-07-06"
        }
      ];
      let data_pie=[
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
      ];
      const tableHeaders = ["ID", "First Name", "Last Name", "Options"];
      
      const tableBodies = [
        `id`,
        `order.owner.user.first_name`,
        `order.owner.user.last_name`,
        {
          base: "/user",
          param: `id`,
          icon: <VisibilityIcon />
        }
      ];
  return (

    <>
    <div style={{margin:"auto",width:"50%" ,padding:"10px",textAlign:"center"}}> 
    <h4>Pie chart</h4>
    <PieCharts data1={data_pie} />
    </div>
    <h4 style={{margin:"auto",width:"50%" ,padding:"10px",textAlign:"center"}}>USERS</h4>
    <StickyHeadTable
    data={data}
    tableHeaders={tableHeaders}
    tableBodies={tableBodies}
    />
    </>
   
    
  )
}

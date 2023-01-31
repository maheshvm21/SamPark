import React from 'react'
import StickyHeadTable from './TableComponet/TableList'
import VisibilityIcon from '@mui/icons-material/Visibility';
import PieCharts from './ChartComponets/PieChart'


export default function Reports() {
    const data = [
        {
            id: 1,
            Project_Name: "Test",
            Project_code: "test_123",
            application_date: "2020-07-06"
        },
        {
            id: 2,
            Project_Name: "Test Vm",
            Project_code: "test_vm",
            application_date: "2020-07-06"
        },
        {
            id: 3,
            Project_Name: "Tata",
            Project_code: "tata_123",
            application_date: "2020-07-06"
        },
        {
            id: 4,
            Project_Name: "Gre",
            Project_code: "gre_vm",
            application_date: "2020-07-06"
        }
    ];

    const tableHeaders = ["ID", "Project Name", "Project Code", "Project Date", "Options"];

    const tableBodies = [
        `id`,
        `Project_Name`,
        `Project_code`,
        `application_date`,

        {
            base: "/user",
            param: `id`,
            icon: <VisibilityIcon />
        }
    ];
    let data_pie=[
        { title: 'Test', value: 10, color: '#E38657' },
        { title: 'Test Vm', value: 15, color: '#C13C87' },
        { title: 'Tata', value: 20, color: '#6A2155' },
        { title: 'Gre', value: 12, color: '#6A2135' },
      ];
    return (
        <>
         <div style={{margin:"auto",width:"50%" ,padding:"10px",textAlign:"center"}}> 
    <h4>Pie chart</h4>
    <PieCharts data1={data_pie} />
    </div>
    <StickyHeadTable
            data={data}
            tableHeaders={tableHeaders}
            tableBodies={tableBodies}
        />
        </>
       
    )
}

import { Table} from "antd"
import Header from "../components/header/Header"
import { useEffect, useState } from "react";


const CustomerPage = () => {


  const [billItems, setBillItems] = useState([]);

  useEffect(()=>{

    const getBills = async ()=>{
      try {
        
        const res = await fetch("http://localhost:5000/api/bills/get-all");
        const data = await res.json();
        setBillItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBills();

  },[])

    

      const columns = [
        {
          title: "Müşteri Adı",
          dataIndex: "customerName",
          key: "customerName",
        },
        {
          title: "Telefon Numarası",
          dataIndex: "customerPhoneNumber",
          key: "customerPhoneNumber",
        },
      ];
      


  return (
   
    <>
        <Header></Header>
        
        <h1 className="text-4xl font-bold text-center mb-4">Müşteriler</h1>

        <div className="px-6">
            <Table dataSource={billItems} columns={columns} bordered pagination={false} scroll={{
            x: 1000,
            y: 300
          }}></Table>

          
        </div>

       

    </>
  
)
}

export default CustomerPage
import { Button, Card, Table} from "antd"
import Header from "../components/header/Header"
import { useEffect, useState } from "react";
import PrintBill from "../components/bills/PrintBill";

const BillPage = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [billItems, setBillItems] = useState([]);
    const [customer, setCustomer] = useState();

    useEffect(()=>{
      const getBills = async()=>{
        try {
          
          const res = await fetch("http://localhost:5000/api/bills/get-all")
          const data = await res.json()
          setBillItems(data)


        } catch (error) {
          console.log(error);
        }
      }
      getBills()
    }, [])

    
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
      
      {
        title: "Ödeme Yöntemi",
        dataIndex: "paymentMode",
        key: "paymentMode",
      },
      {
        title: "Toplam Fiyat",
        dataIndex: "totalAmount",
        key: "totalAmount",
        render: (text)=>{
          return <span>{text}₺</span>
        }
      },
      {
        title: "Actions",
        dataIndex: "action",
        key: "action",
        render: (_, record)=>{
          return <Button type="link" className="pl-0" 
          onClick={()=>
            { setIsModalOpen(true)
          setCustomer(record)
            }
          }>Yazdır</Button>
        }
      },
    ];
  
      


  return (
   
    <>
        <Header></Header>
        
        <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>

        <div className="px-6">
            <Table dataSource={billItems} columns={columns} bordered pagination={false} scroll={{x:1000, y:300}}></Table>

            <div className="cart-total flex justify-end mt-4">
              
            <Card className="w-72">
            
                <Button className="mt-4 w-full" type="primary" size="large" onClick={()=> setIsModalOpen(true)}>Yazdır</Button>

            </Card>
                
            </div>
        </div>

        <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} customer={customer}></PrintBill>

    </>
  
)
}

export default BillPage
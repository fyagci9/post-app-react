import { Table} from "antd"
import Header from "../components/header/Header"
import { useState } from "react";
import PrintBill from "../components/bills/PrintBill";

const BillPage = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];

      const columns = [
        {
          title: "Key",
          dataIndex: "key",
          key:"key",

        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      
 console.log(isModalOpen);

  return (
   
    <>
        <Header></Header>
        
        <h1 className="text-4xl font-bold text-center mb-4">Müşteriler</h1>

        <div className="px-6">
            <Table dataSource={dataSource} columns={columns} bordered pagination={false}></Table>

            <div className="cart-total flex justify-end mt-4">
              
            
                
            </div>
        </div>

        <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></PrintBill>

    </>
  
)
}

export default BillPage
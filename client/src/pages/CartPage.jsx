import { Button, Card, Table, Modal } from "antd"
import Header from "../components/header/Header"
import { useState } from "react";
import CreateBill from "../components/cart/CreateBill";

const CartPage = () => {


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
        <div className="px-6">
            <Table dataSource={dataSource} columns={columns} bordered pagination={false}></Table>

            <div className="cart-total flex justify-end mt-4">
              
            <Card className="w-72">
                
                <div className="flex justify-between">
                    <span>Ara Toplam</span>
                    <span>549.00₺</span>
                </div>

                <div className="flex justify-between my-2">
                    <span>KDV Toplam %8</span>
                    <span className="text-red-600">549.00₺</span>
                </div>

                <div className="flex justify-between">
                    <b>Toplam</b>
                    <b>549.00₺</b>
                </div>

                <Button className="mt-4 w-full" type="primary" size="large" onClick={()=> setIsModalOpen(true)}>Sipariş Oluştur</Button>

            </Card>
                
            </div>
        </div>

        <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></CreateBill>

    </>
  
)
}

export default CartPage
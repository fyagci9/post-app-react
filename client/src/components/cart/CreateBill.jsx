import { Modal, Form, Input, Select, Button, Card } from "antd"

const CreateBill = ({isModalOpen, setIsModalOpen}) => {

  const onFinish = (values) =>{
    console.log('Received values of form: ', values);
  }

  return (
    
    <Modal title="Fatura Oluştur" open={isModalOpen} footer={false} onCancel={()=> setIsModalOpen(false)}  >

      <Form layout={"vertical"} onFinish={onFinish}>

        <Form.Item label="Müşteri Adı"  rules={[{required:true}]} name="customerName">
          <Input placeholder="Adınız"></Input>
        </Form.Item>

        <Form.Item label="Tel No" rules={[{required:true}]} name="phoneNumber">
          <Input placeholder="Telefon Numaranız" maxLength={11} ></Input>
        </Form.Item>

        <Form.Item label="Ödeme Yöntemi" rules={[{required:true}]} name={"paymentMode"}>
          <Select placeholder="Ödeme Yöntemini Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
          
        </Form.Item>

        
              
              <Card className="">
                  
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
  
                  <Button className="mt-4 w-full" type="primary" size="large" onClick={()=> setIsModalOpen(true)} htmlType="submit">Sipariş Oluştur</Button>
  
              </Card>
                  
             

      </Form>
        
      </Modal>
  )
}

export default CreateBill
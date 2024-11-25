import { Modal } from "antd"

const CreateBill = ({isModalOpen, setIsModalOpen}) => {
  return (
    
    <Modal title="Fatura Oluştur" open={isModalOpen} footer={false} onCancel={()=> setIsModalOpen(false)}>
        
      </Modal>
  )
}

export default CreateBill
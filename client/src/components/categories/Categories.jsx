import { PlusOutlined } from "@ant-design/icons";
import { Form, Modal, Input, Button, message } from "antd";
import "./style.css";
import { useState } from "react";

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {

        fetch("http://localhost:5000/api/categories/add-category",{
            method:"POST",
            body:JSON.stringify(values),
            headers:{"Content-type": "application/json; charset=UTF-8"},
        })
        message.success("Kategori başarıyla eklendi")
        form.resetFields()
        
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      <li className="category-item">
        <span>Tümü</span>
      </li>
      <li className="category-item">
        <span>Yiyecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li className="category-item">
        <span>İçecek</span>
      </li>
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl"></PlusOutlined>
      </li>
      <Modal
        title="Yeni Kategori Ekle"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Kategori Ekle"
            rules={[
              { required: true, message: "Kategori Alanı Boş Geçilemez" },
            ]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;

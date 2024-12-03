import { Button, Form, Input, message, Modal, Table } from "antd";
import React, { useState } from "react";

const Edit = ({ isEditModalOpen, setIsEditModalOpen, categories, setCategories }) => {

const [editingRow, setEditingRow] = useState({});


    const onFinish = (values)=>{
        try {
            fetch("http://localhost:5000/api/categories/update-category",{

                method:"PUT",
                body: JSON.stringify({...values, categoryId : editingRow._id}),
                headers:{"Content-type": "application/json; charset=UTF-8"}
            })
            message.success("Kategori Başarıyla Güncellendi");
            setCategories(
                categories.map((item)=>{
                    if(item._id === editingRow._id){
                        return{...item, title: values.title}
                    }
                    return item;

                })
            )
            
        } catch (error) {
            message.error("Bi şeyler yanlış gitti")
        }
    }


  const columns = [
    {
      title: "Kategori Adı",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id ){
            return (
                <Form.Item className="mb-0" name="title">
                <Input defaultValue={record.title} />
              </Form.Item>
            );
        }else{
            return <p>{record.title}</p>
        }
       
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div>
            <Button type="link" onClick={()=>setEditingRow(record)}>Düzenle</Button>
            <Button type="text" htmlType="submit">Kaydet</Button>
            <Button type="link" danger>Sil</Button>
          </div>
        );
      },
    },
  ];

  return (
    <Modal
      open={isEditModalOpen}
      title="Kategori İşlemleri"
      footer={false}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <Form onFinish={onFinish}>
        <Table bordered dataSource={categories} columns={columns} rowKey={"_id"}/>
      </Form>
    </Modal>
  );
};
export default Edit;

import { Button, Card, Form, Input, message, Modal, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/cartSlice";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await fetch("http://localhost:5000/api/bills/add-bill", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          subTotal: cart.total,
          tax: ((cart.total * cart.tax) / 100).toFixed(2),
          totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
          cartItems: cart.cartItems,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      if (res.status === 200) {
        message.success("Fatura başarıyla oluşturuldu.");
        dispatch(reset());
        navigate("/bills");
      }
    } catch (error) {
      message.danger("Bir şeyler yanlış gitti.");
      console.log(error);
    }
  };
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı"
          rules={[{ required: true }]}
          name="customerName"
        >
          <Input placeholder="Adınız"></Input>
        </Form.Item>

        <Form.Item
          label="Tel No"
          rules={[{ required: true }]}
          name="customerPhoneNumber"
        >
          <Input placeholder="Telefon Numaranız" maxLength={11}></Input>
        </Form.Item>

        <Form.Item
          label="Ödeme Yöntemi"
          rules={[{ required: true }]}
          name={"paymentMode"}
        >
          <Select placeholder="Ödeme Yöntemini Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card className="">
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}</span>
          </div>

          <div className="flex justify-between my-2">
            <span>KDV KDV %{cart.tax}</span>
            <span className="text-red-600">
              {(cart.total * cart.tax) / 100 > 0
                ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                : 0}
              ₺
            </span>
          </div>

          <div className="flex justify-between">
            <b>Genel Toplam</b>
            <b>
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}
              ₺
            </b>
          </div>

          <Button
            className="mt-4 w-full"
            type="primary"
            size="large"
            onClick={() => setIsModalOpen(true)}
            htmlType="submit"
            disabled={cart.cartItems.length === 0}
          >
            Sipariş Oluştur
          </Button>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;

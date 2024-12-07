import { Button } from "antd";
import {
  ClearOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import { useSelector } from "react-redux";

const CartTotal = () => {
  const {cartItems} = useSelector((state)=>state.cart)
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2
        className="bg-blue-600 text-center py-4 text-white font-bold
        tracking-wider"
      >
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">

      {cartItems.map((item)=>(
        <li className="cart-item flex justify-between" key={item._id}>
        <div className="flex items-center">
          <img
            src={item.img}
            alt=""
            className="w-16 h-16 object-cover"
          />

          <div className="flex flex-col ml-2">
            <b>{item.title}</b>
            <span>{item.price}₺ x {item.quantity} </span>
          </div>
        </div>

        <div className="flex items-center gap-x-1">
          <Button
            type="primary"
            size="small"
            className="w-full items-center justify-center !rounded-full"
            icon={<PlusCircleOutlined />}
          />
          <span className="font-bold">{item.quantity}</span>
          <Button
            type="primary"
            size="small"
            className="w-full items-center justify-center !rounded-full"
            icon={<MinusCircleOutlined />}
          />
        </div>
      </li>

      )



      )}

        

      </ul>

      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>90₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %8</b>
            <span className="text-red-700">+7.92</span>
          </div>
        </div>

        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">90₺</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 items-center justify-center"
            icon={<ClearOutlined />}
            danger
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

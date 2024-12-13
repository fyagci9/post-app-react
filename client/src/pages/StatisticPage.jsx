import { useEffect, useState } from "react";
import Header from "../components/header/Header"
import StatisticCart from "../components/statistics/StatisticCart"

const StatisticPage = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("posUser"))

  const totalAmount = () => {
    const amount = data.reduce((total, item) => item.totalAmount + total, 0);
    return `${amount.toFixed(2)}₺`;
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(process.env.REACT_APP_SERVER_URL + "/api/bills/get-all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  return (
   
    <>
        <Header></Header>
        <div className="px-6 md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">{user.username}</span>.
          </h2>

          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 my-10 gap-10">

         <StatisticCart title={"Toplam Müşteri"} amount={data?.length} img={"images/user.png"} ></StatisticCart>
         <StatisticCart  title={"Toplam Kazanç"} amount={totalAmount()} img={"images/money.png"}></StatisticCart>
         <StatisticCart  title={"Toplam Satış"} amount={data?.length} img={"images/sale.png"}></StatisticCart>
         <StatisticCart  title={"Toplam Ürün"} amount={products?.length} img={"images/product.png"}></StatisticCart>

          </div>

        
        </div>

        

      </div>
       
    </>
  
)
}

export default StatisticPage
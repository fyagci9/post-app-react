import Header from "../components/header/Header"
import StatisticCart from "../components/statistics/StatisticCart"

const StatisticPage = () => {

  return (
   
    <>
        <Header></Header>
        <div className="px-6 md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>

          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 my-10 gap-10">

         <StatisticCart title={"Toplam Müşteri"} amount={"10"} img={"images/user.png"} ></StatisticCart>
         <StatisticCart  title={"Toplam Kazanç"} amount={"10"} img={"images/money.png"}></StatisticCart>
         <StatisticCart  title={"Toplam Satış"} amount={"10"} img={"images/sale.png"}></StatisticCart>
         <StatisticCart  title={"Toplam Ürün"} amount={"10"} img={"images/product.png"}></StatisticCart>

          </div>

          <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
            
            <div className="lg:w-1/2 lg:h-full h-72 ">
               
            </div>
            <div className="lg:w-1/2 lg:h-full h-72 ">
              
            </div>
        </div>
        
        </div>

        

      </div>
       
    </>
  
)
}

export default StatisticPage
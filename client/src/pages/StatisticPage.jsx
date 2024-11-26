
import Header from "../components/header/Header"
import StatisticCart from "../components/statistics/StatisticCart"
import { Area, Pie } from '@ant-design/plots';

const data2 = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 },
  ];



const StatisticPage = () => {

    const config2 = {
        data: data2,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          text: (d) => `${d.type}\n ${d.value}`,
          position: 'spider',
        },
        legend: {
          color: {
            title: false,
            position: 'right',
            rowPadding: 5,
          },
        },
      };


    const config = {
        data: {
          type: 'fetch',
          value: 'https://assets.antv.antgroup.com/g2/aapl.json',
        },
        xField: (d) => new Date(d.date),
        yField: 'close',
      };


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
                <Area {...config} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72 ">
                <Pie {...config2} />
            </div>
        </div>
        
        </div>

        

      </div>
       
    </>
  
)
}

export default StatisticPage
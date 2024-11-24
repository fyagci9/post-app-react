import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";


function App() {
  return (
   <>
   <Header></Header>
    <div className="home px-6 flex justify-between gap-10">

      <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] pb-72">
        <Categories></Categories>
      </div>

      <div className="product flex-[8]">
        <div>products</div>
      </div>

      <div className="carttotals"> 
        <div>cart totals</div>
      </div>

    </div>


   </>

  );
}

export default App;

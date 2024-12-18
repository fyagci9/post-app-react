import { useEffect, useState } from "react";
import CartTotal from "../components/cart/CartTotal";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Product from "../components/product/Product";


const HomePage = () => {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(()=>{
    const getCategories = async ()=>{

      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all")
        const data = await res.json()
        setCategories(data)
      
      } catch (error) {
        console.log(error);
        
      }

    }
    getCategories()
   
  }, [])


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

  return (
    <> 
        <Header setSearch={setSearch}></Header>
    <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-20 h-screen">

      <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
        <Categories categories={categories} setCategories={setCategories} setFiltered={setFiltered} products={products}></Categories>
      </div>

      <div className="product flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
        <Product categories={categories} filtered={filtered} products={products} setProducts={setProducts} search={search}></Product>
      </div>

      <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border"> 
        <CartTotal></CartTotal>
      </div>

    </div>

    </>

  )
}

export default HomePage
import {BrowserRouter , Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticPage from "./pages/StatisticPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
  
    <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<RouteControl><HomePage></HomePage></RouteControl>}> </Route>
      <Route path="/cart" element={<RouteControl> <CartPage></CartPage></RouteControl>}> </Route>
      <Route path="/bills" element={<RouteControl> <BillPage></BillPage></RouteControl>}> </Route>
      <Route path="/customers" element={<RouteControl> <CustomerPage></CustomerPage></RouteControl>}> </Route>
      <Route path="/statistic" element={<RouteControl> <StatisticPage></StatisticPage></RouteControl>}> </Route>
      <Route path="/products" element={<RouteControl> <ProductPage></ProductPage></RouteControl>}> </Route>
      <Route path="/register" element={<Register></Register>}> </Route>
      <Route path="/login" element={<Login></Login>}> </Route>

    </Routes>
    
    </BrowserRouter>

  );
}

export default App;

export const RouteControl =({children})=>{
  if(localStorage.getItem("posUser")){
    return children
  }else{
    return <Navigate to="/login"></Navigate>
  }

}

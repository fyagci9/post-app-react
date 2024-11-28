import {BrowserRouter , Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticPage from "./pages/StatisticPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
  
    <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<HomePage></HomePage>}> </Route>
      <Route path="/cart" element={<CartPage></CartPage>}> </Route>
      <Route path="/bills" element={<BillPage></BillPage>}> </Route>
      <Route path="/customers" element={<CustomerPage></CustomerPage>}> </Route>
      <Route path="/statistic" element={<StatisticPage></StatisticPage>}> </Route>
      <Route path="/register" element={<Register></Register>}> </Route>
      <Route path="/login" element={<Login></Login>}> </Route>

    </Routes>
    
    </BrowserRouter>

  );
}

export default App;

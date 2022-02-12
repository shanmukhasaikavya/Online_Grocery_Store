import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./screens/About";
import AddProduct from "./screens/Admin/AddProduct";
import EditProduct from "./screens/Admin/EditProduct";
import MessageReceived from "./screens/Admin/MessageReceived";
import OrderReceived  from "./screens/Admin/OrderReceived";
import AllProducts from './screens/Admin/AllProducts'
import CanceledOrders from "./screens/Admin/CanceledOrders";
import DeliveredOrders from "./screens/Admin/DeliveredOrders";

import Login from "./screens/Login";



import PublicHome from "./screens/PublicHome";
import Register from "./screens/Register";
import Home from "./screens/user/Home";
import BillingAddress from "./screens/user/BillingAddress";
import MyOrders from "./screens/user/MyOrders";
import Message from "./screens/user/Message";
import AdminHome from "./screens/Admin/AdminHome";
import ChangePassword from "./screens/user/ChangePassword";
import ForgotPassword from "./screens/user/ForgotPassword";
import Cart from "./screens/user/Cart";




function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header/>
          <Switch>
          <Route exact path="/" component={PublicHome} />
          <Route exact path="/user/productcategory" component={Home} />
          <Route exact path='/user/cart/proceed' component={BillingAddress} />
          <Route exact path='/user/myorders' component={MyOrders} />
          <Route exact path='/user/message' component={Message} />
          <Route exact path="/admin" component={AdminHome} />
          
          <Route exact path="/user/changepassword" component={ChangePassword} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/user/cart" component={Cart} />
          <Route exact path="/admin/addproduct" component={AddProduct} />
          <Route exact path="/admin/messages" component={MessageReceived} />
          <Route exact path="/admin/orders" component={OrderReceived} />
          <Route exact path="/admin/cancelorders" component={CanceledOrders} />
          <Route exact path="/admin/deliverorders" component={DeliveredOrders} />
          <Route exact path="/admin/productcategory" component={AllProducts} />
          <Route exact path="/admin/productcategory/:id" component={EditProduct} />
          
          </Switch>
        </CartProvider>
      </BrowserRouter>
      <Footer className={"mt-5"}/>
    </div>
  );
}

export default App;

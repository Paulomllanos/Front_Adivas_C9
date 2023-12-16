import { Route, Routes } from "react-router-dom"
import Home from "../views/home/Home"
import Products from "../views/products/Products"
import Layout from "../components/layout/Layout"
import Auth from "../views/auth/Auth"
import Product from "../views/product/Product"
import Checkout from "../views/checkout/Checkout"
import Profile from "../views/profile/Profile"

const AppRouter = () => {
  return (
    <>  
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/user/profile' element={<Profile />} />
                <Route path='*' element={"<Navigate to="/" />"} />
            </Route>
        </Routes>
        
    </>
  )
}

export default AppRouter
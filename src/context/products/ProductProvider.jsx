import ProductContext from './ProductContext';
import axios from 'axios';
import { useReducer } from 'react';
import productReducer from './productReducer';


const ProductProvider = ({children}) => {

    const initialState = {
        products: [],
        product: [{
            id: "",
            name: "",
            sku: "",
            price: 0,
            image: "",
            stock: ""
        }]
    }

    const [productState, dispatch] = useReducer(productReducer, initialState)

    const getProducts = async() => {
        const response = await axios.get("http://localhost:8080/products")
        const productos = response.data.info;
        
        dispatch({
            type: "GET_PRODUCTS",
            payload: productos
        })
    }


  return (
    <ProductContext.Provider value={{getProducts, products: productState.products}}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider
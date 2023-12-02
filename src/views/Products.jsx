import { useContext, useEffect } from "react";
import ProductContext from "../context/products/ProductContext";

const Products = () => {

    const {getProducts, products} = useContext(ProductContext)

    useEffect(() => {
        const axiosProducts = async() => {
            await getProducts()
        }
        axiosProducts()
    }, [])

  return (
    <div>
        {products.map((product) => (
            <div key={product._id}>
                <h1>{product.name}</h1>
                <h1>$ {product.price}</h1>
            </div>
        ))}
    </div>
  )
}

export default Products
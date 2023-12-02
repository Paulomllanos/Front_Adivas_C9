import { useState, useEffect } from 'react'
import axios from 'axios'
import EjemploAbuelo from './components/EjemploAbuelo'
import './App.css'
import Products from './views/Products'

function App() {
  const [datos, setDatos] = useState([])

  const msg = "Saludos"


  // useEffect(() => {
  //   const products = async() => {
  //     const response = await axios.get("http://localhost:8080/products")
  //     setDatos(response.data.info)
  //   }
  //   products()     
  // }, [])

  

  // console.log(datos)
  return (
    <div>
      
      {/* {datos.map((dato) => (
        <div key={dato._id}>
          <h1>{dato.name}</h1>
          <img src={dato.image } width='200' height='200' />
        </div>
      ))} */}
     {/* <EjemploAbuelo msg={msg} /> */}
     <Products />
    </div>
  )
}

export default App

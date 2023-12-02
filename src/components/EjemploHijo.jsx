import { useContext } from "react"
import EjemploContext from "../context/ejemplo/EjemploContext"

const EjemploHijo = () => {

  const {msg, user} = useContext(EjemploContext)

  return (
    <div>
        <h1>{msg}</h1>
        <h3>Bienvenido, {user.email}</h3>
    </div>
  )
}

export default EjemploHijo
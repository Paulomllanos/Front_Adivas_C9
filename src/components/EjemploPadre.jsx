import EjemploHijo from "./EjemploHijo"
import { useContext } from "react"
import EjemploContext from "../context/ejemplo/EjemploContext"

const EjemploPadre = ({msg}) => {
  const {user} = useContext(EjemploContext)
  return (
    <div>
        <EjemploHijo msg={msg}/>
        <button>{user.name}</button>
    </div>
  )
}

export default EjemploPadre
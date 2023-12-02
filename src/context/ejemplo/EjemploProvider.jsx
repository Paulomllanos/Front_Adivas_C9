import EjemploContext from "./EjemploContext";

const EjemploProvider = ({children}) => {
    const msg = "saludos 2";

    const user = {
        name: 'paulo',
        email: "algo@algo.alg"
    }

    return (
        <EjemploContext.Provider value={{msg, user}}>{children}</EjemploContext.Provider>
    )
}

export default EjemploProvider;
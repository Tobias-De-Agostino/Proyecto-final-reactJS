import { useState, useEffect, useMemo } from "react"
import Boton from "./Boton"


export const Contador = () => {
    const [counter, setCounter] = useState(0)
    const [saludar, setSaludar] = useState(true)

    const incrementar = () => {
        setCounter( counter + 1 )
    }

    const restar = () => {
        if (counter > 0) {
            setCounter( counter - 1 )
        }
    }

    const cambiarSaludo = () => {
        setSaludar( !saludar )
    }
    

    useEffect(() => {
        console.log("Efecto de montaje")
        return () => {
            console.log("Efecto de desmontaje")
        }
    }, [])

}

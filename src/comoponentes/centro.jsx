'use client'

import { useEffect, useState } from "react"
import { Linea } from "./linea"
export function Centro(props) {
    const {id}=props
    const [lineas,setLineas] = useState([])
    useEffect(() => {
        const linas = []
        for (let i = 1; i <= 10; i++) {
            linas.push(<Linea key={i}/>)
        }
        setLineas(linas)
    }, [])
    return <div className="center" key={id}>
        <div className="lineas-container">
            {lineas}
        </div>
    </div>
}
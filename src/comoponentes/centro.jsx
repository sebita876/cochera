'use client'

import { useEffect, useState } from "react"
import { Linea } from "./linea"
export function Centro() {
    const [lineas,setLineas] = useState([])
    useEffect(() => {
        const linas = []
        for (let i = 1; i <= 10; i++) {
            linas.push(<Linea/>)
        }
        setLineas(linas)
    }, [])
    return <div className="center">
        <div className="lineas-container">
            {lineas}
        </div>
    </div>
}
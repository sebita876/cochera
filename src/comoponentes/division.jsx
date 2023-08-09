'use client'
import { Estacionamiento } from "./estacionamiento"
import { useState, useEffect } from "react"
export function Division(props) {
    const dia = new Date()
    const hora = dia.getHours()
    const min = dia.getMinutes()
    const { id } = props
    const [estacionamientos, setEstacionamientos] = useState([])
    const { clase } = props
    useEffect(() => {
        const est = []
        for (let i = 1; i <= 7; i++) {
            est.push(<Estacionamiento matricula="Vacio" key={i} color="#48ff00" /*tiempo={`${hora}:${min}`}*//>)
        }
        setEstacionamientos(est)
    }, [])
    return <div className={clase} key={id}>
        <div className="mitad">
            {estacionamientos}
        </div>
        <div className="mitad2">
            {estacionamientos}
        </div>
        
    </div>
}
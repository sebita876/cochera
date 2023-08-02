'use client'
import { Estacionamiento } from "./estacionamiento"
import { useState, useEffect } from "react"
export function Division(props) {
    const [estacionamientos, setEstacionamientos] = useState([])
    const { clase } = props
    useEffect(() => {
        const est = []
        for (let i = 1; i <= 7; i++) {
            est.push(<Estacionamiento matricula="123432" />)
        }
        setEstacionamientos(est)
    }, [])
    return <div className={clase}>
        <div className="mitad">
            {estacionamientos}
        </div>
        <div className="mitad2">
            {estacionamientos}
        </div>
    </div>
}
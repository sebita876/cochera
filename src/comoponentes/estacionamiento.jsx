'use client'
import { useState } from "react";

export function Estacionamiento(props){
    const[matricula,setMatricula] = useState(props.matricula)
    const ponerMatricula = () =>{
        const num = Math.floor(Math.random() * 100)
        setMatricula(num)        
    }
    return <div className="estacionamiento" onClick={()=>ponerMatricula()}>
        <div className="recuadro" >
            <p className="texto">{matricula}</p>
        </div>
    </div>
}
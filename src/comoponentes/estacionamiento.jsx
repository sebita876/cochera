'use client'
import { useState } from "react";
import * as validar from "../validaciones/validarEstacionamiento"
export function Estacionamiento(props) {
    const verHora = ()=>{
        const hora = new Date()
        if(hora.getHours()==ho && hora.getMinutes()==min){
            console.log("ya es la hora")
        }
    }
    setInterval(verHora,50000)
    const [color, setColor]= useState("#48ff00")
    const [modal, setModal] = useState(false)
    const [matricula, setMatricula] = useState(props.matricula)
    const ponerMatricula = () => {
        const mat = document.getElementById("matricula").value
        const validoNueva = validar.validarMatriculaNueva(mat)
        const validoVieja = validar.validarMatriculaVieja(mat)
        if (validoNueva == true || validoVieja == true) {
            setMatricula(mat)
            setColor("red")
            const hora = new Date()
            console.log(hora.getHours(),hora.getMinutes())
            openModal()
        }else{
            document.getElementById("text").style.display = "block"
        }
    }
    const openModal = () => {
        setModal(!modal)
    }
    return <div className="estacionamiento">
        {modal && (
            <div className="modalConten">
                <div className="modal">
                    <h1 id="text" className="h1"> ola</h1>
                    <input type="text" id="matricula" placeholder="Matricula" />
                    <button onClick={()=>ponerMatricula()}></button>
                </div>
            </div>
        )}
        <div className="recuadro" id="recuadro" style={{backgroundColor:color}} onClick={() => openModal()}>
            <p className="texto">{matricula}</p>
        </div>
    </div>
}
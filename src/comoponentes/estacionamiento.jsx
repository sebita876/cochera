'use client'
import { useState } from "react";
import * as validar from "../validaciones/validarEstacionamiento"
export function Estacionamiento(props) {
    const [tiempo, setTiempo] = useState(props.tiempo)
    const verHora = () => {
        const temp = document.getElementById("hora")
        const valor = temp.value
        if (valor !== '') {
            console.log(valor)
            setTiempo(valor)
            return true
        } else {
            return false
        }
    }
    const compararHora = () => {
        if (tiempo !== undefined) {
            const dato = new Date()
            const datoHora = dato.getHours()
            const datoMin = dato.getMinutes()
            const temp = tiempo.split(':')
            if (temp[0] <= datoHora && temp[1] <= datoMin ) {
                setColor("blue")
            }
        }
    }
    setInterval(() => {
        compararHora()
    }, 1000);
    const [color, setColor] = useState(props.color)
    const [modal, setModal] = useState(false)
    const [matricula, setMatricula] = useState(props.matricula)
    const ponerMatricula = () => {
        const horaValida = verHora()
        const mat = document.getElementById("matricula").value
        const validoNueva = validar.validarMatriculaNueva(mat)
        const validoVieja = validar.validarMatriculaVieja(mat)
        if ((validoNueva == true || validoVieja == true) && horaValida == true) {
            setMatricula(mat)
            setColor("red")
            openModal()
        } else {
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
                    <h1 id="text" className="h1">Informacion Incorrecta</h1>
                    <input type="time" id="hora" />
                    <input type="text" id="matricula" display="none" placeholder="Matricula" />
                    <button onClick={() => ponerMatricula()}></button>
                </div>
            </div>
        )}
        <div className="recuadro" id="recuadro" style={{ backgroundColor: color }} onClick={() => openModal()}>
            <p className="texto">{matricula}<br />{tiempo}</p>
        </div>
    </div>
}
export function Estacionamiento(props){
    const {matricula} = props
    return <div className="estacionamiento">
        <div className="recuadro">
            <p className="texto">{matricula}</p>
        </div>
    </div>
}
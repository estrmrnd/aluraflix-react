import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
// import videos from 'db.json'

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h2>Front End</h2>
            </Titulo>
            <Card id='1' 
            titulo='qualquer coisa' 
            capa="https://img.youtube.com/vi/Is6c9KSGCbk/maxresdefault.jpg"/>

            <Rodape />
        </>
    )
}

export default Inicio;
import style from "./pagina3.module.css"
function Pagina3(props) {

    return (
      <>
        <div className={style.caixa3}>
            <div className={style.caixaa} style={{}}>
            <img src={props.foto2} alt="" className={style.imagem1}/>
            <div className={style.caixatexto}>
                <h2>{props.titulo}</h2>
                <span>{props.texto5}</span>
            </div>
            </div>
        </div>
      </>
    );
  }
  export default Pagina3;
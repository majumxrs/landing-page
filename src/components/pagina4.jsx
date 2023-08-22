import style from "./pagina4.module.css"
function pagina4(props) {

    return (
      <>
      <div className={style.caixa6}>
        <div className={style.escrita22}>
            <h2 className={style.escrita22}>{props.escrita10}</h2>
        </div>
        <div>
        <input type={props.tipo} placeholder={props.dentro} 
        style={{backgroundColor: props.cor , width: props.tamanho , 
        color: props.corletra , marginTop: props.topo , height: props.altura , 
        borderRadius: props.borda}}/>
        </div>
        <button className={style.Botao} 
            style={{backgroundColor: props.cor , color: props.corletra, width: props.tamanho , height: props.altura , marginTop: props.topo, borderRadius: props.borda, marginLeft: props.lado, fontSize:props.tamfontebtn}} 
            >{props.texto} </button>
      </div>

      </>
    );
  }
  export default pagina4;
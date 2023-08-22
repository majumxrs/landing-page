import style from "./pagina2.module.css"
function Pagina2(props) {

    return (
      <>
      <div className={style.divmaior}>
        <div className={style.caixa1}>
          <h1 style={{fontFamily: props.font2, marginLeft: props.lado, fontSize:props.tamfonte}}>{props.escrita1}</h1>
          <h2 style={{fontFamily: props.font1, marginLeft: props.lado, fontSize:props.tamfonte}}>{props.escrita2}</h2>
          <button className={style.Botao} 
            style={{backgroundColor: props.cor , color: props.corletra, width: props.tamanho , height: props.altura , marginTop: props.topo, borderRadius: props.borda, marginLeft: props.lado, fontSize:props.tamfontebtn}} 
            >{props.texto} </button>
        </div>
        <div className= {style.caixa2}>
              <img src={props.foto} alt=""/> 
        </div>
      </div>
      </>
    );
  }
  export default Pagina2;
  
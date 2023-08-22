import style from "./rodapelogo.module.css"

function Rodapelogo(props) {

    return (
      <>
        <div className={style.divlogo}>
            <h1 className={style.escrita}>{props.nome}</h1>
        </div>
      </>
    );
  }
  export default Rodapelogo;
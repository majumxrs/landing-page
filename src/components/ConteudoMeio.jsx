import Pagina3 from "./pagina3";
import IImagem from "./fotos/caminhao.png"
import IIImagem from "./fotos/casinha.png"
import IIIImagem from "./fotos/tag.png"
import Style from './conteudomeio.module.css'

function App(props) {

  return (
    <>
    <div className={Style.flex}>
        <Pagina3 foto2={IImagem} titulo="Envio Gratis" texto5="Quando gastar um mínimo de $50.00 antes de impostos em todas as encomendas online."  />
        <Pagina3 foto2={IIIImagem} titulo="PREÇOS" texto5="Apresente um anúncio de um concorrente qualificado e teremos todo o prazer em igualar o preço!"  />
        <Pagina3 foto2={IIImagem} titulo="STORE PICK UP" texto5="Compre online e depois levante a sua encomenda na loja ou na rua."  />      
    </div>
    </>
  );
}
export default App;
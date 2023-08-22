import Rodapelogo from "./components/rodapelogo";
import "./components/global.module.css"
import Pagina2 from "./components/pagina2";
import Imagem from "./components/fotos/colecao-de-roupas-masculinas-em-fundo-branco-postura-plana-vista-do-topo_202443-63.jpg"
import ConteudoMeio from './components/ConteudoMeio'
import Pagina4 from "./components/pagina4";


function App(props) {

  return (
    <>
    <Rodapelogo nome="Martin's Store"/>
    <Pagina2 escrita1="40% OFF" escrita2="MEN´S FALL COLLECTION" texto="SHOP NOW" corletra="FFFFFF"  tamfontebtn="30px" cor="black" font1="Escrita" font2="Promo" tamanho="300px"  altura ="80px" borda="15px" lado="150px" tamfonte="80px" foto={Imagem}/>
    <ConteudoMeio></ConteudoMeio>
  <Pagina4 escrita10="Em caso de duvidas:" Input nome="Email: " tipo="email" dentro="Email" topo="20px" tamanho="202px" altura="29px" borda="11px" corletra="14px"  texto="ENVIAR"/>
    </>
  );
}
export default App;

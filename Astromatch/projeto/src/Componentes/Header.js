import ButtonClear from "./ButtonClear";

import styled from 'styled-components';


const Heeader=styled.div`
display:flex;
border-bottom-style:solid ;
align-items: center;
background-color: pink;
justify-content: space-around;


`




const Header = (props) => {
 
    return (
     <Heeader>
         <img src="https://cdn.iconscout.com/icon/free/png-128/love-2387666-1991064.png" width={50}/>
         <h1>LabeMeet</h1>
         <button onClick={()=>{props.mudarPagina("paginaLista")}}>Mostrar Meet</button>
         
         <div>      
           <ButtonClear/>
          </div>
         <button onClick={()=>{props.mudarPagina("paginaInicial")}}>Pagina Inicial</button>
     </Heeader>
 )
}
export default Header;

// mesma funçao so que com outro valor

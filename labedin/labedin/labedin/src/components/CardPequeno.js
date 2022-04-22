import React from "react";
import './Primeiro.css'



function CardPequeno(){
    return(
         <div className="segundavez">
           < CardPequeno2></CardPequeno2>
          
          <CardPequeno3></CardPequeno3>
       </div>
    );
}

function CardPequeno2(){
    return(
         <div className="segundavez">
          <p1>Endereço : Rua Monerat N15 apt 103</p1>
       </div>
    );
}
function CardPequeno3(){
    return(
         <div className="segundaterceira">
          <p1> Email: felipe123oliveirasantos@gmail.com </p1>
       </div>
    );
}

export default CardPequeno

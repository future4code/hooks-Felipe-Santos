import axios from "axios";

function ButtonClear () {
   
    const Limpar =()=>{
        axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-oliveira-hooks/clear")
        .then((res)=>{
            alert("Os seus matches  foram excluidos")

        })
        .cath(()=>{
            
        })
    
    }

    return (
        <div>
           <button onClick={Limpar}>reset</button>
            
        </div>
    )
}
export default ButtonClear;
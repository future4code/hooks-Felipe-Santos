class tentando extends React.Component {
    state={
        pessoas: [
            {
                nome: "Paulinha" ,
                fotoUsuario:"bla",
                fotoPost:"bla"
            } ,
            {
                nome: "carla" ,
                fotoUsuario:"bla",
                fotoPost:"bla"
            },
            {
                nome:"Felipe",
                fotoUsuario:"bla",
                fotoPost:"bla"
            }
        ],
        valorInputPessoa:"",
        valorInputUsuario:"",
        valorInputPost:"",

    };
    adicionarPessoa= ()=> {
        const novaPessoa ={
            nome: this.state.valorInputPessoa,
            
            foto: this.state.valorInputfotoUSuario,

            fotopost: this.state.valorInputfotoUsuario
        };
        const novoPessoa=[...this.state.pessoas,novaPessoa];

        this.setState({pessoas : novoPessoa});
    };
    onChangeInputPessoa=(event) =>{
        this.setState({valorInputPessoa:event.target.value})
    };
    onChangeInputfotoUsuario=(event)=>{
        this.setState({valorInputUsuario: event.target.value})
    };
    onchangeInputfotoPost=(event)=>{
        this.setState({valorInputPost :event.target.value})
     };
     render () {
         const listaDeComponentes=this.state.pessoas.map((pessoa) => {
             return (
                 <p>{pessoa.nome}= {pessoa.fotoUsuario} = {pessoa.fotoPost}
                 </p>
             
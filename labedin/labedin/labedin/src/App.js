import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.6435-9/49899946_2258457464206537_8943372540324085760_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=owQk5PDlozgAX_1J0g0&_nc_ht=scontent.fsdu2-2.fna&oh=00_AT9_MUXL1ptD0vpNEfLt6fxt66jgjm3J8luhZcvVR01_rg&oe=62891E5C" 
          nome="Felipe De Oliveira Santos" 
          descricao="Oi, eu sou o Felipe De Oliveira Santos. Tenho 22 Anos Sou Estudante da Labenu e estou Aprendendo Programação do zero."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271208.png" 
          texto="Ver mais"
          
          />
          <CardPequeno/>
          
          
          

          
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://www.chopinzinho.pr.gov.br/portal/fotos/g_1576175737.jpg" 
          nome="Jovem Aprendiz" 
          descricao="Organizo , Digitalizo é crio planilhas (planilha ja vem do modelo que eles querem)!" 
        />
        
        <CardGrande 
          imagem="https://www.cidademarketing.com.br/marketing/wp-content/uploads/2020/01/rappi_sodexo.png" 
          nome="Entregador da Rappi" 
          descricao="Recebia ou comprava os produtos selecionado pelos clientes e entregava para eles ." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  
        <ImagemButton 
        imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png"   
         texto="Linkedin"  
         /> 
      </div>
    </div>
  );
}

export default App;

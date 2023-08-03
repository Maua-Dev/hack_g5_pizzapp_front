import '../pages/AppJony.css';
import { ColunaContainer, Container } from '../styled-components/container';
import { Image } from '../styled-components/ImageJony';
import { MainTitle } from '../styled-components/TextJony';
import Pessoa from '../images/pessoa.png';
import { BotaoCliente } from '../styled-components/ButtonClientao';
import { BotaoComidas } from '../styled-components/ButtonComidas';
import { PratosTitle } from '../styled-components/TitulosDosPratos';




function AppGar1() {
  return (
    <>
    
      <MainTitle>{'PIZZATE'}</MainTitle>
      
      
        
        <BotaoCliente><Image src={Pessoa} alt="Pessoa" />Cliente</BotaoCliente>
        <Container>
          <ColunaContainer>
            <PratosTitle>Entradas</PratosTitle>
            <BotaoComidas>Antipasto</BotaoComidas>
            <BotaoComidas>Batatas rústicas</BotaoComidas>
            <BotaoComidas>Bolinho de bacalhau</BotaoComidas>
            <BotaoComidas>Bruschettas</BotaoComidas>
          </ColunaContainer>
          <ColunaContainer>
            <PratosTitle>Pizzas</PratosTitle>
            <BotaoComidas>Atum</BotaoComidas>
            <BotaoComidas>Calabresa</BotaoComidas>
            <BotaoComidas>Catupiry</BotaoComidas>
            <BotaoComidas>Cogumelo</BotaoComidas>
            <BotaoComidas>Calabresa acebolada</BotaoComidas>
            <BotaoComidas>Escarola</BotaoComidas>
            <BotaoComidas>Frango com catupiry</BotaoComidas>
            <BotaoComidas>Hawaiana</BotaoComidas>
            <BotaoComidas>Lombo</BotaoComidas>
            <BotaoComidas>Margherita</BotaoComidas>
            <BotaoComidas>Mussarela</BotaoComidas>
            <BotaoComidas>Mussarela de búfala</BotaoComidas>
          </ColunaContainer>
          <ColunaContainer>
            <PratosTitle>Doces</PratosTitle>
            <BotaoComidas>Banana</BotaoComidas>
            <BotaoComidas>Brigadeiro</BotaoComidas>
            <BotaoComidas>Chocolate e banana</BotaoComidas>
            <BotaoComidas>Chocolate e morango</BotaoComidas>
          </ColunaContainer>
          <ColunaContainer>
            <PratosTitle>Bebidas</PratosTitle>
            <BotaoComidas>Água</BotaoComidas>
            <BotaoComidas>Cervejas</BotaoComidas>
            <BotaoComidas>Choppes</BotaoComidas>
            <BotaoComidas>Refrigerantes</BotaoComidas>
            <BotaoComidas>Sucos</BotaoComidas>
            <BotaoComidas>Vinhos</BotaoComidas>
          </ColunaContainer>
        </Container>
        
        
         
     
     
  
    </>
  )
}

export default AppGar1; 

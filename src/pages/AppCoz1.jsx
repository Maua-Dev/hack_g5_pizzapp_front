import '../pages/AppCoz1.css';
import { MainTitle } from '../styled-components/TextGar';
import { ColunaContainer, Container } from '../styled-components/ContainerCoz';
import { PedidosTitle } from '../styled-components/PedidosTitle'
import { Lista } from '../styled-components/ListaDosPratos';
import { PedidosCoz } from '../styled-components/ComidasCoz';
import { SubTitle } from '../styled-components/SubTitle';




function AppBar() {
  return (
    <>     
      <MainTitle>{'PIZZATE'}</MainTitle>
      <SubTitle>(Bar)</SubTitle>
      <Container>
        <ColunaContainer>
        <PedidosCoz>
            <PedidosTitle>#243K</PedidosTitle>
            <Lista>1 Cerveja Heineken</Lista>
            <Lista>1 Suco de morango com leite</Lista>
            <Lista>1 Suco de laranja</Lista>
          </PedidosCoz>
          <PedidosCoz>
            <PedidosTitle>#843B</PedidosTitle>
            <Lista>1 Chopp claro</Lista>
            <Lista>2 Refrigerante Coca Cola</Lista>
            <Lista>1 Suco de uva</Lista>
          </PedidosCoz>
        </ColunaContainer>         
          <ColunaContainer>
          <PedidosCoz>
            <PedidosTitle>#103B</PedidosTitle>
            <Lista>1 Cerveja Heineken</Lista>
            <Lista>1 Cerveja Spaten</Lista>
            <Lista>1 Vinho Rosé</Lista>
            <Lista>1 Água</Lista>
            <Lista>2 Refrigerante Guaraná</Lista>
            <Lista>1 Suco de malancia</Lista>
            <Lista>1 Suco de uva</Lista>
            <Lista>1 Suco de caju</Lista>            
          </PedidosCoz>
          </ColunaContainer>
          <ColunaContainer>
          <PedidosCoz>
            <PedidosTitle>#243B</PedidosTitle>
            <Lista>1 Cerveja Heineken</Lista>
            <Lista>1 Suco de caju</Lista>          
          </PedidosCoz>
          <PedidosCoz>
            <PedidosTitle>#843B</PedidosTitle>
            <Lista>1 Suco de limão</Lista>
            <Lista>1 Cerveja Spaten</Lista>
            <Lista>1 Suco de malancia</Lista>
            <Lista>1 Suco de morango</Lista>
          </PedidosCoz>
          </ColunaContainer>
          <ColunaContainer>
          <PedidosCoz>
            <PedidosTitle>#543B</PedidosTitle>
            <Lista>1 Suco de limão</Lista>
            <Lista>1 Refrigerante Sprite</Lista>
            <Lista>2 Cerveja Corona</Lista>
            <Lista>1 Água</Lista>
          </PedidosCoz>
          <PedidosCoz>
            <PedidosTitle>#843B</PedidosTitle>
            <Lista>1 Suco de uva</Lista>
            <Lista>1 Água</Lista> 
          </PedidosCoz>
          </ColunaContainer>
        </Container>
    </>
  )
}

export default AppBar; 

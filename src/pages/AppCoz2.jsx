
import '../pages/AppCoz2.css';
import { MainTitleCoz } from '../styled-components/TextCoz';
import { ColunaContainer, Container } from '../styled-components/ContainerCoz2';
import { PedidosTitle } from '../styled-components/PedidosTitle'
import { Lista } from '../styled-components/ListaDosPratos';
import { PedidosCoz } from '../styled-components/ComidasCoz2';
import { SubTitle } from '../styled-components/SubTitle';




function AppCoz() {
  return (
    <>     
      <MainTitleCoz>{'PIZZATE'}</MainTitleCoz>
      <SubTitle>(Cozinha)</SubTitle>
      <Container>
        <ColunaContainer>
        <PedidosCoz>
            <PedidosTitle>#243K</PedidosTitle>
            <Lista>3 Bruschettas</Lista>
            <Lista>3 Bruschettas</Lista>
            <Lista>3 Bruschettas</Lista>
          </PedidosCoz>
          <PedidosCoz>
            <PedidosTitle>#843B</PedidosTitle>
            <Lista>1/2 Marguerita</Lista>
            <Lista>1/2 Zucchini</Lista>
            <Lista>2 Bruschettas</Lista>
          </PedidosCoz>
        </ColunaContainer>         
          <ColunaContainer>
          <PedidosCoz>
            <PedidosTitle>#103B</PedidosTitle>
            <Lista>1 Bruschettas</Lista>
            <Lista>2 Crostini</Lista>
            <Lista>1/2 Pepperoni</Lista>
            <Lista>1/2 Vegetariana</Lista>
            <Lista>1 Lombo</Lista>
            <Lista>1 Chocolate e banana</Lista>
            <Lista>1 Brigadeiro</Lista>
            <Lista>1 Brigadeiro</Lista>            
          </PedidosCoz>
          </ColunaContainer>
          <ColunaContainer>
          <PedidosCoz>
            <PedidosTitle>#243B</PedidosTitle>
            <Lista>4 Grissini</Lista>
            <Lista>1 Lombo</Lista>          
          </PedidosCoz>
          <PedidosCoz>
            <PedidosTitle>#843B</PedidosTitle>
            <Lista>3 Bruschettas</Lista>
            <Lista>1 Marguerita</Lista>
            <Lista>2 Calabresa</Lista>
            <Lista>1 Chocolate e morango</Lista>
          </PedidosCoz>
          </ColunaContainer>
          <ColunaContainer>
          <PedidosCoz>
            <PedidosTitle>#543B</PedidosTitle>
            <Lista>1 Bruschettas</Lista>
            <Lista>1 Catupiry</Lista>
            <Lista>1 Pepperoni</Lista>
            <Lista>1/2 Marguerita</Lista>
          </PedidosCoz>
          <PedidosCoz>
            <PedidosTitle>#843B</PedidosTitle>
            <Lista>1/2 Marguerita</Lista>
            <Lista>1/2 Atum</Lista> 
          </PedidosCoz>
          </ColunaContainer>
        </Container>
    </>
  )
}

export default AppCoz; 

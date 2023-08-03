import '../pages/tela_codigo.css';
import { MainTitle, CodeInput, CodeButton } from '../styled-components/Text';
import { DataDiv, HeaderContainer, Container } from '../styled-components/container';

import raminho from '../images/raminho.png'
import { ImgTop, ImgBot } from '../styled-components/image';

function Tela_Codigo() {
  return (  
    <>
    <HeaderContainer>
      <ImgTop src={raminho} alt={raminho}/>
      <MainTitle>PIZZATE</MainTitle>
    </HeaderContainer>

      <DataDiv>
        <CodeInput type='text' placeholder='Código'></CodeInput>
        <CodeButton>Entrar</CodeButton>
      </DataDiv>

      <ImgBot src={raminho} alt={raminho}/>

    </>
  );
}

export default Tela_Codigo;

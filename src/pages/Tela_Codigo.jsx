import '../pages/Tela_Codigo.css';
import { MainTitle, CodeInput, CodeButton } from '../styled-components/Text';
import { DataDiv, HeaderContainer, Container } from '../styled-components/container';

import raminho from '../images/raminho.png'
import { ImgTop, ImgBot } from '../styled-components/image';

function TelaCodigo() {
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

export default TelaCodigo;

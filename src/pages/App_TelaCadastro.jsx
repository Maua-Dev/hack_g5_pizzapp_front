import './App_TelaCadastro.css';
import { MainTitle, InputData, SignUpBut } from '../styled components/text';
import { InputContainerTC, HeaderContainer, FooterContainer } from '../styled components/container';
import { ImgTop, ImgBot } from '../styled components/image';

import raminho from '../images/raminho (1).png'

function TelaCadastro() {
  return (
  <>
    <HeaderContainer>
      <ImgTop src={raminho} alt={raminho}/>
      <MainTitle>PIZZATE</MainTitle>
    </HeaderContainer>

    <InputContainerTC>
      <InputData type="text" className='IconInput' placeholder='Nome Completo'></InputData>
      <InputData type="email" placeholder='E-mail'></InputData>
      <InputData type="text" placeholder='Código'></InputData>
      <InputData type="password" placeholder='Senha'></InputData>
      <InputData type="password" placeholder='Confirme sua senha'></InputData>
    </InputContainerTC>

    <FooterContainer>
      <SignUpBut>Cadastrar</SignUpBut>
      <ImgBot src={raminho} alt={raminho}/>
    </FooterContainer>

  </>  
  );
}

export default TelaCadastro;

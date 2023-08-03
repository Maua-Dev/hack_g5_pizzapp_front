import styled from 'styled-components'

const MainTitle = styled.h1`
    font-weight: normal;
    font-family: Yeseva One;
    font-size: 120px;
    margin-top: 130px;
    margin-left: 210px;
`

const CodeInput = styled.input`
    background-color: #90A74CC9;
    width: 600px;
    height: 55px;
    border-radius: 10px;
    font-family: Sumana Regular;
    font-size: 30px;
    font-weight: 650;
    box-shadow: 2px 3px #00000052;
    margin-bottom: 30px;
`

const CodeButton = styled.button`
    display: inline;
    background-color:#D3B786; 
    width: 400px;
    height: 65px;
    border-radius: 10px;
    font-family: Sumana Regular;
    font-weight: 650;
    box-shadow: 2px 3px #00000052;
    margin-left: 100px;
    font-size: 30px;
    line-height: 1;

`

export { MainTitle, CodeInput, CodeButton }
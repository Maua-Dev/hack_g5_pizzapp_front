import styled from 'styled-components'

const MainTitle = styled.h1`
    font-weight: normal;
    font-family: Yeseva One;
    font-size: 70px;
    display: inline-block;
`

const InputUser = styled.input`
    text-align: left;
    font-weight: lighter;
    height: 50%;
    width: 300px;
    font-family: Sumana Regular;
    background-color:#90A74CC9;
    margin-bottom: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 3px #6d6d6db7;
`

const LogUserBut = styled.button`
    background-color:#D3B786;
    height: 25px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px; 
    border: none;
    box-shadow: 1px 2px #6d6d6db7;
`

export { MainTitle, InputUser, LogUserBut }
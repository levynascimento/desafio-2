import styled from 'styled-components'

const ButtonFiltro = styled.button`
  font-weight: bold;
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.textButtonColor};
  border: none;
  padding: 15px 30px;
  border-radius: 35px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: 0.5s;
  text-align: center;


  :hover {
    background-color: #4DAD9C;
  }
`

export default ButtonFiltro
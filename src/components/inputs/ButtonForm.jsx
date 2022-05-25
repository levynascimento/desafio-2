import styled from 'styled-components'

const ButtonForm = styled.button`
  font-weight: bold;
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.textButtonColor};
  border: none;
  padding: 15px 30px;
  border-radius: 35px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  transition: 0.5s;
  text-align: center;

  ${props => !props.disabled && 'cursor: pointer;'}; 


  :hover {
    background-color: #4DAD9C;
  }

  :disabled {
    background-color: ${props => props.theme.disabled};
  }
`

export default ButtonForm
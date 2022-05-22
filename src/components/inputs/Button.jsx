import styled from 'styled-components'

const Button = styled.button`
  font-weight: bold;
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.textButtonColor};
  border: none;
  padding: 15px 100px;
  border-radius: 35px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: 0.5s;


  :hover {
    background-color: #4DAD9C;
  }
`

export default Button
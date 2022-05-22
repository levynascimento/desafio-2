import styled from 'styled-components'

const InputContainer = styled.div`

`

const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 25px;

`

const StyledInput = styled.input`
  width: 350px;
  background-color: ${ props => props.theme.white};
  padding: 15px 20px ;
  box-sizing: border-box;
  border-radius: 40px;
  border: none;
  font-size: 20px
`

function Input ({ label, ...props }) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder = {label} {...props} />
    </InputContainer>
  )
}

export default Input
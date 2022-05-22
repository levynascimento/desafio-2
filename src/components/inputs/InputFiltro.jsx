import styled from 'styled-components'

const InputContainer = styled.div`

`

const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 25px;

`

const StyledInput = styled.input`
  width: 500px;
  background-color: ${ props => props.theme.white};
  padding: 15px 20px ;
  box-sizing: border-box;
  border-radius: 40px;
  border: none;
  font-size: 20px
`

function InputFiltro ({ label, ...props }) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput  {...props} />
    </InputContainer>
  )
}

export default InputFiltro
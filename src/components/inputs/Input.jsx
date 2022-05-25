import styled from 'styled-components'
import { useController } from 'react-hook-form'

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
  font-size: 20px;

  ${props => props.error && `border: 2px solid ${props => props.theme.error};` }

  &:focus {
    outline: none;
  }
`

const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: bold;
  font-size: 14px;
`

const errorMessage = {
  'strign.empty': 'Este campo não pode ficar em branco',
  'string.placa': 'Coloque uma placa válida, por favor.',

}

const Input = ({ label, name, control, dafaultValue = '', ...props }, ref) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, dafaultValue })

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder = {label} error={error} {...props}  value = {value} onChange = {onChange} />
      { error && <ErrorLabel> {errorMessage[error.type] || error.message} </ErrorLabel>}
    </InputContainer>
  )
}

export default Input
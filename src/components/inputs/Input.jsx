import styled from 'styled-components'
import { useController } from 'react-hook-form'


const InputContainer = styled.div`

`

const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 25px;

`

const StyledInput = styled.input`
  display: block;
  width: 350px;
  background-color: ${ props => props.theme.white};
  padding: 15px 20px ;
  box-sizing: border-box;
  border-radius: 40px;
  border: 1px solid ${props => props.theme.black};
  font-size: 20px;

  ${ props => props.error && `border: 2px solid ${props.theme.error};`}

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
  'string.empty': 'Este campo é obrigatório.',
  'number.base': 'Este campo é obrigatório.',
  'number.min': 'O Ano precisa ser maior que 1884.',
  'number.max': 'O Ano pode ser até 2022.',
  'string.min': 'A placa precisa ter 7 caracteres.',
  'string.max': 'A placa precisa ter 7 caracteres.'
}

const Input = ({ label, name, control, defaultValue = '',...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder = {label} error={error} {...props} value = {value} onChange = {onChange} />
      { error && <ErrorLabel> {errorMessage[error.type] || error.message} </ErrorLabel>}
    </InputContainer>
  )
}

export default Input
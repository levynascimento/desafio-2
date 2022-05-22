import styled from 'styled-components'

const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  
`

const StyledFormChildren = styled.div`
  max-width: 600px;
  width: 100%;
`


const ContainerForm = ({children}) => {
  return (
    <StyledFormContainer>
      <StyledFormChildren>
        {children}
      </StyledFormChildren>      
    </StyledFormContainer>
  )
}

export default ContainerForm
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledChildren = styled.div`
  max-width: 900px;
  width: 100%;
`


const Container = ({children}) => {
  return (
    <StyledContainer>
      <StyledChildren>
        {children}
      </StyledChildren>      
    </StyledContainer>
  )
}

export default Container
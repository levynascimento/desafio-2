import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledChildren = styled.div`
  max-width: 900px;
  width: 100%;

  @media (max-width: 388px) {
    max-width: 1000px;
    width: 140%
  }
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
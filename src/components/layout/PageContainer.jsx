import styled from 'styled-components'

const PageContainer = styled.div`
  background-color: ${props => props.theme.white};
  height: 100vh;

  @media (max-width: 1050px) {
    height: 135vh
  }
`

export default PageContainer
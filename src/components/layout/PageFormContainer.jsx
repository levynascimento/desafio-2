import styled from 'styled-components'

const PageFormContainer = styled.div`
  background-color: ${props => props.theme.pageBackground};
  height: 105vh

  @media (max-width: 1024px) {
    height: 110vh
  }
`

export default PageFormContainer
import styled from 'styled-components'

import Menu from '../navigation/Menu'


const CardContainer = styled.div`
  background-color: ${props => props.theme.backgroundCardColor};
  width: 250px;
  height: 250px;
  margin-bottom: 15px
`

const TesteContainer = styled.div`
  font-size: 20px;
  padding: 70px 0 0 15px;

`

const ContainerMenu = styled.div`
  float: right;
`

function Card () {
  return (
      <CardContainer>
        <ContainerMenu>
          <Menu />
        </ContainerMenu>
        <TesteContainer>
          teste
        </TesteContainer>
        
      </CardContainer>
  )

}

export default Card
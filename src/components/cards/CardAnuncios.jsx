import styled from 'styled-components'

import MenuAnuncios from '../navigation/MenuAnuncios'


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

function CardAnuncios () {
  return (
      <CardContainer>
        <ContainerMenu>
          <MenuAnuncios />
        </ContainerMenu>
        <TesteContainer>
          teste
        </TesteContainer>
        
      </CardContainer>
  )

}

export default CardAnuncios
import styled from 'styled-components'

import MenuFavorito from '../navigation/MenuFavorito'


const CardContainer = styled.div`
  background-color: ${props => props.theme.backgroundCardColor};
  width: 250px;
  height: 250px;
  margin-bottom: 15px
`

const TesteContainer = styled.div`
  display: block;
  flex-direction: column;
  font-size: 18px;
  padding: 70px 0 0 15px;

`

const ContainerMenu = styled.div`
  float: right;
`

function CardFavorito ({nome, marca, cor, ano, placa, id}) {
  return (
      <CardContainer>
        <ContainerMenu>
          <MenuFavorito />
        </ContainerMenu>
        <TesteContainer>
          <p> Nome: {nome} </p>
          <p> Marca: {marca} </p>
          <p> Cor: {cor} </p>
          <p> Ano: {ano} </p>
          <p> Placa: {placa} </p>
        </TesteContainer>
        
      </CardContainer>
  )

}

export default CardFavorito
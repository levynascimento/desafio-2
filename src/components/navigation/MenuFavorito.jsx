import styled from 'styled-components'

const Delete = styled.img`
  cursor: pointer
`

const HeartMinus = styled.img`
  cursor: pointer
`

const ContainerMenu = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  gap: 7px
`

function MenuFavorito () {
  return (
    <ContainerMenu>
      <Delete src = "/delete.svg" height = "30px" />
      <HeartMinus src = "/heart-minus.svg" height = "30px" />
    </ContainerMenu>
    
  )
}

export default MenuFavorito
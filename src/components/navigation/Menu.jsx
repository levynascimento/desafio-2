import styled from 'styled-components'


const Delete = styled.img`
  cursor: pointer
`

const Heart = styled.img`
  cursor: pointer
`

const Edit = styled.img`
  cursor: pointer
`

const ContainerMenu = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  gap: 7px
`

function Menu ({onClick}) {
  return (
      <ContainerMenu>
        <Edit src = "/edit.svg" height = "30px" />
        <Delete src = "/delete.svg" height = "30px" onClick={onClick} />
        <Heart src = "/heart.svg" height = "30px" />
      </ContainerMenu>
  )
}

export default Menu 
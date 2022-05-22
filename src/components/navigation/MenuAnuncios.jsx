import styled from 'styled-components'
import { useRouter } from 'next/router'

const Delete = styled.img`
  cursor: pointer
`

const Heart = styled.img`
  cursor: pointer
`

const ContainerMenu = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  gap: 7px
`

function MenuAnuncios () {

  const router = useRouter()

  const handleClickFavorito = () => {
    router.push('/pagefavorito')
  }
  
  return (
    <ContainerMenu>
      <Delete src = "/delete.svg" height = "30px" />
      <Heart src = "/heart.svg" height = "30px" onClick = {handleClickFavorito} />
    </ContainerMenu>
    
  )
}

export default MenuAnuncios
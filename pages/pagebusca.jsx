import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { BsSliders } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"
import { useRouter } from 'next/router'

import Button from '../src/components/inputs/Button'
import Search from '../src/components/inputs/Search'
import Slider from '../src/components/icons/Slider'
import PageContainer from '../src/components/layout/PageContainer'
import Container from '../src/components/layout/Container'
import CardAnuncios from '../src/components/cards/CardAnuncios'

const ArrowContainer = styled.div`
  padding: 0px 0 30px 130px;
  cursor: pointer
`

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: center;
  margin-top: 40px;
`

const MeuAnuncio = styled.h1`
  font-weight: bold;
  font-size: 25px
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 20px 0;
  align-items: center;
  gap: 10px;
`

const AnuncioContainer = styled.div`
  text-align: center;
  margin-top: 100px
`

const PageBusca = () => {

  const router = useRouter()

  const handleClickFiltroBusca = () => {
    router.push('/pagefiltro')
  }

  const handleClickIndex = () => {
    router.push('/')
  }

  return(
    <Container>
      <PageContainer>
        <DivContainer>
          <ArrowContainer>
            <BsArrowLeft size = '35' onClick = {handleClickIndex} />
          </ArrowContainer>
          <SearchContainer>
            <Search />
            <Slider>
              <BsSliders size = '25' onClick = {handleClickFiltroBusca} />
            </Slider>  
          </SearchContainer>
        </DivContainer>
        <ButtonContainer>
          <Button>ADICIONAR</Button>
        </ButtonContainer> 
        <AnuncioContainer>
          <MeuAnuncio> Anúncios </MeuAnuncio>
        </AnuncioContainer>
        <CardContainer>
            <CardAnuncios />
            <CardAnuncios />
            <CardAnuncios />
            <CardAnuncios />
            <CardAnuncios />
            <CardAnuncios />
            <CardAnuncios />
            <CardAnuncios />
            <CardAnuncios />
        </CardContainer> 
      </PageContainer> 
    </Container>
  )
}

export default PageBusca
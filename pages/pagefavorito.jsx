import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { BsSliders } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"

import Button from '../src/components/inputs/Button'
import Search from '../src/components/inputs/Search'
import Slider from '../src/components/icons/Slider'
import Container from '../src/components/layout/Container'
import Card from '../src/components/cards/Card'
import CardFavorito from '../src/components/cards/CardFavorito'

const ArrowContainer = styled.div`
  padding: 40px 0 30px 130px;
  cursor: pointer
`

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

`

const PageContainer = styled.div`
  background-color: ${props => props.theme.white};
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 556px) {
    height: 100vh;
    overflow-y: auto
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 390px) {
    padding-left: 60px
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 388px) {
    padding-left: 80px
  }

  @media (max-width: 320px) {
    padding-left: 80px
  }
`

const MeuAnuncio = styled.h1`
  font-weight: bold;
  font-size: 25px
`

const MeuAnuncioContainer = styled.div`
  text-align: center;
  margin-top: 100px;

  @media (max-width: 390px) {
    padding-left: 80px
  }
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 120px 20px 120px;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 0px 100px 20px 100px;
  }

  @media (max-width: 730px) {
    padding: 0px 50px 20px 70px;
  }

  @media (max-width: 388px) {
    padding: 0px 30px 20px 100px;
  }

  @media (max-width: 340px) {
    padding: 0px 40px 20px 100px;
  }
`

const AnuncioContainer = styled.div`
  text-align: center;
  margin-top: 100px
`

const PageAnuncio = () => {
  return(
    <Container>
      <PageContainer>
        <DivContainer>
          <ArrowContainer>
            <BsArrowLeft size = '35'/>
          </ArrowContainer>
          <SearchContainer>
            <Search />
            <Slider>
              <BsSliders size = '25' />
            </Slider>  
          </SearchContainer>
        </DivContainer>
        <ButtonContainer>
          <Button>ADICIONAR</Button>
        </ButtonContainer> 
        <MeuAnuncioContainer>
          <MeuAnuncio> Favoritos </MeuAnuncio>
        </MeuAnuncioContainer>
        <CardContainer>
          <CardFavorito />
          <CardFavorito />
        </CardContainer>
        <AnuncioContainer>
          <MeuAnuncio> Anúncios </MeuAnuncio>
        </AnuncioContainer>
        <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardContainer> 
      </PageContainer> 
    </Container>
  )
}

export default PageAnuncio
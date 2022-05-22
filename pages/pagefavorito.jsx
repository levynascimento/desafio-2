import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { BsSliders } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"

import Button from '../src/components/inputs/Button'
import Search from '../src/components/inputs/Search'
import Slider from '../src/components/icons/Slider'
import PageContainer from '../src/components/layout/PageContainer'
import Container from '../src/components/layout/Container'
import ButtonContainer from '../src/components/layout/ButtonContainer'
import Card from '../src/components/cards/Card'
import CardFavorito from '../src/components/cards/CardFavorito'

const ArrowContainer = styled.div`
  padding: 40px 0 30px 130px;
`

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center

`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: center;
  margin-top: 40px
`

const MeuAnuncio = styled.h1`
  font-weight: bold;
  font-size: 25px
`

const MeuAnuncioContainer = styled.div`
  text-align: center;
  margin-top: 100px
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0 20px 125px;
  align-items: center;
  gap: 10px;
  position: relative
`

const Lupa = styled.div`
  position: absolute;
  left: 140px;
  top: 11px
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
            <Lupa>
              <AiOutlineSearch size = '25' />
            </Lupa>
            <Search placeholder = "Buscar" rows = "1" />
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
import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { BsSliders } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"
import { useRouter } from 'next/router'

import Button from '../src/components/inputs/Button'
import PageContainer from '../src/components/layout/PageContainer'
import Search from '../src/components/inputs/Search'
import Slider from '../src/components/icons/Slider'
import Container from '../src/components/layout/Container'
import ButtonContainer from '../src/components/layout/ButtonContainer'
import Card from '../src/components/cards/Card'

const ArrowContainer = styled.div`
  padding: 40px 0 30px 130px;
  cursor: pointer
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

const PageAnuncio = () => {

  const router = useRouter()

  const handleClickFiltro = () => {
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
            <Lupa>
              <AiOutlineSearch size = '25' />
            </Lupa>
            <Search placeholder = "Buscar" rows = "1" />
            <Slider>
              <BsSliders size = '25' onClick = {handleClickFiltro} />
            </Slider>  
          </SearchContainer>
        </DivContainer>
        <ButtonContainer>
          <Button>ADICIONAR</Button>
        </ButtonContainer> 
        <MeuAnuncioContainer>
          <MeuAnuncio> Meus Anúncios </MeuAnuncio>
        </MeuAnuncioContainer>
        <CardContainer>
          <Card />
          <Card />
        </CardContainer> 
      </PageContainer> 
    </Container>
  )
}

export default PageAnuncio
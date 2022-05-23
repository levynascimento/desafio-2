import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { BsSliders } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"
import { useRouter } from 'next/router'

import Button from '../src/components/inputs/Button'
import Search from '../src/components/inputs/Search'
import Slider from '../src/components/icons/Slider'
import Container from '../src/components/layout/Container'
import Card from '../src/components/cards/Card'

const ArrowContainer = styled.div`
  padding: 40px 0 30px 130px;
  cursor: pointer;
  
`

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 388px) {
    padding-left: 80px
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  padding: 0 10px;

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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 390px) {
    padding-left: 80px
  }
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 20px 20px 20px;
  align-items: center;
  gap: 10px;
  position: relative;

  @media (max-width: 400px) {
    padding: 0px 100px 20px 100px;
  }

  @media (max-width: 388px) {
    padding: 0px 30px 20px 100px;
  }

  @media (max-width: 340px) {
    padding: 0px 40px 20px 100px;
  }

 
`

const Lupa = styled.div`
  position: absolute;
  left: 140px;
  top: 11px
`

const PageContainer = styled.div`
  background-color: ${props => props.theme.white};
  height: 100vh;

  @media (max-width: 556px) {
    height: 100vh;
    overflow-y: auto
  }
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
           <Search />
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
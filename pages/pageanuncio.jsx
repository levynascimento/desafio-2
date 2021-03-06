import styled from 'styled-components'
import { BsSliders } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'

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
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  padding: 0 10px;


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

`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 20px 0;
  align-items: center;
  gap: 10px;
 
`

const PageContainer = styled.div`
  background-color: ${props => props.theme.white};
  min-height: 100vh;
  height: 100%

`

const fetcher = url => axios.get(url).then(res => res.data)

const PageAnuncio = () => {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`, fetcher)

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
          <MeuAnuncio> Meus An??ncios </MeuAnuncio>
        </MeuAnuncioContainer>
        <CardContainer>
        {
              data?.map(vehicles => 
                <Card 
                  key = {vehicles._id}
                  nome = {vehicles.Nome}
                  marca = {vehicles.Marca}
                  cor = {vehicles.Cor}
                  ano = {vehicles.Ano}
                  placa = {vehicles.Placa}
                  id = {vehicles._id}
                />

              )
            }
        </CardContainer> 
      </PageContainer> 
    </Container>
  )
}

export default PageAnuncio
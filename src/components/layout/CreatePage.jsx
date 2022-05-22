import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { BsSliders } from "react-icons/bs"
import { useRouter } from 'next/router'

import Button from '../inputs/Button'
import Search from '../inputs/Search'
import Slider from '../icons/Slider'
import PageContainer from './PageContainer'
import ButtonContainer from './ButtonContainer'

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 110px 12px 20px 0;
  align-items: center;
  gap: 10px;
  position: relative
`
const Lupa = styled.div`
  position: absolute;
  left: 142px;
  top: 120px
`


const CreatePage = () => {

  const router = useRouter()

  const handleClickFiltro = () => {
    router.push('/pagefiltro')
  }

  const handleClickForm = () => {
    router.push('/pageform')
  }


  return (
    <PageContainer>
      <SearchContainer>
        <Lupa>
          <AiOutlineSearch size = '25' />
        </Lupa>
        <Search placeholder = "Buscar"  rows = "1" />
        <Slider>
          <BsSliders size = '25' onClick ={handleClickFiltro} /> 
        </Slider>
      </SearchContainer>
      <ButtonContainer>
        <Button onClick = {handleClickForm} >ADICIONAR VEÍCULO</Button>
      </ButtonContainer>  
    </PageContainer>
  )
}

export default CreatePage
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
  padding: 0 0 20px 0;
  align-items: center;
  gap: 10px;
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
        <Search />
        <Slider>
          <BsSliders size = '25' onClick ={handleClickFiltro} /> 
        </Slider>
      </SearchContainer>
      <ButtonContainer>
        <Button onClick = {handleClickForm} >ADICIONAR</Button>
      </ButtonContainer> 
    </PageContainer>
  )
}

export default CreatePage
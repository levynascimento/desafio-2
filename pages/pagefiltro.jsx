import styled from 'styled-components'
import { BsArrowLeft } from "react-icons/bs"
import { useRouter } from 'next/router'

import ContainerForm from '../src/components/layout/ContainerForm'
import Container from '../src/components/layout/Container'
import PageContainer from '../src/components/layout/PageContainer'
import PageFormContainerFiltro from '../src/components/layout/PageFormContainerFiltro'
import ButtonFiltro from '../src/components/inputs/ButtonFiltro'
import InputFiltro from '../src/components/inputs/InputFiltro'
import InputPreco from '../src/components/inputs/InputPreço'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 80px; 
  gap: 20px;
  margin-top: 15px
`

const BackgroundFormContainer = styled.div`
  padding-right: 60px
`

const ButtonContainer = styled.div`
  margin-left: 370px;
  margin-top: 80px
`

const ArrowContainer = styled.div`
  cursor: pointer
`

const Divmain = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 80px 0;
  gap: 80px
  
`

const InputLinha = styled.div`
  display: flex;
  gap: 60px
`




const PageForm = () => {

  const router = useRouter()

  const handleClickButtonFiltroSave = () => {
    router.push('/pagebusca')
  }

  const handleClickArrow = () => {
    router.push('/')
  }


  return (
    <>
      <Container> 
        <PageContainer> 
          <ContainerForm>
            <Divmain>
              <ArrowContainer>
                <BsArrowLeft size = '35' onClick = {handleClickArrow} />
              </ArrowContainer> 
                <BackgroundFormContainer>
                  <PageFormContainerFiltro> 
                    <Form>
                      <InputFiltro label = "Marca:"/>
                      <InputFiltro label = "Cor:"/>
                      <InputFiltro label = "Ano:"/>
                      <InputLinha>
                        <InputPreco label = "Preço min." />
                        <InputPreco label = "Preço máx." />
                      </InputLinha>
                      <ButtonContainer>
                        <ButtonFiltro onClick = {handleClickButtonFiltroSave} > SALVAR </ButtonFiltro>
                      </ButtonContainer>   
                    </Form>    
                  </PageFormContainerFiltro> 
                </BackgroundFormContainer>
              </Divmain>  
          </ContainerForm>  
        </PageContainer>
      </Container>
    </>
  )
}

export default PageForm
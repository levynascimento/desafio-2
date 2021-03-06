import styled from 'styled-components'
import { BsArrowLeft } from "react-icons/bs"
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'

import { postSchema } from '../modules/post/vehicles.schema'

import ContainerForm from '../src/components/layout/ContainerForm'
import Container from '../src/components/layout/Container'
import PageContainer from '../src/components/layout/PageContainer'
import PageFormContainer from '../src/components/layout/PageFormContainer'
import ButtonForm from '../src/components/inputs/ButtonForm'
import Input from '../src/components/inputs/Input'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 80px; 
  gap: 20px;
  margin-top: 15px
`

const BackgroundFormContainer = styled.div`
  
`

const ButtonContainer = styled.div`
  margin-left: 300px;
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




const PageForm = () => {

  const { control, handleSubmit,  formState: { errors }, setError} = useForm({
    resolver: joiResolver(postSchema)
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`, data)
      if (status === 201) {
        router.push('/pageanuncio')
      }
    } catch (err) {
      if (err.response.data.code === 11000) {
        setError(err.response.data.duplicatedKey, {
          type: 'duplicated'
        })
      }
    }
  }

  const router = useRouter()

  const handleClickArrowForm = () => {
    router.push('/')
  }
  

  return (
    <>
      <Container> 
        <PageContainer> 
          <ContainerForm>
            <Divmain>
              <ArrowContainer>
                <BsArrowLeft size = '35' onClick = {handleClickArrowForm} />
              </ArrowContainer> 
                <BackgroundFormContainer>
                  <PageFormContainer> 
                    <Form onSubmit = {handleSubmit(handleForm)} >
                      <Input label = "Nome" name = "Nome" control = {control} />
                      <Input label = "Marca" name = "Marca" control = {control} />
                      <Input label = "Cor" name = "Cor" control = {control} />
                      <Input label = "Ano" name = "Ano" control = {control} />
                      <Input label = "Placa" name = "Placa" control = {control} />
                      <ButtonContainer>
                        <ButtonForm type = "submit" disabled = {Object.keys(errors).length > 0} > SALVAR </ButtonForm>
                      </ButtonContainer>   
                    </Form>    
                  </PageFormContainer> 
                </BackgroundFormContainer>
              </Divmain>  
          </ContainerForm>  
        </PageContainer>
      </Container>
    </>
  )
}

export default PageForm
import styled from 'styled-components'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import Menu from '../navigation/Menu'


const CardContainer = styled.div`
  background-color: ${props => props.theme.backgroundCardColor};
  width: 250px;
  height: 250px;
  margin-bottom: 15px
`

const TesteContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 70px 0 0 15px;

`

const ContainerMenu = styled.div`
  float: right;
`

function Card ({nome, marca, cor, ano, placa, id}) {
  const { mutate } = useSWRConfig()

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`, {
        data: {
          id
        }
      })
      if(response.status === 200) 
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/vehicles`)
    } catch(err) {
      console.error(err)
    }
  }
  return (
      <CardContainer>
        <ContainerMenu>
          <Menu onClick = {handleDelete}/>
        </ContainerMenu>
        <TesteContainer>
          <p> Nome: {nome}</p>
          <p> Marca: {marca} </p>
          <p> Cor: {cor} </p>
          <p> Ano: {ano} </p>
          <p> Placa: {placa} </p>
        </TesteContainer>
        
      </CardContainer>
  )

}

export default Card
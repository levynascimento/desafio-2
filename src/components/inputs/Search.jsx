import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"


const StyledSearch = styled.input`
  resize: none;
  width: 600px;
  padding: 10px 50px;
  box-sizing: border-box;
  background-color: ${props => props.theme.searchColor};
  border: 1px solid ${props => props.theme.searchColor};
  border-radius: 35px;
  border: none;
  transition: 0.5s;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  


  :hover {
    background-color: #B1DDD6;
  }
`

const ContainerStyledSearch = styled.div`
  position: relative
`

const Lupa = styled.div`
  position: absolute;
  left: 15px;
  top: 10px
`


const Search = () => {

  return (
    <ContainerStyledSearch>
        <Lupa>
          <AiOutlineSearch size = '25' />
        </Lupa>
        <StyledSearch placeholder = "Buscar" rows = "1" />
    </ContainerStyledSearch>
  )
}

export default Search
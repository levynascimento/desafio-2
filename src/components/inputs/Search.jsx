import styled from 'styled-components'

const Search = styled.input`
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

`





export default Search
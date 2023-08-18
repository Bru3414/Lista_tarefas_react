import styled from 'styled-components'

export const Aside = styled.aside`
  height: 100vh;
  padding: 16px;
  background-color: #eee;

  @media (max-width: 767px) {
    display: block;

    max-width: 116px;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;

  @media (max-width: 767px) {
    display: block;
  }
`

import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;

  @media (max-width: 767px) {
    display: block;
    margin-bottom: 8px;
  }
`

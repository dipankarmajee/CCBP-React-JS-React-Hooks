import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const CreditCardContainer = styled(MainContainer)`
  flex-direction: column;
  width: 50vw;
  background-color: #344e7a;
  padding: 10px;
`

export const InputContainer = styled(CreditCardContainer)`
  background-color: #ffffff;
`
export const CreditCardImage = styled(MainContainer)`
  width: 90%;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  color: #ffffff;
  min-height: 350px;
  border-radius: 8px;
  justify-content: space-evenly;
  flex-direction: column;
`
export const InputCard = styled(CreditCardImage)`
  background-image: none;
  background-color: #ffffff;
  box-shadow: 0 4px 16px 0 #bfbfbfbf;
  color: black;
  padding: 10px;
  flex-direction: column;
  justify-content: space-evenly;
`
export const InputElement = styled.input`
  height: 40px;
  width: 80%;
  font-family: Roboto;
  border-radius: 8px;
`

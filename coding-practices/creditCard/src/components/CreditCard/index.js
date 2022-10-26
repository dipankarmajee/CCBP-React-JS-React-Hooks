import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  InputContainer,
  CreditCardImage,
  InputCard,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeCardHolderName = event => {
    setCardHolderName(event.target.value)
  }
  return (
    <MainContainer>
      <CreditCardContainer>
        <h1>CREDIT CARD</h1>
        <CreditCardImage data-testid="creditCard">
          <p>{cardNumber}</p>
          <p>CARDHOLDER NAME</p>
          <p>{cardHolderName.toUpperCase()}</p>
        </CreditCardImage>
      </CreditCardContainer>
      <InputContainer>
        <InputCard>
          <h2>Payment Method</h2>
          <InputElement
            type="text"
            value={cardNumber}
            onChange={onChangeCardNumber}
            placeholder="Card Number"
          />
          <InputElement
            type="text"
            value={cardHolderName}
            onChange={onChangeCardHolderName}
            placeholder="Cardholder Name"
          />
        </InputCard>
      </InputContainer>
    </MainContainer>
  )
}

export default CreditCard

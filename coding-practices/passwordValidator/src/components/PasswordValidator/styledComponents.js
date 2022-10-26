import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #24263c;
  font-family: Roboto;
`
export const Card = styled(MainContainer)`
  flex-direction: column;
  min-height: fit-content;
  background-color: #383a4e;
  border-radius: 4px;
`
export const Heading = styled.h2`
  font-family: Roboto;
  color: #ffffff;
  font-size: 24px;
`

export const Paragraph = styled.p`
  color: #f8fafc;
  font-family: Roboto;
  font-size: 14px;
`

export const Input = styled.input`
  outline: none;
  border-radius: 4px;
  width: 100%;
  height: 30px;
`
export const ErrorText = styled(Paragraph)`
  color: #ef4444;
  font-family: Roboto;
  font-size: 12px;
`

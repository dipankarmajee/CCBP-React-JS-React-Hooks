import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  font-family: Roboto;
`
export const Heading = styled.h2`
  font-family: Bree Serif;
  color: #4c63b6;
  font-size: 22px;
  text-align: center;
`
export const Form = styled.form``

export const NoteCard = styled(MainContainer)`
  min-height: fit-content;
  padding: 15px;
  box-shadow: 0 4px 16px 0 #bfbfbf;
  width: 60vw;
  border-radius: 4px;
  margin-bottom: 10px;
`
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 0;
  margin-bottom: 20px;
  max-width: 100%;
`
export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: 0;
  max-width: 100%;
  margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  min-height: fit-content;
  padding: 0 20px 20px 0;
  width: 100%;
`

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border-width: 0;
  background-color: #4c63b6;
  color: #ffffff;
  font-family: Roboto;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  text-align: right;
`
export const UnorderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  width: fit-content;
  margin: 0;
  padding: 0;
`

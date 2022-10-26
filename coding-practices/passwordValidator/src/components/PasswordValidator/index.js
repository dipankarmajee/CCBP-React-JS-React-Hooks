import {useState} from 'react'
import {
  MainContainer,
  Card,
  Heading,
  Paragraph,
  Input,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordText, setPasswordText] = useState('')
  const onChnagePasswordd = event => {
    setPasswordText(event.target.value)
  }
  return (
    <MainContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input
          type="password"
          value={passwordText}
          onChange={onChnagePasswordd}
        />
        {passwordText.length < 8 && (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </Card>
    </MainContainer>
  )
}

export default PasswordValidator

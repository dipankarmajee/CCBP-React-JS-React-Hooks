import {useState} from 'react'

import {MainDiv, Image, Button, Heading} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [moreText, setMoreText] = useState(false)
  const onClickRead = () => {
    setMoreText(prevText => !prevText)
  }
  return (
    <MainDiv>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <p>
        {moreText ? reactHooksDescription : reactHooksDescription.slice(0, 170)}
      </p>
      <Button type="button" onClick={onClickRead}>
        {moreText ? 'Read Less' : 'Read More'}
      </Button>
    </MainDiv>
  )
}

export default ReadMore

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentName] = useState('')
  const [commentList, setCommentList] = useState([])
  const onSubmitForm = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(prevCommentList => [...prevCommentList, newComment])
    setName('')
    setCommentName('')
  }

  const onChangeName = event => setName(event.target.value)
  const onChangeCommentText = event => setCommentName(event.target.value)

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitForm}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {/* <CommentItem commentDetails={comment} /> */}
      {commentList.map(eachComment => (
        <CommentItem key={eachComment.id} commentDetails={eachComment} />
      ))}
    </CommentsContainer>
  )
}

export default Comments

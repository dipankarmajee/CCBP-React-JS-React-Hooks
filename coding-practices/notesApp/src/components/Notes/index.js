import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  Heading,
  Form,
  NoteCard,
  Input,
  TextArea,
  ButtonContainer,
  Button,
  UnorderList,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [titleText, setTitleText] = useState('')
  const [noteText, setNoteText] = useState('')
  const [noteItems, setNoteItems] = useState([])

  const onChangeTitle = event => {
    setTitleText(event.target.value)
  }

  const onChangeNote = event => {
    setNoteText(event.target.value)
  }

  const onSubmitAddNote = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title: titleText,
      note: noteText,
    }
    setNoteItems(prevNoteList => [...prevNoteList, newNotes])
    setTitleText('')
    setNoteText('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onSubmitAddNote}>
        <NoteCard>
          <Input
            type="text"
            value={titleText}
            placeholder="Title"
            onChange={onChangeTitle}
          />
          <TextArea
            type="text"
            value={noteText}
            placeholder="Take a Note..."
            row="6"
            onChange={onChangeNote}
          />
          <ButtonContainer>
            <Button type="submit">Add</Button>
          </ButtonContainer>
        </NoteCard>
      </Form>
      {noteItems.length === 0 && (
        <>
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h3>No Notes Yet</h3>
          <p>Notes you add will appear here</p>
        </>
      )}
      <UnorderList>
        {noteItems.map(eachNote => (
          <NoteItem
            NoteItemsList={eachNote}
            key={eachNote.id}
            noteItems={noteItems}
          />
        ))}
      </UnorderList>
    </MainContainer>
  )
}

export default Notes

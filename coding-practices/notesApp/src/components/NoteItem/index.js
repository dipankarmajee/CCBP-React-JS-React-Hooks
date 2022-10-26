import {
  NoteItemMainContainer,
  List,
  NoteItemHeading,
  NoteItemParagraph,
} from './styledComponents'

const NoteItem = props => {
  const {NoteItemsList, noteItems} = props
  const {title, note} = NoteItemsList
  console.log(noteItems)
  return (
    <>
      <List>
        <NoteItemHeading>{title}</NoteItemHeading>
        <NoteItemParagraph>{note}</NoteItemParagraph>
      </List>
    </>
  )
}

export default NoteItem

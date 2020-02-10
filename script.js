function q(value){
    return document.querySelector(value)
}
function print (value){
    console.log(value)
    return value
}
function getAllNotes () {
    return fetch ('http://localhost:3000/notes/', {
    method: 'GET'
    })
    .then(response => response.json())
}
function createNotesHTML (notes){
    let notesStr = '<ul id="note-list">'
    for (const note of notes){
        notesStr += createNoteHTML(note)
    }
notesStr += '</ul>'
return notesStr
}
function createNoteHTML (note){
    return `<li data-note-id="${note.id}">${note.title}
    <div id="bodyID${note.id}" class="ID${note.id}">${note.body}</div>
    <button class="delete ID${note.id}"> Delete </button>
    <button class="edit ID${note.id}"> Edit </button>
    </li>`
}
function postNewNote (noteTitle, noteText) {
    return fetch('http://localhost:3000/notes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title: noteTitle, body: noteText})
    })
    .then(response => response.json())
}
function renderNotesList (notes) {
    const notesHTML =createNotesHTML(notes)
    const notesSection = q('#notes')
    notesSection.innerHTML = notesHTML
}
function renderNewNote (note) {
    const todoHTML =createNotesHTML(note)
    const notesList = q('#notes-list')
    noteList.insertAdjacentHTML(beforend, noteHTML)
}
getAllNotes().then(renderNotesList)
q('#new-note-form').addEventListener('submit', event=> {
    event.preventDefault()
    const noteTextFeild = q('#note-text')
    const noteText = noteTextFeild.value
    noteTextFeild.value = ''
    const noteTitleFeild = q('#title-text')
    const titleText = noteTitleFeild.value
    noteTitleFeild.value = ''
    postNewNote(titleText, noteText).then(renderNewNote)
})
q('#notes').addEventListener('click', event => {
    let noteID = event.target.parentElement.dataset.noteId
    if (event.target.matches('.delete') === true){
        print('deleted!' + event.target.parentElement.dataset.noteId)
        deleteNote(noteID)
    }
    else if(event.target.matches('.edit') === true){
            print('edit clicked on ' + noteID)
            editNoteRender(noteID)
            
        }
    else if(event.target.matches('.update') === true){
        print('update clicked')
        updateNote(noteID)
    }
    })
function deleteNote(noteID){
    return fetch(`http://localhost:3000/notes/${noteID}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
}
function editNoteRender(noteID){
    let editText = q(`#bodyID${noteID}`).innerText
    let removedItems = document.querySelectorAll(`.ID${noteID}`)
    removedItems[1].parentElement.insertAdjacentHTML('beforeend', `<form class="editForm">
    <label for="edit-note">Edit Your Note</label>
    <input type="text" value="${editText}" id="update-text" required>
    </form>
    <button class="update">Update</button>`)
    print(parent).value
    removedItems.forEach(element => element.parentElement.removeChild(element))
}
function updateNote(noteID){
    let updateTextField = q('#update-text')
    let updateText = updateTextField.value
    print(updateText)
    return fetch(`http://localhost:3000/notes/${noteID}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: updateText })
    })
}
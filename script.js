//i swear i didnt copy paste

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
//try to figure out temperlate literals later
}

function createNoteHTML (note){
    // console.log("this thing: ")
    // console.log(note)
    return `<li data-note-id="${note.id}">${note.title}<div id="bodyID${note.id}">${note.body}</div><button class="delete">Delete</button></li>`
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
// let temp = q('#new-note-form')
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
//make a form for the title
//add getting that field to the event listner
//add that info to the post
//figure out what is being return to note list


// let temp2 = q('#notes')
// print('temp 2: ')
// print({temp2})
q('#notes').addEventListener('click', event => {
    // event.preventDefault()
    let noteID = event.target.parentElement.dataset.noteId
    if (event.target.matches('.delete') === true){
        print('deleted!' + event.target.parentElement.dataset.noteId)
        deleteNote(noteID)
    }
})


function deleteNote(noteID){
    return fetch(`http://localhost:3000/notes/${noteID}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
}













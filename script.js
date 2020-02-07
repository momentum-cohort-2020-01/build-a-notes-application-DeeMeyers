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
        notesStr += createNoteHTML(notes)
    }
notesStr += '</ul>'
return notesStr
//try to figure out temperlate literals later
}

function createNoteHTML (note){
    return `<li data-note-id="${note.id}">${note.note} <button class="delete">Delete</button></li>`
}

function postNewNote (noteText) {
    return fetch('http://localhost:3000/notes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title: 'a new note', body: noteText})
    })
    .than(response => response.json())
}

function renderNotesList (notes) {
    const notesHTML =createNotesHTML(notes)
    const notesSection = q('#notes')
    notesSection.innerHTML = notesHTML
}

function renderNewNote (note) {
    const todoHTML =createNotesHTML(note)
    const notesList = q('#notes-list')
    noteList.insertAdhacentHTML(beforend, noteHTML)
}

getAllNotes().then(renderNotesList)
let temp = q('#new-note-form')
temp.addEventListener('submit', event=> {
    event.preventDefault()
    const noteTextFeild = q('#note-text')
    const noteText = noteTextFeild.value
    noteTextFeild.value = ''
    postNewNote(noteText).then(renderNewNote)
})
//make a form for the title
//add getting that field to the event listner
//add that info to the post
//figure out what is being return to note list


// let temp2 = q('#notes')
// temp2.addEventLIstener('click', event => {
//     if (event.target.matches('delete')){
//         print('delete ' + event.target.parentElement.dataset.noteId)
//         //add send AJAX request to delete todo
//         //add remove li with dataset-note-id equal to id from dom
//     }
// })












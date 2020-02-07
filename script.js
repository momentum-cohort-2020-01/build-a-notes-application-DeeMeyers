//i swear i didnt copy paste

function q(value){
    return document.querySelector(value)
}

function print (value){
    console.log(value)
    return value
}
function getAllNotes(){
    fetch ('http://localhost:3000/notes/',{
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








function getAllNotes (){
    function q(value){
        return document.querySelector(value)
    }
    
    function print (value){
        console.log(value)
        return value
    }

    fetch ('http://localhost:3000/*******/',{
        method: 'GET'
    })
    .then(response => response.json())
    .then(notes => console.log(notes))
}

function createNotesHTML (notes){
    let notesStr = '<ul>'
    for (const note of notes){
        todosStr +=
    }
}




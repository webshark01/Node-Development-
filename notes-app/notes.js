const { default: chalk } = require('chalk')
const { timeEnd } = require('console')
const fs = require('fs')
const { title } = require('process')

const addNote = (title, body) => {
    const notes = loadNotes() //object lylia loadnotes sy 
    const duplicateNote = notes.find(note => note.title === title);

    if(!duplicateNote)
    {
        notes.push({ // push basically array k andr aik or note ka object add kr rha h
            title: title,
            body: body
        }) //change kia new object ki values ko acc to input by user 
        console.log(chalk.bgGreen('New note added!'))
    }
    else
    {
        console.log(chalk.bgRed('Note title taken!'))
    }

    saveNotes(notes) //Save kia file main updated array ko jo k maqsad h hamara add krna note
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try { 
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) //basically ye agr already object para h to usko return kr rha h taky wo override na ho or addnotes waly fuctition main notes.push sy jo new note ka object array main push hua h file main dubara save hon
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notestoKeep = notes.filter((note) => note.title !== title)

    if (notestoKeep.length === notes.length)
    {
        console.log(chalk.bgRed('No note found!'))
    }
    else
    {
        console.log(chalk.bgGreen('Note removed!'))
        
    }
}

const listNotes = () =>
{
    const Notes = loadNotes()
    console.log(chalk.bgBlackBright('Your Notes'))
    Notes.forEach((element) => console.log(element.title));
}

const readNote = (title) =>
{
    const notes = loadNotes()
    const nodetoPrint = notes.find((note) => note.title === title)
    
    if(nodetoPrint)
    {
        console.log(chalk.bgGreen(nodetoPrint.title))
        console.log(nodetoPrint.body)
    }
    else
    {
        console.log(chalk.bgRed('No node found!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Description",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            descripton: 'Title of node to be remove',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe: 'Title of node to read',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse();

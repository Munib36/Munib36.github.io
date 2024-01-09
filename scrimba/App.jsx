import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"

import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase.js"
let date = new Date;
let currentDate = date.toJSON()
currentDate = currentDate.slice(0, 10)
export default function App() {

    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0]?.id) || ""
    )
    const [ tempNotesText, setTempNotesText ] = React.useState("")
        /**
     * Challenge:
     * 3. Create a useEffect that, if there's a `currentNote`, sets
     *    the `tempNoteText` to `currentNote.body`. (This copies the
     *    current note's text into the `tempNoteText` field so whenever 
     *    the user changes the currentNote, the editor can display the 
     *    correct text.
     * 4. TBA
     */
    
    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]
    let notesSorted = notes.sort((a, b) => b.updatedAt - a.updatedAt)
    let sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt)

    React.useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
            console.log("things r changing")
            
            const notesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setNotes(notesArr)
        })
        return unsubscribe
    }, [])
    React.useEffect(()=>{
        if(currentNote){
            setTempNotesText(currentNote.body)
        }
    }, [currentNote])

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",

            createdAt: Date.now(),
            updatedAt: Date.now(),
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }

    async function updateNote(text) {
        let object = {
            body: text,
            updatedAt: Date.now(),
        }
        const docRef = doc(db, "notes", currentNoteId)
        await setDoc(docRef, object, { merge: true })
        // setTempNoteText(text)
        
    }

    async function deleteNote(event, noteId) {
        event.stopPropagation()
         const docRef = doc(db, "notes", noteId)
         await deleteDoc(docRef)
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={sortedNotes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                    
                        <Editor
                            tempNotesText={tempNotesText}
                            setTempNotesText={setTempNotesText}
                        />
                        
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </main>
    )
}

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

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
            normalcreatedAt: currentDate,
            normalupdatedAt: currentDate,
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
                            currentNote={currentNote}
                            updateNote={updateNote}
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

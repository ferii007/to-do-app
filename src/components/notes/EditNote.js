import { Icon } from '@iconify/react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../store/actions/index';
import { useState } from 'react';

const EditNote = () => {

    const dispatch = useDispatch();
	const { alertNotif, editNoteModalHide } = bindActionCreators(actionCreators, dispatch);
    const isEditNote = useSelector((state) => state.editNoteModal.open);
    const editNoteId = useSelector((state) => state.editNoteModal.id);
    const editNoteTitle = useSelector((state) => state.editNoteModal.title);
    const editNoteNotes = useSelector((state) => state.editNoteModal.notes);

    const [titleNote, setTittleNote] = useState('');
    const [descNote, setDescNote] = useState('');


    const editNote = (id, newTitle, newDesc) => {
        const request = window.indexedDB.open('noteDatabase', 1);
    
        request.onsuccess = function(event) {
            const db = event.target.result;
    
            const transaction = db.transaction(['notes'], 'readwrite');
            const objectStore = transaction.objectStore('notes');
    
            const getNoteRequest = objectStore.get(id);
    
            getNoteRequest.onsuccess = function(event) {
                const existingNote = event.target.result;
    
                if (existingNote) {
                    const updatedNote = {
                        id: existingNote.id,
                        title: newTitle || existingNote.title,
                        notes: newDesc || existingNote.notes,
                        date: existingNote.date
                    };
    
                    const updateRequest = objectStore.put(updatedNote);
    
                    updateRequest.onsuccess = function() {
                        closeEditNote();
                        alertNotif(true, 'Updated');
                        setTimeout(() => {
                            alertNotif(false, 'Updated');
                        }, 1500);
                        console.log(`Note with ID ${id} updated successfully.`);
                    };
    
                    updateRequest.onerror = function() {
                        console.error(`Failed to update note with ID ${id}.`);
                    };
                } else {
                    console.error(`Note with ID ${id} not found.`);
                }
            };
    
            getNoteRequest.onerror = function() {
                console.error(`Failed to retrieve note with ID ${id}.`);
            };
        };
    };



    const closeEditNote = () => {
        editNoteModalHide();
        setTittleNote('');
        setDescNote('');
    }

    const draftEditNote = () => {
        closeEditNote()
        alertNotif(true, 'Drafted');
        setTimeout(() => {
            alertNotif(false, 'Drafted');
        }, 1500);
    }
      

    return (
        <div className={`bg-white h-screen absolute left-0 right-0 ${isEditNote ? 'top-0 z-10' : '-top-full -z-10'} ease-out duration-300`}>
            <div className='bg-bg-color-neutral p-4 border-b border-line-color-neutral flex justify-between items-center'>
                <h1 className='text-xl font-bold font-raleway'>Edit Note</h1>

                <div className='flex gap-3'>
                    <Icon icon="material-symbols:save-outline" width="32" className='text-secondary-color-neutral hover:text-default-theme-color-success' onClick={() => editNote(editNoteId, titleNote, descNote)} />
                    <Icon icon="mingcute:back-fill" width="32" className='text-secondary-color-neutral hover:text-default-theme-color-success' onClick={() => draftEditNote()} />
                </div>
            </div>

            <div className="p-4">
                <form action="#" className="flex flex-col space-y-4 pb-10">
                    <label htmlFor="notes-title" className='flex flex-col border-b-2 pb-1'>
                        <span className='text-lg font-bold tracking-wider font-raleway'>Title</span>
                        <input type="text" name="notes-title" id="notes-title" className="input-form" placeholder="eg : Meeting with client" defaultValue={editNoteTitle} onChange={e => setTittleNote(e.target.value)} />
                    </label>

                    <label htmlFor="notes-desc" className='flex flex-col'>
                        <span className='text-lg font-bold tracking-wider font-raleway'>Notes</span>
                        <textarea type="text" name="notes-desc" id="notes-desc" className="input-form h-80" placeholder="Your Notes" defaultValue={editNoteNotes} onChange={e => setDescNote(e.target.value)} />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default EditNote
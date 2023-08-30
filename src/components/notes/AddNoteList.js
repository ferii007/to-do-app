import { Icon } from '@iconify/react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../store/actions/index';
import { useState } from 'react';

const AddNoteList = () => {

    const dispatch = useDispatch();
	const { createTodo, alertNotif } = bindActionCreators(actionCreators, dispatch);
    const isCreateTodo = useSelector((state) => state.createTodo);

    const [titleNote, setTittleNote] = useState('');
    const [descNote, setDescNote] = useState('');

    const addNote = () => {
        const request = window.indexedDB.open('noteDatabase', 1);

        request.onupgradeneeded = function(event) {
            const db = event.target.result;

            // Membuat atau mengatur object store jika belum ada
            if (!db.objectStoreNames.contains('notes')) {
                db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = function(event) {
            const db = event.target.result;

            const transaction = db.transaction(['notes'], 'readwrite');
            const objectStore = transaction.objectStore('notes');

            const title = titleNote.trim();
            const desc = descNote.trim();

            // Memeriksa apakah title dan desc tidak kosong sebelum menambahkan ke IndexedDB
            if (title !== '' || desc !== '') {
                const newNote = {
                    title: title,
                    notes: desc,
                    date: new Date().getTime()
                };

                const addRequest = objectStore.add(newNote);

                addRequest.onsuccess = function() {
                    createTodo(false);
                    setTittleNote('');
                    setDescNote('');
                    
                    alertNotif(true, 'Added');
                    setTimeout(() => {
                        alertNotif(false, 'Added');
                    }, 1500);
                    console.log('Catatan berhasil disimpan di IndexedDB');
                };

                addRequest.onerror = function() {
                    console.error('Gagal menyimpan catatan di IndexedDB');
                };
            } else {
                alertNotif(true, 'Fill at least one field.');
                setTimeout(() => {
                    alertNotif(false, 'Fill at least one field.');
                }, 1500);
                console.log('Title dan Desc tidak boleh kosong');
            }
        };
    }

    return (
        <div className={`bg-white h-screen absolute left-0 right-0 ${isCreateTodo ? 'top-0 z-10' : '-top-full -z-10'} ease-out duration-300`}>
            <div className='bg-bg-color-neutral p-4 border-b border-line-color-neutral flex justify-between items-center'>
                <h1 className='text-xl font-bold font-raleway'>Add Note</h1>

                <div className='flex gap-3'>
                    <Icon icon="material-symbols:save-outline" width="32" className='text-secondary-color-neutral hover:text-default-theme-color-success' onClick={() => addNote()} />
                    <Icon icon="mingcute:back-fill" width="32" className='text-secondary-color-neutral hover:text-default-theme-color-success' onClick={() => createTodo(false)} />
                </div>
            </div>

            <div className="p-4">
                <form action="#" className="flex flex-col space-y-4 pb-10">
                    <label htmlFor="notes-title" className='flex flex-col border-b-2 pb-1'>
                        <span className='text-lg font-bold tracking-wider font-raleway'>Title</span>
                        <input type="text" name="notes-title" id="notes-title" className="input-form" placeholder="eg : Meeting with client" value={titleNote} onChange={e => setTittleNote(e.target.value)} />
                    </label>

                    <label htmlFor="notes-desc" className='flex flex-col'>
                        <span className='text-lg font-bold tracking-wider font-raleway'>Notes</span>
                        <textarea type="text" name="notes-desc" id="notes-desc" className="input-form h-80" placeholder="Your Notes" value={descNote} onChange={e => setDescNote(e.target.value)} />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default AddNoteList
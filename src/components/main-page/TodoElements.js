import { Icon } from '@iconify/react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../store/actions/index';
import { useEffect, useRef, useState } from 'react';
import { formatDate, formatTime } from '../helpers/formatDate';

const TodoElements = () => {
    const dispatch = useDispatch();
	const { createTodo, allDataNotes, showDeleteNoteModal } = bindActionCreators(actionCreators, dispatch);
    const isCreateTodo = useSelector((state) => state.createTodo);
    const allDataNotesLength = useSelector((state) => state.allDataNotes);
    const isShowDeleteNoteModal = useSelector((state) => state.showDeleteNoteModal);

    const [dataNotes, setDataNotes] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState('');
    const [dropdownClicked, setIsDropdownClicked] = useState(false);
    const dropdownRef = useRef(null);

    const hideDropdown = () => {
        setIsDropdownClicked(false)
        setDropdownVisible('')
    }

    const showDropdown = (element) => {
        if (dropdownClicked && isDropdownVisible === element) {
            hideDropdown();
        }
        if (isDropdownVisible !== element) {
            setIsDropdownClicked(true)
            setDropdownVisible(element)
        }
    }

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            hideDropdown();
        }
    };

    const handleDelete = (id, title, notes) => {
        // hideDropdown();
        showDeleteNoteModal({
            open: true,
            id: id,
            title: title,
            notes: notes
        });
    }
    

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleOutsideClick);

    //     return () => {
    //         document.removeEventListener('mousedown', handleOutsideClick);
    //     };
    // }, []);

    useEffect(() => {
        const request = window.indexedDB.open('noteDatabase', 1);

        request.onupgradeneeded = function(event) {
            const db = event.target.result;

            if (!db.objectStoreNames.contains('notes')) {
                db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = function(event) {
            const db = event.target.result;

            const transaction = db.transaction(['notes'], 'readonly');
            const objectStore = transaction.objectStore('notes');

            const getAllRequest = objectStore.getAll();

            getAllRequest.onsuccess = function(event) {
                const notes = event.target.result;

                // Mengurutkan data berdasarkan ID secara terbalik
                const sortedNotes = notes.sort((a, b) => b.id - a.id);
                allDataNotes(sortedNotes);

                // Mengambil maksimal 3 data
                const limitedNotes = sortedNotes.slice(0, 4);
                setDataNotes(limitedNotes)
            };
        };

        request.onerror = function() {
            console.error('Gagal membuka database IndexedDB');
        };
    }, [isCreateTodo, isShowDeleteNoteModal]);


    const ParagraphWithLimit = ({ text, limit }) => {
        const words = text.split(' ');
      
        return (
            <p className="text-base font-normal text-gray-800">
                {words.slice(0, limit).join(' ')}
                {words.length > limit && (
                    <span>
                        ...
                    </span>
                )}
            </p>
        );
    };

    return (
        <div>
            <div className='pt-8 pb-24'>
                <div className="bg-white rounded-lg drop-shadow-lg overflow-hidden">
                    <div className="bg-default-theme-color-success w-full p-4"></div>

                    <div className="p-4">
                        <div className="flex items-center space-x-4 lg:cursor-pointer" onClick={() => createTodo(true)}>
                            <Icon icon="ph:plus-fill" width="32" className='text-default-theme-color-success' />

                            <h1 className='text-lg font-bold'>Tap to create a new task</h1>
                        </div>
                    </div>

                    <div className='p-3'>
                        <hr />

                        <div className='flex items-center justify-between text-secondary-color-neutral pt-2 pb-1'>
                            <h3>Add your task</h3>

                            <h3>Today. {formatDate(new Date().getTime())}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='border-t-4 border-line-color-neutral' />

            <div className='pt-3 pb-4'>
                <h1 className='text-title font-raleway text-xl'>New Notes</h1>
                <h3 className='text-sub-title font-nunito'>
                    Displaying {dataNotes.length} out of {allDataNotesLength.length} Notes
                </h3>
            </div>
            {
                dataNotes.length !== 0 ? 
                dataNotes.map(notes => (
                    <div key={notes.id} className="bg-white rounded-lg drop-shadow-lg overflow-hidden mb-8 relative">
                        <div>
                            <div className="bg-default-theme-color-success w-full px-4 py-2 flex justify-between items-center">
                                <h5 className='text-base font-semibold text-white tracking-wider w-3/4 overflow-hidden whitespace-nowrap text-ellipsis'>{notes.title}</h5>

                                <Icon icon="tabler:dots" className='text-3xl text-white lg:cursor-pointer' onClick={() => showDropdown(`dropdown-${notes.id}`)} />
                            </div>

                            <div className="p-4 h-32">
                                <p className='text-secondary-color-neutral mb-2'>Note:</p>

                                <ParagraphWithLimit text={notes.notes} limit={20} />
                            </div>

                            <div className='p-3'>
                                <hr />

                                <div className='flex items-center justify-between text-secondary-color-neutral pt-2 pb-1'>
                                    <h3>{formatDate(notes.date)}</h3>

                                    <h3>{formatTime(notes.date)}</h3>
                                </div>
                            </div>
                        </div>

                        <div ref={dropdownRef} className={`bg-bg-color-neutral shadow-xl shadow-slate-300 absolute right-5 top-9 flex gap-3 p-2 rounded-lg text-secondary-color-neutral ${isDropdownVisible === `dropdown-${notes.id}` ? 'opacity-100 w-40' : 'opacity-0 w-0'} transition-all duration-500`}>
                            <Icon icon="ri:share-fill" className='cursor-pointer w-7 h-7' />
                            <Icon icon="solar:download-bold" className='cursor-pointer w-7 h-7' />
                            <Icon icon="bxs:edit" className='cursor-pointer w-7 h-7' />
                            <Icon icon="ph:trash-fill" className='cursor-pointer w-7 h-7 text-default-theme-color-error' onClick={() => handleDelete(notes.id, notes.title, notes.notes)} />
                        </div>
                    </div>
                ))
                :
                null
            }
        </div>
    )

}

export default TodoElements
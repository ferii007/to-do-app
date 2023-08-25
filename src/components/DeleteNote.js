
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions/index';

import OverlayElement from './OverlayElement';

const DeleteNote = () => {
    const dispatch = useDispatch();
	const { showDeleteNoteModal, alertNotif } = bindActionCreators(actionCreators, dispatch);
    const isShowDeleteNoteModal = useSelector((state) => state.showDeleteNoteModal.open);
    const titleNoteOnModal = useSelector((state) => state.showDeleteNoteModal.title);
    const idNoteOnModal = useSelector((state) => state.showDeleteNoteModal.id);

    const cancelDelete = () => {
        showDeleteNoteModal({
            open: false,
            id: null,
            title: '',
            notes: ''
        });
    }

    const handleDeleteNote = (id) => {
        const request = window.indexedDB.open('noteDatabase', 1);

        request.onsuccess = function(event) {
            const db = event.target.result;

            const transaction = db.transaction(['notes'], 'readwrite');
            const objectStore = transaction.objectStore('notes');

            const deleteRequest = objectStore.delete(id);

            deleteRequest.onsuccess = function(event) {
                alertNotif(true, 'Deleted');
                setTimeout(() => {
                    alertNotif(false, 'Deleted');
                }, 1500);
                cancelDelete();
                console.log('Note with ID', id, 'has been deleted from IndexedDB');
            };
        };

        request.onerror = function() {
            console.error('Failed to open IndexedDB');
        };
    }

    return(
        <>
            {
                isShowDeleteNoteModal ? 
                <OverlayElement /> : ''
            }

            <div className={`absolute top-0 left-0 right-0 px-3 m-auto h-screen z-20 ${isShowDeleteNoteModal ? 'scale-100' : 'scale-0'} transition-all duration-300`}>
                <div className='h-full flex items-center'>
                    <div className="bg-white rounded-lg drop-shadow-lg overflow-hidden w-full">
                        <div className="bg-default-theme-color-success w-full px-4 py-2 flex justify-between items-center">
                            <h5 className='text-base font-semibold text-white tracking-wider w-full overflow-hidden whitespace-nowrap text-ellipsis'>
                            <span className='text-line-color-neutral'>Title:</span> {titleNoteOnModal}
                            </h5>
                        </div>

                        <div className="p-4">
                            <div className="flex items-center space-x-4 lg:cursor-pointer">
                                <h1 className='text-lg font-bold'>Delete this Note?</h1>
                            </div>
                        </div>

                        <div className='p-3'>
                            <hr />

                            <div className='flex items-center justify-end text-secondary-color-neutral pt-2 pb-1 gap-5'>
                                <button className='bg-bg-color-neutral text-primary-theme-color-success px-4 py-3 rounded-lg shadow-xl' onClick={() => cancelDelete()}>Cancel</button>
                                <button className='bg-default-theme-color-error text-white px-4 py-3 rounded-lg shadow-xl' onClick={() => handleDeleteNote(idNoteOnModal)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteNote
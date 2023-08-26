import { Icon } from '@iconify/react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../store/actions/index';
import { useEffect, useRef, useState } from 'react';
import { formatDate, formatDate2, formatTime } from '../helpers/formatDate';

const NotesPage = () => {
    const dispatch = useDispatch();
	const { createTodo, allDataNotes, showDeleteNoteModal } = bindActionCreators(actionCreators, dispatch);

    const allDataNotesLength = useSelector((state) => state.allDataNotes);

    return(
        <section className={`h-screen overflow-scroll pb-48 pt-10 px-5`}>
            <div className="flex justify-between items-center border-b-2 border-line-color-neutral">
                <h1 className="text-title font-raleway mb-2">Notes</h1>

                <Icon icon="ph:plus-fill" width="32" className='text-default-theme-color-success' onClick={() => createTodo(true)} />
            </div>

            <div className='mt-7 flex justify-between items-center'>
                <h3 className='text-sub-title font-nunito'>
                    Displaying {allDataNotesLength.length} out of {allDataNotesLength.length} Notes
                </h3>

                <Icon icon="uiw:setting" width={24} className='text-secondary-color-neutral' />
            </div>

            <div>
                {
                    allDataNotesLength.length !== 0 &&
                    allDataNotesLength.map(notes => (
                        <div className='flex justify-between items-center border-b-2 border-line-color-neutral pt-4'>
                            <div>
                                <h5 className='text-lg font-bold'>{notes.title}</h5>
                                    
                                <h6 className='text-secondary-color-neutral text-xs flex gap-2'>
                                    <span>{formatDate2(notes.date)}</span>
                                    <span>{formatTime(notes.date)}</span>
                                </h6>
                            </div>

                            <Icon icon="tabler:dots" className='w-7 h-7' />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default NotesPage
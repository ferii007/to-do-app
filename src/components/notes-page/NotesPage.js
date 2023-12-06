import { Icon } from '@iconify/react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../store/actions/index';
import { formatTimestamp } from '../helpers/formatDate';
import { useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

const NotesPage = () => {
    const dispatch = useDispatch();
	const { createTodo, showSortingNotesModal } = bindActionCreators(actionCreators, dispatch);

    const allDataNotesLength = useSelector((state) => state.allDataNotes);
    const displaySorted = useSelector((state) => state.sortingNotes.displaySorted);
    const sortedBy = useSelector((state) => state.sortingNotes.sortedBy);
    const scrollRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);

    const scrollToTop = () => {
        scrollRef.current.scrollTo({ top: 0, behavior: 'auto' }); 
    }
    
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
        scrollToTop();
    };
      

    if (sortedBy === 'newest') {
        allDataNotesLength.sort((a, b) => b.date - a.date);
    } else {
        allDataNotesLength.sort((a, b) => a.title.localeCompare(b.title));
    }

    const paginatedData = allDataNotesLength.slice(
        currentPage * displaySorted,
        (currentPage + 1) * displaySorted
    );

    const ParagraphWithLimit = ({ text, limit }) => {
        const words = text.split(' ');
      
        return (
            <p className="text-secondary-color-neutral text-sm">
                {words.slice(0, limit).join(' ')}
                {words.length > limit && (
                    <span>
                        ...
                    </span>
                )}
            </p>
        );
    };

    return(
        <section ref={scrollRef} className={`h-screen overflow-scroll pb-48 pt-10 px-5`}>
            <div className="flex justify-between items-center border-b-2 border-line-color-neutral">
                <h1 className="text-title font-raleway mb-2">Notes</h1>

                <Icon icon="ph:plus-fill" width="32" className='text-default-theme-color-success' onClick={() => createTodo(true)} />
            </div>

            <div className='mt-7 flex justify-between items-center'>
                <h3 className='text-sub-title font-nunito'>
                    Displaying {displaySorted} out of {allDataNotesLength.length} Notes
                </h3>

                <Icon icon="uiw:setting" width={24} className='text-secondary-color-neutral' onClick={() => showSortingNotesModal(true)} />
            </div>

            {/* <div>
                {
                    allDataNotesLength.length !== 0 &&
                    paginatedData.map(notes => (
                        <div key={notes.id} className='flex justify-between items-center border-b-2 border-line-color-neutral pt-4'>
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
            </div> */}

            <div className="container mt-8">
                <div className="columns-2 gap-3">
                    {
                        allDataNotesLength.length !== 0 &&
                        paginatedData.map(notes => (
                            <div key={notes.id} className="relative p-3 break-inside-avoid bg-white shadow-lg rounded-xl max-h-44 mb-3">
                                <h5 className='mb-1 text-base font-semibold tracking-wider w-11/12 overflow-hidden whitespace-nowrap text-ellipsis'>
                                    {notes.title}
                                </h5>

                                <ParagraphWithLimit text={notes.notes} limit={18} />

                                <h6 className='mt-3 text-primary-color-neutral text-sm'>{formatTimestamp(notes.date)}</h6>
                            </div>
                        ))
                    }

                </div>
            </div>

            {
                allDataNotesLength.length > displaySorted &&
                <div className='pt-12'>
                    <ReactPaginate
                        forcePage={currentPage}
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(allDataNotesLength.length / displaySorted)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={4}
                        onPageChange={handlePageChange}
                        containerClassName={'flex justify-between text-secondary-color-neutral text-xl py-2 mt-5'}
                        activeClassName={'text-default-theme-color-success'}
                    />
                </div>
            }
        </section>
    )
}

export default NotesPage
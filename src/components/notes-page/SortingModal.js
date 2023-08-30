import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../store/actions/index';
import OverlayElement from '../OverlayElement';

const SortingModal = () => {
    const dispatch = useDispatch();
	const { sortingNotes, showSortingNotesModal, alertNotif } = bindActionCreators(actionCreators, dispatch);

    const isShowSortingNotesModal = useSelector((state) => state.showSortingNotesModal);
    const sortedDisplay = useSelector((state) => state.sortingNotes.displaySorted);
    const sortedBy = useSelector((state) => state.sortingNotes.sortedBy);
    const [sorted, setSorted] = useState(sortedDisplay);
    const [sortingBy, setSortingBy] = useState(sortedBy);

    const handleSaveSorting = () => {
        alertNotif(true, 'Saved');
        setTimeout(() => {
            alertNotif(false, 'Saved');
        }, 1500);
        
        sortingNotes({
            sortedBy: sortingBy,
            displaySorted: sorted
        })
        showSortingNotesModal(false)
    }

    const handleCancelSorting = () => {
        sortingNotes({
            sortedBy: sortedBy,
            displaySorted: sortedDisplay
        })
        showSortingNotesModal(false)
    }

    return(
        <>
            {isShowSortingNotesModal && <OverlayElement />}

            <div className={`absolute top-1/4 left-0 right-0 px-3 m-auto h-screen z-20 ${isShowSortingNotesModal === true ? 'scale-100' : 'scale-0'} transition-all duration-300`}>
                <div className="bg-white rounded-lg drop-shadow-lg overflow-hidden w-full">
                    <div className="bg-default-theme-color-success w-full px-4 py-2 flex justify-between items-center">
                        <h5 className='text-base font-semibold text-white tracking-wider w-full overflow-hidden whitespace-nowrap text-ellipsis'>
                            <span className='text-line-color-neutral'>Sorting</span>
                        </h5>
                    </div>

                    <div className="p-4 flex flex-col space-y-4">
                        <label className="flex items-center justify-between lg:cursor-pointer relative">
                            <span className="text-lg font-bold">Sorting By Newest</span>
                            <input type="radio" name="sorting" id="sorting-by-newest" className="w-6 h-6" onChange={() => setSortingBy('newest')} checked={sortingBy === 'newest' ? true : false} />
                            <span className="custom-radio absolute right-0" />
                        </label>

                        <label className="flex items-center justify-between lg:cursor-pointer relative">
                            <span className="text-lg font-bold">Sorting By Title</span>
                            <input type="radio" name="sorting" id="sorting-by-title" className="w-6 h-6" onChange={() => setSortingBy('title')} checked={sortingBy === 'title' ? true : false} />
                            <span className="custom-radio absolute right-0" />
                        </label>

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold">Displaying</span>
                            <div className="flex items-center space-x-3">
                                <label className="flex items-center lg:cursor-pointer relative">
                                    <input type="radio" name="display" id="display-25" className="w-8 h-8 hidden" onChange={() => setSorted(25)} checked={sorted === 25 ? true : false} />
                                    
                                    <div className={`custom-radio-box`}>
                                        <span className="radio-display-label">25</span>
                                    </div>
                                </label>

                                <label className="flex items-center lg:cursor-pointer relative">
                                    <input type="radio" name="display" id="display-50" className="w-8 h-8 hidden" onChange={() => setSorted(50)} checked={sorted === 50 ? true : false} />
                                    
                                    <div className="custom-radio-box">
                                        <span className="radio-display-label">50</span>
                                    </div>
                                </label>

                                <label className="flex items-center lg:cursor-pointer relative">
                                    <input type="radio" name="display" id="display-75" className="w-8 h-8 hidden" onChange={() => setSorted(75)} checked={sorted === 75 ? true : false} />
                                    
                                    <div className="custom-radio-box">
                                        <span className="radio-display-label">75</span>
                                    </div>
                                </label>

                                <label className="flex items-center lg:cursor-pointer relative">
                                    <input type="radio" name="display" id="display-100" className="w-8 h-8 hidden" onChange={() => setSorted(100)} checked={sorted === 100 ? true : false} />
                                    
                                    <div className="custom-radio-box">
                                        <span className="radio-display-label">100</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='p-3'>
                        <hr />

                        <div className='flex items-center justify-end text-secondary-color-neutral pt-2 pb-1 gap-5'>
                            <button className='bg-bg-color-neutral text-primary-theme-color-success px-4 py-3 rounded-lg shadow-xl' onClick={() => handleCancelSorting()}>Cancel</button>
                            <button className='bg-default-theme-color-success text-white px-4 py-3 rounded-lg shadow-xl' onClick={() => handleSaveSorting()} >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SortingModal
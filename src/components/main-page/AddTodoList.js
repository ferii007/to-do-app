import { Icon } from '@iconify/react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../store/actions/index';

const AddTodoList = () => {

    const dispatch = useDispatch();
	const { createTodo } = bindActionCreators(actionCreators, dispatch);
    const isCreateTodo = useSelector((state) => state.createTodo);

    return (
        <div className={`bg-white z-20 absolute left-0 right-0 transition-all duration-500 ${isCreateTodo ? 'top-0 bottom-0 opacity-100' : '-bottom-full top-full opacity-0'}`}>
            <div className='bg-bg-color-neutral p-4 border-b border-line-color-neutral flex justify-between items-center'>
                <h1 className='text-xl font-bold font-raleway'>Add Note</h1>

                <div className='flex'>
                    <Icon icon="material-symbols:save-outline" width="32" className='text-secondary-color-neutral' onClick={() => createTodo(false)} />
                </div>
            </div>
            
            <div className={`p-4`}>
                <form action="#" className="flex flex-col space-y-4 pb-10">
                    <label for="notes-title" className='flex flex-col border-b-2 pb-1'>
                        <span className='text-lg font-bold tracking-wider font-raleway'>Title</span>
                        <input type="text" name="notes-title" id="notes-title" className="input-form" placeholder="eg : Meeting with client" />
                    </label>

                    <label for="notes-desc" className='flex flex-col'>
                        <span className='text-lg font-bold tracking-wider font-raleway'>Notes</span>
                        <textarea type="text" name="notes-desc" id="notes-desc" className="input-form h-[40vh]" placeholder="Your Notes" />
                    </label>

                    {/* <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Icon icon="solar:inbox-in-bold" width="24" className='text-secondary-color-neutral' />
                            <Icon icon="uis:calender" width="24" className='text-secondary-color-neutral' />
                            <Icon icon="ph:clock-fill" width="24" className='text-secondary-color-neutral' />
                            <Icon icon="material-symbols:flag" width="24" className='text-secondary-color-neutral' />
                        </div>

                        <Icon icon="fluent:send-24-filled" width="24" className='text-default-theme-color-success' onClick={() => createTodo(false)} />
                    </div> */}

                    {/* <hr /> */}
                </form>
            </div>
        </div>
    )

}

export default AddTodoList
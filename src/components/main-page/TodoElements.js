import { Icon } from '@iconify/react';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../store/actions/index';

const TodoElements = () => {
    const dispatch = useDispatch();
	const { createTodo } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='pt-8'>
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

                        <h3>Today. Mon 20 Jul 2023</h3>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TodoElements
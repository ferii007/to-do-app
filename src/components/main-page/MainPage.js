import { Icon } from '@iconify/react';
import TodoElements from './TodoElements';
import AddTodoList from './AddTodoList';
import OverlayElement from '../OverlayElement';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../store/actions/index';

const MainPage = () => {

    const dispatch = useDispatch();
	const { createTodo } = bindActionCreators(actionCreators, dispatch);
    const isCreateTodo = useSelector((state) => state.createTodo);
    return(
        <div className=''>
            <div className="py-10 px-5">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-title">Today</h1>
                        <h3 className="text-sub-title">Best paltform for creating to-do lists</h3>
                    </div>
    
                    <Icon icon="uiw:setting" width={24} className='text-secondary-color-neutral' />
                </div>
    
                <TodoElements />
            </div>
    
            <AddTodoList />

            <div className={`${isCreateTodo ? 'block' : 'hidden'}`} onClick={() => createTodo(false)}>
                <OverlayElement />
            </div>
        </div>
    )

}

export default MainPage
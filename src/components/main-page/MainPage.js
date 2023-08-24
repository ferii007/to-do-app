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
        <>
            <div className={`${isCreateTodo ? 'opacity-0 h-96 overflow-hidden' : 'opacity-100 overflow-auto'} transition-all duration-500 z-40`}>
                <div className="py-10 px-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-title font-raleway">NoteWave</h1>
                            <h3 className="text-sub-title font-nunito">Elevate Your Notes: Unmatched Platform for Creation</h3>
                        </div>
        
                        <Icon icon="uiw:setting" width={24} className='text-secondary-color-neutral' />
                    </div>
        
                    <TodoElements />
                </div>

                {/* <div className={`${isCreateTodo ? 'block' : 'hidden'}`} onClick={() => createTodo(false)}>
                    <OverlayElement />
                </div> */}

            </div>

            <AddTodoList />
        </>
    )

}

export default MainPage
import { Icon } from '@iconify/react';
import TodoElements from './TodoElements';
import AddNoteList from './AddNoteList';
import DeleteNote from './DeleteNote';

import { useSelector } from 'react-redux';

const MainPage = () => {
    const isCreateTodo = useSelector((state) => state.createTodo);

    return(
        <section className=''>
            <div className='overflow-scroll h-screen relative'>
                <div className={`max-w-screen-sm m-auto ${isCreateTodo ? 'opacity-0 h-96 overflow-hidden' : 'opacity-100 overflow-auto'} transition-all duration-500`}>
                    <div className="pt-10 px-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-title font-raleway">NoteWave</h1>
                                <h3 className="text-sub-title font-nunito">Elevate Your Notes: Unmatched Platform for Creation</h3>
                            </div>
            
                            <Icon icon="uiw:setting" width={24} className='text-secondary-color-neutral' />
                        </div>
            
                        <TodoElements />
                    </div>
                </div>
                <AddNoteList />
            </div>
            <DeleteNote />
        </section>
    )
}

export default MainPage
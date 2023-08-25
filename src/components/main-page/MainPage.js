import { Icon } from '@iconify/react';
import TodoElements from './TodoElements';

import { useSelector } from 'react-redux';

const MainPage = () => {
    const isCreateTodo = useSelector((state) => state.createTodo);

    return(
        <section className={`pt-10 px-5 ${isCreateTodo ? 'opacity-0 h-96 overflow-hidden' : 'opacity-100 overflow-auto'} transition-all duration-500`}>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-title font-raleway">NoteWave</h1>
                    <h3 className="text-sub-title font-nunito">Elevate Your Notes: Unmatched Platform for Creation</h3>
                </div>

                <Icon icon="uiw:setting" width={24} className='text-secondary-color-neutral' />
            </div>

            <TodoElements />
        </section>
    )
}

export default MainPage
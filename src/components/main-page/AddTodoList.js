import { Icon } from '@iconify/react';

import { useDispatch, useSelector } from 'react-redux';

const AddTodoList = () => {

    const isCreateTodo = useSelector((state) => state.createTodo);

    return (
        <div className={`bg-white z-20 absolute left-0 right-0 transition-all duration-500 ${isCreateTodo ? 'bottom-0 p-4 h-auto' : '-bottom-full h-0 p-0'}`}>
            <div className={`${isCreateTodo ? 'block' : 'hidden'}`}>
                <form action="#" className="flex flex-col space-y-4 pb-10">
                    <input type="text" name="todo-title" id="todo-title" className="input-form" placeholder="eg : Meeting with client" />
                    <input type="text" name="todo-desc" id="todo-desc" className="input-form" placeholder="Description" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Icon icon="solar:inbox-in-bold" width="24" className='text-secondary-color-neutral' />
                            <Icon icon="uis:calender" width="24" className='text-secondary-color-neutral' />
                            <Icon icon="ph:clock-fill" width="24" className='text-secondary-color-neutral' />
                            <Icon icon="material-symbols:flag" width="24" className='text-secondary-color-neutral' />
                        </div>

                        <Icon icon="fluent:send-24-filled" width="24" className='text-default-theme-color-success' />
                    </div>

                    <hr />
                </form>
            </div>
        </div>
    )

}

export default AddTodoList
import TaskAddedFrom from './TaskAddedFrom';
import TaskContainer from './TaskContainer';
import { Toaster } from 'react-hot-toast';






const AppLayout = () => {

    return (
        <div>
            <div>
                <TaskAddedFrom />

            </div>
            <div className='mt-5'>
                <TaskContainer />
            </div>
            <Toaster />
        </div>
    )
}

export default AppLayout
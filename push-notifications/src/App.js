import { BiInfoCircle } from 'react-icons/bi';
import { FaSadCry, FaSmileBeam } from 'react-icons/fa';
import PushNotifications from './PushNotifications';

function App() {
    const notifications = [
        {
            id: 1,
            icon: <FaSmileBeam />,
            message: 'The operation executed successfully.',
        },
        {
            id: 2,
            icon: <BiInfoCircle />,
            message: 'Some information about the current session.',
        },
        {
            id: 3,
            icon: <FaSadCry />,
            message: 'An error ocured while processing the command.',
        },
    ];
    return (
        <main>
            <button>Add info</button>
            <button>Add error</button>
            <button>Add success</button>
            <PushNotifications notifications={notifications} />
        </main>
    );
}

export default App;

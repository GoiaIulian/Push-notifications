import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const Notification = ({ id, icon, message, removeNotification }) => {
    return (
        <div className='notification'>
            <div className='icon'>{icon}</div>
            <div className='message'>{message}</div>
            <div className='remove'>
                <button onClick={() => removeNotification(id)}></button>
            </div>
        </div>
    );
};

export default Notification;

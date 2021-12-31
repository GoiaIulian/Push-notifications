import React, { useState } from 'react';
import { MdNotificationsActive } from 'react-icons/md';
import Notification from './Notification';

const PushNotifications = ({ notifications }) => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(true);

    const removeNotification = (id) => {
        let notificationIndex = notifications.indexOf((e) => e.id === id);
        notifications.splice(notificationIndex, 1);
    };
    return (
        <aside className='push-notifications'>
            <section
                className={`notifications-container${
                    isNotificationsOpen ? ' visible' : ''
                }`}>
                {notifications.map((item) => {
                    return (
                        <Notification
                            key={item.id}
                            id={item.id}
                            icon={item.icon}
                            message={item.message}
                            removeNotification={removeNotification}
                        />
                    );
                })}
            </section>
            <button
                className='notifications-button'
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
                {notifications.length > 0 ? (
                    <span className='number-of-notifications'>
                        {notifications.length}
                    </span>
                ) : (
                    ''
                )}
                <MdNotificationsActive />
            </button>
        </aside>
    );
};

export default PushNotifications;

import React from 'react'
import BgLinkPages from '../../components/bgLinkPages'



import MainEventList from '../../features/events/MainEventList';
import SideBarEventsList from '../../features/events/SideBarEventsList';


const EventSidebarPage = () => {
    return (
        <div className='w-full'>
            <BgLinkPages title='Event Sidebar' />


            <div className='bg-gray-50 px-2 lg:px-20 py-5 lg:py-24  gap-8' >
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
                    <MainEventList />

                    <SideBarEventsList />


                </div>

            </div>
        </div>
    )
}

export default EventSidebarPage
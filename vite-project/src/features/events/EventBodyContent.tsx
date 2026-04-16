


import AboutEvent from './AboutEvent';
import EventSideBar from './EventSideBar';

import type { EventType } from "../../types/eventType";

type Prop = {
    event: EventType
}

const EventBodyContent = ({ event }: Prop) => {
    return (
        <div className="w-full grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-12 bg-gray-50 py-5 lg:py-32">
            <AboutEvent />


            <EventSideBar event={event} />

        </div>)
}

export default EventBodyContent






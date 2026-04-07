import React from 'react'

import { useParams } from 'react-router-dom'
import { findEvent } from '../../data/events_List';
import Page404 from '../404';



import HeroEvent from '../../features/events/HeroEvent';
import EventBodyContent from '../../features/events/EventBodyContent';





const SingleEvent = () => {
    const { id } = useParams()

    const event = findEvent(+id)

    if (!event) {
        return (
            <Page404 />
        )

    }

    return (
        <div>
            {/* ----------------  HERO EVENT ------------- */}
            <HeroEvent event={event} />
            {/* ----------------  HERO EVENT ------------- */}

            {/* ----------------  EventBodyContent EVENT ------------- */}
            <EventBodyContent event={event} />
            {/* ----------------  EventBodyContent EVENT ------------- */}

        </div>
    )
}

export default SingleEvent
import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import './FeaturedRoom.css';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });
        return (
            <section className="featured-rooms">
                <Title title="Our Featured Rooms" />
                <div className="featured-rooms-center">
                    {loading?<Loading/> :rooms}
                </div>
            </section>
        )
    }
}

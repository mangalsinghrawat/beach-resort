import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'
import './Services.css'

export class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Cocktails",
                info: 'We Offer Wide Range of Variety On Cocktails.'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking ",
                info: 'Our Resorts Are Located Near By Hiking Areas.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'We Offer Free Pickups facilitie'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer ",
                info: 'We have Bar Sections Whare We Offer Beers Too.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Our Services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Services

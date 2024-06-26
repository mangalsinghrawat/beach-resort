import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'
import './Services.css'

export class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Megni, corporis!'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking ",
                info: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Megni, corporis!'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Megni, corporis!'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer ",
                info: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Megni, corporis!'
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

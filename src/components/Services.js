import React, { Component } from 'react'
import Title from './Title'
import{FaCocktail,FaHiking,FaShuttleVan, FaSwimmingPool} from "react-icons/fa";
export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'Malls are great places to shop; I can find everything I need under one roof.'
            },
            {
                icon:<FaHiking/>,
                title:"Endles Hiking",
                info:'Malls are great places to shop; I can find everything I need under one roof.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:'Malls are great places to shop; I can find everything I need under one roof.'
            },
            {
                icon:<FaSwimmingPool/>,
                title:"Large Pool",
                info:'Malls are great places to shop; I can find everything I need under one roof.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title='services'/>  
            <div className="services-center">
               {this.state.services.map((item,index) =>{
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

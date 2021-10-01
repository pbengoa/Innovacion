import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from '../carousel/Slider';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from './timeLineElements';
import './homepage.css';

function Home () {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return(
        <div className="root">
            <Slider />
            <div className="first-items">
                <h2>Services</h2>
                <h3>lorumdkjfvndkjfvnfdkj fbfgr</h3>
                <div className="second-items">
                    <div className='col-md-4'>
                        <img src='/Imgs/saveWater2.jpg' className='image-icon'></img>
                        <h4 className='my-3'>Ahorro de agua</h4>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src='/Imgs/img2.jpg' className='image-icon'></img>
                        <h4 className='my-3'>Mejorar la producción</h4>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src='/Imgs/img3.jpg' className='image-icon'></img>
                        <h4 className='my-3'>Ayuda al planeta</h4>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>

            </div>
            <div className='third-items'>
                <h2>Nuestro Viaje<i class="fas fa-paper-plane"></i></h2>
                <VerticalTimeline className="timeline">
                    {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                        {showButton && (
                            <a
                            className={`button ${
                                isWorkIcon ? "workButton" : "schoolButton"
                            }`}
                            href="/"
                            >
                            {element.buttonText}
                            </a>
                        )}
                        </VerticalTimelineElement>
                    );
                    })}
                </VerticalTimeline>

                </div>
            
        </div>

    )
}
export default Home;
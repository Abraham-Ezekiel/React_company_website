import React, { useState, useEffect, useRef } from 'react'
import "./Achievement.css"
import  { FaAward, FaDiagramProject, FaUsersLine } from 'react-icons/fa6'
import Odometer from 'react-odometerjs'
import { GiTeamIdea } from 'react-icons/gi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';



const Achievement = () => {
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [teams, setTeams] = useState(0);
    const [awards, setAwards] = useState(0);
    const container = useRef(null);

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClients(120);
            setProjects(150);
            setTeams(44);
            setAwards(89);
        },3000);

        return ()=> clearTimeout(timeOutId);
    }, [])

    useGSAP(()=>{
        const timeline = gsap.timeline();
        timeline
        .from(
            ".achievement",
            {
                delay:1.5,
                x:100,
                stagger:.5,
                opacity:0,
            }
        )
    },{scope:container})

  return (
    <div className='achievement_container' ref={container}>
        {/* Achievement Begins */}
        <div className="achievement">
            <div className="icon_container">
                <FaUsersLine/>
            </div>
            <div className="details">
                <div className="count_row">
                    <Odometer value={clients} className='title'/>
                    <h1 className='g-text title'>k</h1>
                </div>
                <div className="small text_muted">Happy Customers</div>
            </div>
        </div>
         {/* Achievement ends */}

         {/* Achievement Begins */}
        <div className="achievement">
            <div className="icon_container">
                <FaDiagramProject/>
            </div>
            <div className="details">
                <div className="count_row">
                    <Odometer value={projects} className='title'/>
                    <h1 className='g-text title'>+</h1>
                </div>
                <div className="small text_muted">Completed Projects</div>
            </div>
        </div>
         {/* Achievement ends */}

         {/* Achievement Begins */}
        <div className="achievement">
            <div className="icon_container">
                <GiTeamIdea/>
            </div>
            <div className="details">
                <div className="count_row">
                    <Odometer value={teams} className='title'/>
                    <h1 className='g-text title'>+</h1>
                </div>
                <div className="small text_muted">Expert Workers</div>
            </div>
        </div>
         {/* Achievement ends */}

         {/* Achievement Begins */}
        <div className="achievement">
            <div className="icon_container">
                <FaAward/>
            </div>
            <div className="details">
                <div className="count_row">
                    <Odometer value={awards} className='title'/>
                    <h1 className='g-text title'>+</h1>
                </div>
                <div className="small text_muted">Awards Winning</div>
            </div>
        </div>
         {/* Achievement ends */}
    </div>
  )
}

export default Achievement

'use client'
import { useState } from 'react';
import SliderControls from "./SliderControls"
import { projects } from '@/data/projects';
import style from './project.module.css';
import Link from "next/link";

export default function Showcase(){
    const [activeId, setActiveId] = useState(projects[0].id);
    const index = projects.findIndex(p => p.id === activeId);

    return(
        <section className={style.projects}>
            <div className={style.sliderViewport}>
                <div className={style.sliderTrack} 
                    style={ {  transform : `translateX(-${index * 100}% )`}} >
                    { projects.map((p, i) => 
                                    <article className={`${style.project} ${index === i ? style.active : ""}`} key={p.id}>
                                        <img src={p.image}/>
                                        <p> {p.title} </p>
                                        <Link href={`/projects/${p.slug}`}> View details </Link>
                                    </article>
                                    ) 
                }
                </div>
            </div>
            <SliderControls total = {projects.length} id = {activeId} setId = {setActiveId}/>
        </section>
    )
}
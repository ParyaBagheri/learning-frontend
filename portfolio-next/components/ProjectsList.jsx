'use client'
import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function ProjectsList() {
    const [open, setOpen] = useState(true);
    const [tabActive, setTabActive] = useState(true);

    return(
        <section className='card' id='projects' onClick={() => setTabActive(a => !a)}>
            <h4>Projects
                <button className='drop-down' type='button' onClick={()=> setOpen(o => !o)}>▾</button>
            </h4>
            <div className={`tab ${tabActive ? 'active' : ''}`}>
                <ul className={`projects-list ${open ? 'open' : ''}`}>
                    {projects.map(p => <li key={p.id}> {p.title} </li>)}
                </ul>
                <Link className='button' href="/projects">
                    View projects <span> → </span>
                </Link>
            </div>
        </section>
    )
}
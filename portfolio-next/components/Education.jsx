'use client'
import { useState } from "react";

export default function Education() {

    const [tabActive, setTabActive] = useState(false);

    return (
        <section className="card" id="education" onClick={() => setTabActive(a => !a)}>
            <h4>Education</h4>
            <div className={`tab ${tabActive ? "active" : ""}`}>
                <p>details about my education</p>
                <h5>courses I took:</h5>
                <ul>
                    <li>BP</li>
                    <li>AP</li>
                    <li>Linear Algebra</li>
                    <li>Logic</li>
                </ul>
            </div>
        </section>
    )
}
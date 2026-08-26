'use client'
import { useState  } from "react";


export default function Workexp() {
    const [tabActive, setTabActive] = useState(false);

    return (
        <section className="card" id="workexp" onClick={() => setTabActive(a => !a)}>
            <h4>Work Experience</h4>
            <div className={`tab ${tabActive ? "active" : ""}`} >
                <p>This is my work Experience</p>
                <a target="_blank">Visit my profile</a>
                <div className="oswork">
                    <h4>OpenSource Work</h4>
                    <p>These are my opensource works</p>
                    <a href="https://github.com/ParyaBagheri" target="_blank">Visit my GitHub profile</a>
                </div>
            </div>
        </section>
    )
}
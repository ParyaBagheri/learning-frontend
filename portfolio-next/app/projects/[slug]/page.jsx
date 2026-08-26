import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import styles from "./projectpage.module.css"

export default async function ProjectPage({ params }){
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    return(
        <div className={styles.main}>
            <h1>{ project.title }</h1>
            <img src={ project.image } alt={ project.title}/>
        </div>
    );


}
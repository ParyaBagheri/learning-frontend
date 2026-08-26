//for pagination in mobile view
import styles from './project.module.css';

export default function SliderControls({total, id = 0, setId}) {

    return(
        <div className={styles.projectsControls}>
            <button className="previous-project" 
                    type="button" 
                    aria-label="Show previous project"
                    onClick={
                        () => setId(i => (Math.max((i - 1), 0)))
                    }> ← previous </button>
            <p className="view-counter">
                <span className="current-project"> {id + 1} </span>
                /
                <span className="total-projects"> {total.toString()} </span>
            </p>
            <button className="next-project" 
                    type="button" 
                    aria-label="Show next project"
                    onClick={
                        () => setId(i =>(Math.min((id + 1), total - 1)))
                    }> next → </button>
        </div>
    )
}
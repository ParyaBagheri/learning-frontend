import Image from "next/image";
import ProjectsList from '@/components/ProjectsList';
import Workexp from '@/components/WorkExp';
import Education from '@/components/Education';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <>
      <div className="container">
        <ProjectsList />
        <Workexp />
        <Education />
      </div>
      <Contact />
    </>
  );
}
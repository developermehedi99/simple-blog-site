import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturesJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    const handleShowAllJobs =()=>{
        setDataLength(jobs.length)
    }

    return (
        <div>
            <div className="text-center mt-8">
            <h1 className="font-extrabold text-4xl">Feature jobs</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam voluptate quia placeat ab. Eveniet deleniti aut provident enim ducimus consectetur impedit incidunt perspiciatis. Sit similique minima laudantium nesciunt necessitatibus.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 my-12">
            {
                jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
            </div>
            <div className={ dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={handleShowAllJobs} className="bg-green-600 py-2 px-6 rounded-md mb-7">show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturesJobs;
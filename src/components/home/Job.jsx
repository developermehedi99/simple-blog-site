
const Job = ({job}) => {
    const {logo, job_title, company_name,location,job_type,salary,remote_or_onsite} = job;
    return (
        <div >
            <img className="w-[260px]" src={logo} alt="" />
            <h2>{job_title}</h2>
            <h3>{company_name}</h3>
            <div className="flex gap-5">
            <p className="border-2 border-cyan-800 px-2 rounded-md">{job_type}</p>
            <p className="border-2 border-cyan-800 px-2 rounded-md">{remote_or_onsite}</p>
            </div>
            <div className="flex gap-10 my-2">
                <p>{location}</p>
                <p>salary: {salary}</p>
            </div>
            <button className="text-white font-semibold bg-cyan-800 py-2 px-5 rounded-md">Details</button>
        </div>
    );
};

export default Job;
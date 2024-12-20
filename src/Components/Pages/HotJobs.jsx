import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))

    },[])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-col-3 lg:grid-col-4 gap-4 p-10'>
           {
            jobs.map(job=><HotJobsCard key={job._id} job={job}></HotJobsCard>)
           }
            
        </div>
    );
};

export default HotJobs;
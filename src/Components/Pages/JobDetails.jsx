import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
   
    return (
        <div className='border-2 w-[500px] h-[300px] mx-auto p-8 text-center rounded-xl mt-8'>
           <h2 className='text-2xl font-bold mb-2'>Job Details {job?.title}</h2>
           <p className='text-xl font-semibold mb-2'>Apply for : {job?.company}</p>
           <p className='text-xl font-semibold'>Deadline : {job?.applicationDeadline}</p>
          <Link to={`/jobApply/${job?._id}`}>
          <button className='btn bg-blue-400 text-white mt-12'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;
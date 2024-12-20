import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HotJobsCard = ({job}) => {

    return (
       <div className="border-2 p-8 rounded-xl ">
         <div className='flex items-cente gap-4'>
            <div className="">
                <img src={job?.company_logo} className='w-12' alt="" />
                 </div>
                 <div className="">
                    <h1 className='font-bold text-2xl'>{job?.company}</h1>
                    <p>{job?.location}</p>
                 </div>

                 

                 
            
        </div>
        <div className="flex items-center justify-between">
                    <div className="">
                        <h2 className='text-xl font-bold'>{job?.category}</h2>

                    </div>
                    <div className="">
                        <button className='btn bg-pink-500 text-white  rounded-full'>New</button>

                    </div>
                 </div>
                 <p className='mt-3 mb-3'>{job?.description}</p>
                 <div className="flex gap-2 flex-wrap">
                    {
                        job?.requirements.map((skill,index)=><p key={index} className='border rounded-md text-center px-2 hover:text-purple-300 hover:bg-purple-600'>{skill}</p>)
                    }
                 </div>
                 <div className="flex justify-between items-center mt-3">
                 <div className="">
                    <p>{job?.salaryRange.min}-{job?.salaryRange.max} {job?.salaryRange.currency}</p>
                 </div>
                 <div className="">
                <Link to={`/jobs/${job?._id}`}> <button className='btn bg-blue-400 text-white '>Apply</button></Link>
                 </div>
                 </div>
       </div>
    );
};

export default HotJobsCard;
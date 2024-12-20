import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authorizedContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {user} = useContext(authorizedContext)
    const [data,setData] = useState({})
    const {id} = useParams()

    useEffect(()=>{
      fetch(`http://localhost:4000/jobs/${id}`)
      .then(res=>res.json())
      .then(data=>setData(data))
      
    },[])
    const { title,company_logo,location,applicationDeadline,company} = data || {}
   
    const formSubmitHandler = (e)=>{

        e.preventDefault();
        const linkedIn = e.target.linkedIn.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;
        
        const jobApplicationInfo = {
            job_id : id,
            applicant_email : user?.email,
            linkedIn,
            github,
            resume,
            title,
            company_logo,
            location,
            applicationDeadline,
            company


        }

        fetch (`http://localhost:4000/job-Application`,{
            method : "POST",
            headers : {
                'content-type' : "application/json"

            },
            body : JSON.stringify(jobApplicationInfo)
            
        })

        .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        title: "save job Application",
                        icon: "success",
                        draggable: true
                      });
                }
               
            })

    }
    return (
        <div>
             <div class="card bg-base-100 w-full text-center shrink-0 shadow-2xl">
      <form onSubmit={formSubmitHandler} class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">LinkedIn</span>
          </label>
          <input type="url" placeholder="Enter your LinkedIn" name="linkedIn" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Github</span>
          </label>
          <input type="url" placeholder="Enter your github" name="github" class="input input-bordered" required />
         
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Resume</span>
          </label>
          <input type="url" placeholder="Enter your Resume" name="resume" class="input input-bordered" required />
         
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
            
        </div>
    );
};

export default JobApply;
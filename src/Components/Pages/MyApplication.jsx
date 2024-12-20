import React, { useContext, useEffect, useState } from "react";
import { authorizedContext } from "../AuthProvider";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyApplication = () => {
  const { user } = useContext(authorizedContext);
  const [jobs, setJobs] = useState([]);
 

  useEffect(() => {
    fetch(`http://localhost:4000/job-Application?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  const deleteBtnHandler = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/job-Application/${id}`,{
          method : "DeLETE"
        })
        .then(res=>res.json())
        .then(data=>{
          const remining = jobs.filter(item=>item?._id !== id)
          setJobs(remining)
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your aollication delete.",
          icon: "success"
        });
      }
    });

  }


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Logo</th>
              <th>Name</th>
              <th>company</th>
              <th>applicationDeadline</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>
                    <img src={item?.company_logo} alt="" />
                </td>
                <td>{item?.title}</td>
                <td>{item?.company}</td>
                <td>{item?.applicationDeadline}</td>
                <td><button onClick={()=>deleteBtnHandler(item?._id)} className=" text-red-600 text-2xl"><MdDelete /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;

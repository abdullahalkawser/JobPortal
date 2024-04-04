import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const JobCrads = ({ item }) => {
  const { title, company, type, experience, location, skills,id } = item;
  console.log(item.title);



  return (
    <div>
      <div className="mx-40 mb-5">
        <div className="bg-zinc-200 rounded-md py-7 ">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-lg font-semibold">
              {title} - {company}
            </h1>
            <p>
              {type} {item.experience} {location}
            </p>
            <div className="flex items-center gap-2">
              {skills.map((skill, index) => (
          
                <p
                  key={index}
                  className="text-gray-500 py-1 px-3 border border-red-50"
                >
                  {skill}
                </p>
              ))}
            </div>

          
          





        
          </div>
     

          <div className="flex justify-center  mt-10 mr-10">
               <div  className=" mr-10">
       <Link>
         {/* Use Link component with 'to' prop to specify destination route */}
         <Link to={`/details/${id}`}>
                <button
               
                  className="btn btn-accent text-white"
                >
                  Details
                </button>
              </Link>
       </Link>
               </div>
               <div>
               <Link to={`/apply/${id}`}>
                <button
               
                  className="btn btn-accent text-white"
                >
                Apply
                </button>
              </Link>
               </div>
            </div>





        </div>
        
      </div>
    </div>
  );
};

export default JobCrads;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { facilities } from "../../data";
import './type.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// Extend Day.js with the relativeTime plugin
dayjs.extend(relativeTime);

const CreateJob = () => {
  const currentDate = dayjs();
  const pastDate = currentDate.subtract(1, 'day'); // Subtract 1 day from the current date
  const datess = pastDate.from(currentDate);
  const [type, setType] = useState("");

     /* AMENITIES */
     const [amenities, setAmenities] = useState([]);

     const handleSelectAmenities = (facility) => {
       if (amenities.includes(facility)) {
         setAmenities((prevAmenities) =>
           prevAmenities.filter((option) => option !== facility)
         );
       } else {
         setAmenities((prev) => [...prev, facility]);
       }
     };
         console.log(amenities)


  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const onSubmit = async (data) => {
    try {
      data.postDate = datess; // Formatting the current date
      data.amenities = amenities;
      const response = await fetch(`http://localhost:3000/careatejob`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // sending form data instead of `user`
      });

      const responseData = await response.json();

      console.log(responseData);

      if (responseData.acknowledged === true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data is submitted",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error gracefully, show a message to the user, etc.
    }
  };
  return (
    <div>
      <div>
        <div>
          <div className="p-10 mb-10">
          <h1 className="text-center text-5xl text-white font-bold">Create a Job for Jober</h1>
        
            <div className="p-24">
           
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Row 1 */}
                <div className="flex">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text text-[20px] text-white">
                       Company Name **
                      </span>
                    </label>
                    <input
                      {...register("jobTitle", { required: true })}
                      type="text"
                      placeholder="Company Name*"
                      className="input input-bordered w-full"
                    />
                    {errors.jobTitle && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text text-[20px] text-white">
                        Country**
                      </span>
                    </label>
                    <input
                      {...register("country", { required: true })}
                      type="text"
                      placeholder="Country*"
                      className="input input-bordered w-full"
                    />
                    {errors.country && <span className="text-red-500">This field is required</span>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text text-[20px] text-white">
                        City**
                      </span>
                    </label>
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      placeholder="City*"
                      className="input input-bordered w-full"
                    />
                    {errors.city && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text text-[20px] text-white">
                        Location**
                      </span>
                    </label>
                    <input
                      {...register("location", { required: true })}
                      type="text"
                      placeholder="Location*"
                      className="input input-bordered w-full"
                    />
                    {errors.location && <span className="text-red-500">This field is required</span>}
                  </div>
                </div>

                {/* Category and Salary */}
                <div className="flex  mb-8">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text text-[20px] text-white">Select Category**</span>
                    </label>
                    <select
                      {...register("JobType", { required: true })}
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option value="">Select Category</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Web Engineer">Web Engineer</option>
                      <option value="Data Engineer">Data Engineer</option>
                      <option value="Sintices">Sintices</option>
                    </select>
                    {errors.category && <span className="text-red-500">This field is required</span>}
                  </div>

                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text text-[20px] text-white">Select Category**</span>
                    </label>
                    <select
                      {...register("officeType", { required: true })}
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option value="">Select Type </option>
                      <option value="Office">Office</option>
                      <option value="onSite">onSite</option>
                      <option value="Remote">Remote</option>
                      <option value="HighBride">HighBride</option>
                    </select>
                    {errors.category && <span className="text-red-500">This field is required</span>}
                  </div>

                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text text-[20px] text-white">Select salary**</span>
                    </label>
                    <select
                      {...register("salary", { required: true })}
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option value="">Select Salary</option>
                      <option value="$100K">$100K</option>
                      <option value="$300K">$300K</option>
                      <option value="$500K">$500K</option>
                      <option value="$250K">$250K</option>
                    </select>
                    {errors.salary && <span className="text-red-500">This field is required</span>}
                  </div>
                </div>

                {/* Price */}

                <h3 class="text-xl font-semibold mb-10 text-slate-50">Select Job Skills for Your Job Candited</h3>
<div class="flex flex-wrap gap-4"> 
  {facilities?.map((item, index) => (
   <div
   className={`type ${type === item.name ? "selected" : ""} bg-white p-3`}
   key={index}
   onClick={() => {
     setType(item.name);
     handleSelectAmenities(item.name);
   }}
 >
      <div class="text-gray-700">{item.icon}</div>
      <p class="font-semibold">{item.name}</p>
    </div>
  ))}
</div>
                
                {/* Job Description */}
                <div className="mt-3 ">
                  <label className="label">
                    <span className="label-text text-[20px] text-white">Job Description*</span>
                  </label>
                  <textarea
                    {...register("description", { required: true })}
                    placeholder="Write Job Description here"
                    className="textarea w-3/5 h-[237px]"
                  ></textarea>
                  {errors.description && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Submit Button */}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-warning w-full mt-7"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;

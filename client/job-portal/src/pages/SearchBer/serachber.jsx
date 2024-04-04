import { useState,useEffect } from "react";
import data from "../../dummyData"; // Importing the data array
import JobCrads from "../jobcard/JobsCrads";






const Searchbar = () => {

    const [jobCriteria,setJobcriteria] = useState({
        title:'',
        location: '',
        exprience: '',
        type:''
    })


    const handlechanege = (e) => {
        setJobcriteria((previousValue) =>({
            ...previousValue,
            [e.target.name]: e.target.value
        }))

    };


    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);


    useEffect(() => {
        // Simulating fetching data from an API
        const fetchedJobs =  data
          
        setJobs(fetchedJobs);
        setFilteredJobs(fetchedJobs); // Initialize filtered jobs with all jobs on component mount
    }, []);

    const handleSearch = () =>{
            const filtered = jobs.filter(job =>
            job.title.toLowerCase().includes(jobCriteria.title.toLowerCase()) &&
            job.location.toLowerCase().includes(jobCriteria.location.toLowerCase()) &&
            job.experience.toLowerCase().includes(jobCriteria.exprience.toLowerCase()) &&
            job.type.toLowerCase().includes(jobCriteria.type.toLowerCase())
        );
        setFilteredJobs(filtered);
        
    }

     // This useEffect hook is triggered whenever jobCriteria changes
    //  useEffect(() => {
    //     // Filter jobs based on search criteria
    //     const filtered = jobs.filter(job =>
    //         job.title.toLowerCase().includes(jobCriteria.title.toLowerCase()) &&
    //         job.location.toLowerCase().includes(jobCriteria.location.toLowerCase()) &&
    //         job.experience.toLowerCase().includes(jobCriteria.exprience.toLowerCase()) &&
    //         job.type.toLowerCase().includes(jobCriteria.type.toLowerCase())
    //     );
    //     setFilteredJobs(filtered);
    // }, [jobCriteria, jobs]);

   
    


    return (
       <div>
         <div className='flex  md:gap-20 lg:mb-10 sm:mx-40'>
            {/* Part 1 */}
            <select onChange={handlechanege} name="title" value={jobCriteria.title}
                className='md:w-64 rounded-md py-3 bg-zinc-200 font-semibold text-center'
               
            >
                <option value="" disabled hidden>Job Role</option>
                <option value="Ios Engineer">Ios Engineer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Marketing Manager">Marketing Manager</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Junior Graphic Designer">Junior Graphic Designer</option>
            </select>

            {/* Part 2 */}
            <select
            onChange={handlechanege} name="location" value={jobCriteria.location}
                className='md:w-64rounded-md py-3 bg-zinc-200 font-semibold text-center'
               
            >
                <option value="" disabled hidden>Location</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="London">London</option>
                <option value="Tokyo">Tokyo</option>
            </select>

            {/* Part 3 */}
            <select
              onChange={handlechanege} name="exprience" value={jobCriteria.exprience}
                className='md:w-64 rounded-md py-3 bg-zinc-200 font-semibold text-center'
                
            >
                <option value="" disabled hidden>Experience Level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
           
                  {/* Part 4 */}
                  <select
                   onChange={handlechanege} name = "type" value={jobCriteria.type}
                className='md:w-64 rounded-md py-3 bg-zinc-200 font-semibold text-center'
                
            >
                <option value="" disabled hidden>Type</option>
                <option value="Remot">Remot</option>
                <option value="onSite">onSite</option>
                <option value="Higbride">Higbride</option>
            </select>

            {/* Search button */}
            <button onClick={handleSearch} className='md:w-64 text-white font-bold py-4 rounded-md bg-blue-500' >Search</button>
        
    
        </div>

        {
                   filteredJobs.map(itmdata =>(
                    <JobCrads item={itmdata}></JobCrads>
                   ))
            }
       </div>
    );
};

export default Searchbar;

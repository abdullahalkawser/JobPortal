import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/Provider';

const ApplyJob = () => {
    const { user } = useContext(AuthContext);
    const [file,setFile] = useState(null)
    
    const handlefile = (e)=>{
        const resume = e.target.files[0];
        setFile(resume)

    }

    const submitJob = async (e) => {
        e.preventDefault();
        try {
            const name = e.target.elements.name.value;
            const email = e.target.elements.email.value;
            const phone = e.target.elements.phone.value;
            const coverLetter = e.target.elements.address.value;
            const resume = file

            const userData = { name, email, phone, coverLetter, resume };
          

            const response = await fetch(`http://localhost:3000/applicationjob`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            console.log(data);

            if (data.acknowledged === true) {
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
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold mb-10 text-white">Application Form</h1>
            <form className="w-full max-w-md space-y-4" onSubmit={submitJob}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium mb-2 text-white">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter Name" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium mb-2 text-white">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" defaultValue={user ? user.email : ''} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-medium mb-2 text-white">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter Phone Number" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address" className="text-sm font-medium mb-2 text-white">Address</label>
                    <textarea id="address" name="address" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" rows="4" placeholder="Write Your Cover Letter"></textarea>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="resume" className="text-sm font-medium mb-2 text-white">Select Your Resume (docx, pdf)</label>
                    <input type="file" 
                    accept='.jpg,.png, .web'
                    onChange={handlefile}
                     name="resume" className="w-full px-3 py-2 rounded-md border" />
                </div>

                <button type="submit" className="w-full py-3 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">Send Application</button>

            </form>
        </div>
    );
};

export default ApplyJob;

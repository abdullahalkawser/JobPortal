import React, { useState, useEffect } from 'react';

const AllJobs = () => {
    const [listing, setListing] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/alljobs')
            .then((res) => res.json())
            .then((data) => {
                setListing(data);
            })
            .catch((error) => {
                console.error('Error fetching application jobs:', error);
            });
    }, []);

    return (
        <div>
            <h1>Total Jobs: {listing.length}</h1>
            {/* Render the fetched data */}
            {listing.map((job) => (
                <div key={job.id} className="mx-40 mb-5">
                    <div className="bg-zinc-200 rounded-md py-7 ">
                        <div className="flex flex-col items-center gap-5">
                            <h1 className="text-lg font-semibold">
                                {job.
jobTitle} - {job.
    country}
                            </h1>
                            <p>{job.
JobType}</p>
                            {/* Render other job details as needed */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllJobs;

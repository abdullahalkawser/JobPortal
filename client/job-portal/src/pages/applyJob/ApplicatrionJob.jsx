import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/Provider';
import ApplyJobCards from './apllyjobcards';


const Applicationjon = () => {
    const {user} = useContext(AuthContext)
    const [listing, setListing] = useState([]);
    useEffect(() => {
        if (user && user.email) {
          fetch(`http://localhost:3000/applicationjob?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              setListing(data);
            })
            .catch((error) => {
              console.error('Error fetching application jobs:', error);
            });
        }
      }, [user]);
    return (
        <div>
           {listing.length}

           <div className='text-center text-4xl text-white m-10 font-bold'>
        <h1>Here is your applied job</h1>
               
       </div>
           {
            listing.map(itms =>(
       <div>
      
                <ApplyJobCards data={itms}></ApplyJobCards> 
       </div>
            ))
           }
        </div>
    );
};

export default Applicationjon;
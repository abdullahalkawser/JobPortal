import React from 'react';

const ApplyJobCards = ({data}) => {
    console.log(data)
    const {name,email,phone,coverLetter} = data
    return (
        <div>
             <div className="mx-40 mb-5">
   
        <div className="bg-zinc-200 rounded-md py-7 ">
          
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-lg font-semibold">
              {name} - {email}
            </h1>
            <p>
              {coverLetter}  {email}
            </p>
         

          
          





        
          </div>
     

          





     
        
      </div>
    </div>
        </div>
    );
};

export default ApplyJobCards;
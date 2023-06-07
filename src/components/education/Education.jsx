// import React from 'react'
// import './Education.css'
// import LOGO1 from '../../assets/mora-removebg-preview.png';
// import LOGO2 from '../../assets/ecu-removebg-preview.png';
// import LOGO3 from '../../assets/bcs-removebg-preview.png';
// import LOGO4 from '../../assets/vv-removebg-preview.png';
// import LOGO5 from '../../assets/vv-removebg-preview.png';

// const data= [
//   {
//     logo:LOGO1,
//     name:'University Of Moratuwa',
//     location:'Sri Lanka',
//     review:'Bsc. (Hons) in Information Technology and Management',
//     other:'GPA - 3.86',
//   },
//   {
//     logo:LOGO2,
//     name:'Edith Cowen University',
//     location:'Australia',
//     review:'BSc. in Computer Science (Major in Software Engineering)',
//     other:'GPA - 3.5',
//   },
//   {
//     logo:LOGO3,
//     name:'British Computer Soceity',
//     location:'ESOFT - Colombo 05',
//     review:'Certificate Level',
//     other:'',
//   },
//   {
//     logo:LOGO4,
//     name:'Visakha Vidyalaya',
//     location:'Colombo 05',
//     review:'G.C.E. Advanced Level',
//     other:'4 Distinction Passes (ICT, Geography,Economics,English)',
//   },
//   {
//     logo:LOGO5,
//     name:'Visakha Vidyalaya',
//     location:'Colombo 05',
//     review:'G.C.E. Ordinary Level',
//     other:'9 Disctinction Passes',
//   },
// ]


// const Education = () => {
    
//   return (
//     <section id='education'>
//       <h5>Where I learned from</h5>
//       <h2>Education</h2>

//       <div className='container education_container' >
//        {
//         data.map(({logo,name,location,review,other},index) =>{
//           return (
//             <article key={index} className='education'>
//           <div className='education_logo'>
//             <img src={logo}  alt=''/>
//           </div>
//           <div className='bla'>
//           <h5 className='education_name'>{name}</h5>
//           <small className='education_review'>{review}</small>
//           <small className='education_review'>{location}</small>
//           {/* <small className='education_review'>{other}</small> */}
//           </div>
         
//         </article>
//           )
         
//         })  
//        }
      
//       </div>
//     </section>
//   )
// }
// export default Education;

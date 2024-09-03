// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Link } from "react-router-dom";
// import { ChangeEvent, FormEvent, useState } from "react";
// import axios from "axios";
// import "./Adminsignup.css";
// import { useNavigate } from "react-router-dom";
// // import FormPageLayout from "./FormPageLayout";
// import { useRef } from "react";
// // import Button from '@material-ui/core/Button';

// function AdminSignup({ handleFile }) {
//   const [restaurant, setRestaurant] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//     // const [Image, setImage] = useState(null);
//     const hiddenFileInput = useRef(null);
  
//     const handleClick = () => {
//       hiddenFileInput.current.click();
//     };

//     const handleChange = (event) => {
//         const fileUploaded = event.target.files[0];
//         handleFile(fileUploaded);
//       };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     const res = await axios.post(
//       "http://localhost:4000/customer/signup",
//       {
//         Restaurant: restaurant,
//         email: email,
//         City: city,
//         State: state,
//         phoneNumber: phoneNumber,
//         password: password,
//       },
//       {
//         withCredentials: true, // Include credentials in the request
//       }
//     );

//     if (res.status === 200 && res.data.Success) {
//       navigate("/login");
//     } else if (
//       res.status === 200 &&
//       (res.data.existingCustomer || res.data.Errormessage)
//     ) {
//       navigate("/signup");
//     }
//   };

// //   function UploadImage() {
// //     const [fileName, setFileName] = useState(null);
  
// //     const handleImageUpload = (event) => {
// //       const selectedFile = event.target.files[0];
// //       setFileName(selectedFile.name);
// //     };
  
//   return (
//     <div className="main-signup-form-container">
//       <div className="side-image-container">
//         <img
//           className="side-image"
//           src="../images/bg-forms.png"
//           alt="A Variety of foods placed in bowls"
//         />
//       </div>
//       <div className="signup-form-container">
//         <div>
//           <Link to="/">
//             <img
//               className="img-logo"
//               src="../images/Logo.png"
//               width="156px"
//               alt="logo"
//             />
//           </Link>
//           <p className="signup-heading">Create Restaurant Account</p>
//         </div>
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <div>
//             <label>
//               <p>Name of Restaurant</p>
//               <input
//                 type="text"
//                 name="Restaurant"
//                 value={restaurant}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setRestaurant(e.currentTarget.value)
//                 }
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               <p>Email</p>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setEmail(e.currentTarget.value)
//                 }
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               <p>Address</p>
//               <input
//                 type="text"
//                 name="city"
//                 value={city}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setCity(e.currentTarget.value)
//                 }
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               <p>State</p>
//               <input
//                 type="text"
//                 name="state"
//                 value={state}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setState(e.currentTarget.value)
//                 }
//               />
//             </label>
//           </div>
//           <div>
//         <p>Upload Logo</p>
      
//       <label htmlFor="button-upload">
//        </label>      
//        <input placeholder="Upload an Image" className="button-upload" id="button-upload" onClick={handleClick} 
//         type="file"  accept="image/*"
//         style={{ border: 'none', padding:'0px', margin:'0px'}}
//         onChange={handleChange}
//         ref={hiddenFileInput}
//       />    
//       </div>
//           <div>
//             <label>
//               <p>Phone Number</p>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={phoneNumber}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setPhoneNumber(e.currentTarget.value)
//                 }
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               <p>Password</p>
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setPassword(e.currentTarget.value)
//                 }
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               <p>Confirm Password</p>
//               <input type="password" name="password" />
//             </label>
//           </div>
//           {/* <div className="divider">
//             <div></div>
//             <p>OR</p>
//             <div></div>
//           </div> */}
//           <div className="btn-container">
//             {/* <button className="google-signin-btn">
//               <img src="../images/google-color-svgrepo-com.svg" />
//               Sign in with Google
//             </button> */}
//             <button type="submit" className="submit-btn">
//               SIGNUP
//             </button>
//           </div>
//           <p className="signin-paragraph">
//             Already have an account ?
//             <Link to="/login">
//               <span className="login-el"> Log In here </span>
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default AdminSignup;

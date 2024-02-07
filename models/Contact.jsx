import React from "react";
import "./index.css";

function Contact({ closeForm }) {
  return (
    <div className="flex flex-row items-center justify-center fixed inset-0  bg-opacity-50 form-div">
      <div className="popup-form absolute mt-12 text-white  bg-red-500">
        <form className="w-100 md:w-96 space-y-6  p-8 rounded-xl  bg-red-500">
          <h1 className="text-2xl font-semibold  text-white  text-center">Book Now</h1>
          <div className="flex flex-col">
            <input
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="first Name"
              className="py-3 px-2 bg-slate-600  rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              className="py-3 px-2 bg-white  rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter Email"
              className="py-3 px-2 bg-white  rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Enter Number"
              className="py-3 px-2 bg-white  rounded-lg"
            />
          </div>
          <div className="flex gap-20 form-btns">
            <button  className="bg-slate-600 text-white  rounded-md hover:text-red-600 transition duration-300 ease-in-out ">Book Appointment</button>
            <button
              className="bg-slate-600 text-white  rounded-md hover:text-red-600 transition duration-300 ease-in-out "
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>

    // <div class="h-screen w-200 md:w-96 mt-80 flex justify-center items-center  bg-black  popup-form popup-div ">
    //   <form className=" w-200 md:w-96 space-y-6 mt-10  bg-black  ">
    //     <div class="bg-white px-10 py-8 my-10 space-y-6 rounded-xl w-screen shadow-md max-w-sm">
    //       <div class="space-y-1.5 my-10 form-fields">
    //         <h1 className="text-4xl font-semibold text-center">Book Now</h1>
    //         <div className="my-10  space-y-6  flex justify-center items-center">
    //           <input
    //             type="text"
    //             class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
    //             name="userFirstName"
    //             id="userFirstName"
    //             placeholder="first Name "
    //           />
    //         </div>
    //         <div className="mt-10  space-y-6 flex justify-center items-center">
    //           <input
    //             type="text"
    //             class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
    //             name="userLastName"
    //             id="userLastName"
    //             placeholder="Last Name"
    //           />
    //         </div>
    //         <div className="mt-10  space-y-6 flex justify-center items-center">
    //           <input
    //             class="bg-indigo-50 px-4 py-2 my-2 outline-none rounded-md w-full"
    //             type="email"
    //             name="userEmail"
    //             id="userEmail"
    //             placeholder="Enter Email"
    //           />
    //         </div>
    //         <div className="flex justify-center items-center">
    //           <input
    //             type="text"
    //             class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
    //             name="userNumber"
    //             id="userNumber"
    //             placeholder="Enter Number"
    //           />
    //         </div>
    //         <div className="flex justify-center items-center">
    //           <button className="bg-slate-600 text-white px-10 py-2 rounded-md hover:text-red-600 transition duration-300 ease-in-out ">Book Appointment</button>
    //           <button
    //             className="bg-slate-600 text-white px-10 py-2 rounded-md hover:text-red-600 transition duration-300 ease-in-out "
    //             onClick={closeForm}
    //           >
    //             €close
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Contact;

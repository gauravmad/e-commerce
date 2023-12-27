import React,{useState} from "react";
import "../styles/Contact.module.css";
import { saveContactFormData } from "../lib/client";

const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await saveContactFormData(formData);
    console.log('Saved to Sanity:', result);
  };

  return (
    <div className="w-[50%] mx-auto py-[6vh]">

      <form onSubmit={handleSubmit}>
        
        <div className="mt-[6vh] border-2 border-black bg-red-400">
          <input 
            type="text" 
            placeholder="Enter Full Name" 
            className="input w-full p-[2vh] focus:outline-none" 
          />
        </div>

        <div className="mt-[4vh] border-2 border-black bg-red-400">
          <input 
            type="text" 
            placeholder="Enter Email Address" 
            className="input w-full p-[2vh] focus:outline-none" 
          />
        </div>

        <div className="mt-[4vh] border-2 border-black bg-red-400">
          <input 
            type="text" 
            placeholder="Enter Phone Number" 
            className="input w-full p-[2vh] focus:outline-none" 
          />
        </div>

        <div className="mt-[4vh] border-2 border-black bg-red-400">
          <input 
            type="text" 
            placeholder="Enter Message" 
            className="input w-full p-[2vh] focus:outline-none" 
          />
        </div>

        <div className="mt-[4vh] bg-black text-white p-[1.5vh] px-[3vh] text-[2.5vh] font-semibold">
          <button>
            Send Message
          </button>
        </div>
      </form>

    </div>
  );
};

export default Contact;

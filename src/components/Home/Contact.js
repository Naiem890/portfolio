import React from "react";
import {
  AtSymbolIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t1z0wta",
        "template_bu4p9xt",
        e.target,
        "GKJcxYuHvXYyeU3Os"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email Send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast("Error Occurred");
        }
      );

    e.target.reset();
  };

  return (
    <div
      className="min-h-screen py-10 px-6 flex justify-center items-center xl:px-20 text-white bg-gray-700 "
      id="contact"
    >
      {/* <h2 className="text-5xl  font-Kdam text-center mt-6 ">Contact Me</h2> */}
      <div className=" border-2 rounded-xl overflow-hidden border-gray-500 max-w-6xl mx-auto">
        <div class="grid grid-cols-8">
          <div class="col-span-full md:col-span-3 py-10 pl-4 xl:pl-10 pr-4 bg-gray-600">
            <h3 className="text-4xl font-Kdam font-bold">Let's get in touch</h3>
            <p class="text-xl text-gray-400 font-medium mt-6 mb-9">
              I'm open for talk about project or just to have a chat.
            </p>
            <div className="flex gap-4 items-center text-lg font-semibold mt-6">
              <div className="w-12 border h-12 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all hover:text-gray-600 cursor-pointer">
                <LocationMarkerIcon className="w-6"></LocationMarkerIcon>
              </div>
              <p>
                Osmany Hall,
                <br />
                Mirpur DOHS, Dhaka.
              </p>
            </div>
            <div className="flex gap-4 items-center text-lg mt-6">
              <div className="w-12 border h-12 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all hover:text-gray-600 cursor-pointer">
                <PhoneIcon className="w-6"></PhoneIcon>
              </div>
              <a href="tel:01790732717" className="font-semibold">
                +8801790-732717
              </a>
            </div>
            <div className="flex gap-4 items-center text-lg mt-6">
              <div className="w-12 border h-12 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all hover:text-gray-600 cursor-pointer">
                <AtSymbolIcon className="w-6"></AtSymbolIcon>
              </div>
              <a
                target="_blank"
                href="mailto:solaiman.naiem890@gmail.com"
                className="font-semibold"
                rel="noreferrer"
              >
                solaiman.naiem890@gmail.com
              </a>
            </div>
            <div className="flex gap-4 items-center text-lg mt-6">
              <div className="w-12 border h-12 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all hover:text-gray-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className=" hover:fill-black fill-white transition-all"
                >
                  {" "}
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </div>
              <a
                target="_blank"
                href="https://github.com/Naiem890"
                className="font-semibold"
                rel="noreferrer"
              >
                Naiem890
              </a>
            </div>
            <div className="flex gap-4 items-center text-lg mt-6">
              <div className="w-12 border h-12 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all hover:text-gray-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="hover:fill-black fill-white transition-all"
                  //   style={ "fill":white;}
                >
                  <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                </svg>
              </div>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/solaiman-islam-naiem-7540941b6/"
                className="font-semibold"
                rel="noreferrer"
              >
                solaiman-islam-naiem
              </a>
            </div>
          </div>
          <div class="col-span-full md:col-span-5 p-10">
            <h3 className="text-4xl font-Kdam font-bold">Send Me Message</h3>

            <form
              action=""
              onSubmit={sendEmail}
              className="mt-14 flex gap-4 flex-col"
            >
              <div>
                <label for="name" className="block opacity-60 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input input-bordered text-xl h-16 bg-slate-600 w-full mt-2"
                  placeholder="eg: Joe Brown"
                  required
                />
              </div>
              <div>
                <label for="email" className="block opacity-60 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input input-bordered text-xl h-16 bg-slate-600 w-full mt-2"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div>
                <label for="message" className="block opacity-60 font-semibold">
                  Message
                </label>
                <textarea
                  name="comment"
                  className="textarea textarea-bordered text-xl  bg-slate-600 w-full mt-2"
                  placeholder="Write here..."
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" class="btn px-7">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

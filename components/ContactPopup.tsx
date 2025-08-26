// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import emailjs from "@emailjs/browser";

// export default function ContactPopup() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const modalRef = useRef<HTMLDivElement>(null); // Type as HTMLDivElement

//   // Effect for handling click outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
//       !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
//       !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//     ) {
//       alert("❌ EmailJS configuration is missing. Please check environment variables.");
//       return;
//     }

//     emailjs
//       .send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//         form,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           alert("✅ Message sent successfully!");
//           setIsOpen(false);
//           setForm({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           alert("❌ Failed to send: " + error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
//       >
//         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//         <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//           Contact me
//         </span>
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
//           <div ref={modalRef} className="w-96 bg-white/90 rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send me a message</h2>
//             <form onSubmit={sendEmail} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 required
//               />
//               <textarea
//                 placeholder="Your Message"
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent h-24 resize-none"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
//               >
//                 Send
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsOpen(false)}
//                 className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200"
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
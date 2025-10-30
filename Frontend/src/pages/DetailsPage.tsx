// // // // import  React, { useState } from 'react';
// // // // import Navbar from '../components/Navbar';
// // // // import { ArrowLeft } from 'lucide-react';

// // // // interface DetailsPageProps {
// // // //   onBack: () => void;
// // // // }

// // // // const DetailsPage: React.FC<DetailsPageProps> = ({ onBack }) => {
// // // //   const [selectedDate, setSelectedDate] = useState('Oct 22');
// // // //   const [selectedTime, setSelectedTime] = useState('07:00 am');
// // // //   const [quantity, setQuantity] = useState(1);

// // // //   const dates = ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'];
// // // //   const times = ['07:00 am', '9:00 am', '11:00 am', '1:00 pm'];

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50">
// // // //       <Navbar />
      
// // // //       <div className="max-w-7xl mx-auto p-8">
// // // //         <button onClick={onBack} className="flex items-center mb-6 text-gray-600 hover:text-gray-800">
// // // //           <ArrowLeft className="w-4 h-4 mr-2" />
// // // //           Details
// // // //         </button>

// // // //         <div className="flex gap-8">
// // // //           <div className="flex-1" style={{ width: '765px' }}>
// // // //             <img 
// // // //               src="https://images.unsplash.com/photo-1734438237000-d3a70f1e4e88?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxrYXlha2luZyUyMGFkdmVudHVyZSUyMG91dGRvb3IlMjBhY3Rpdml0eSUyMHdhdGVyJTIwc3BvcnRzfGVufDB8fHx8MTc2MTczMjM5NXww&ixlib=rb-4.1.0&fit=fillmax&h=381&w=765"
// // // //               alt="Kayaking"
// // // //               className="rounded-xl object-cover"
// // // //               style={{ width: '765px', height: '381px' }}
// // // //             />
// // // //           </div>

// // // //           <div className="bg-gray-100 rounded-xl p-6 flex flex-col gap-6" style={{ width: '387px', height: '303px' }}>
// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-sm text-gray-600">Starts at</span>
// // // //               <span className="text-lg font-bold">₹999</span>
// // // //             </div>

// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-sm text-gray-600">Quantity</span>
// // // //               <div className="flex items-center gap-3">
// // // //                 <button 
// // // //                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
// // // //                   className="w-6 h-6 bg-white rounded border flex items-center justify-center text-sm"
// // // //                 >
// // // //                   -
// // // //                 </button>
// // // //                 <span className="text-lg font-bold">{quantity}</span>
// // // //                 <button 
// // // //                   onClick={() => setQuantity(quantity + 1)}
// // // //                   className="w-6 h-6 bg-white rounded border flex items-center justify-center text-sm"
// // // //                 >
// // // //                   +
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-sm text-gray-600">Subtotal</span>
// // // //               <span className="text-lg font-bold">₹{999 * quantity}</span>
// // // //             </div>

// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-sm text-gray-600">Taxes</span>
// // // //               <span className="text-lg">₹69</span>
// // // //             </div>

// // // //             <hr className="border-gray-300" />

// // // //             <div className="flex justify-between items-center">
// // // //               <span className="text-lg font-bold">Total</span>
// // // //               <span className="text-xl font-bold">₹{(999 * quantity) + 69}</span>
// // // //             </div>

// // // //             <button className="w-full bg-gray-400 text-white py-2 rounded-lg text-sm">
// // // //               Confirm
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         <div className="mt-8" style={{ width: '765px' }}>
// // // //           <div className="bg-white rounded-xl p-8 space-y-8">
// // // //             <div>
// // // //               <h1 className="text-2xl font-bold mb-2">Kayaking</h1>
// // // //               <p className="text-gray-600 text-sm">
// // // //                 Curated small-group experience. Certified guide. Safely first with gear included. Helmet and Life jackets along with an expert will accompany in kayaking.
// // // //               </p>
// // // //             </div>

// // // //             <div>
// // // //               <h3 className="text-lg font-semibold mb-4">Choose date</h3>
// // // //               <div className="flex gap-2">
// // // //                 {dates.map((date) => (
// // // //                   <button
// // // //                     key={date}
// // // //                     onClick={() => setSelectedDate(date)}
// // // //                     className={`px-3 py-2 rounded text-sm ${
// // // //                       selectedDate === date 
// // // //                         ? 'bg-yellow-400 text-black font-semibold' 
// // // //                         : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// // // //                     }`}
// // // //                   >
// // // //                     {date}
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             <div>
// // // //               <h3 className="text-lg font-semibold mb-4">Choose time</h3>
// // // //               <div className="flex gap-2">
// // // //                 {times.map((time) => (
// // // //                   <button
// // // //                     key={time}
// // // //                     onClick={() => setSelectedTime(time)}
// // // //                     className={`px-3 py-2 rounded text-sm ${
// // // //                       selectedTime === time 
// // // //                         ? 'bg-yellow-400 text-black font-semibold' 
// // // //                         : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// // // //                     }`}
// // // //                   >
// // // //                     {time}
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //               <p className="text-xs text-gray-500 mt-2">All times are in IST (GMT +5:30)</p>
// // // //             </div>

// // // //             <div>
// // // //               <h3 className="text-lg font-semibold mb-2">About</h3>
// // // //               <p className="text-sm text-gray-600">
// // // //                 Experience pristine, turquoise waters and whitest fishing. Minimum age 18.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DetailsPage;
 




// // // import React, { useState } from 'react';
// // // import Navbar from '../components/Navbar';
// // // import { ArrowLeft } from 'lucide-react';

// // // interface DetailsPageProps {
// // //   onBack: () => void;
// // // }

// // // const DetailsPage: React.FC<DetailsPageProps> = ({ onBack }) => {
// // //   const [selectedDate, setSelectedDate] = useState('');
// // //   const [selectedTime, setSelectedTime] = useState('');
// // //   const [quantity, setQuantity] = useState(1);

// // //   const dates = ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'];
// // //   const times = ['07:00 am', '9:00 am', '11:00 am', '1:00 pm'];

// // //   const isConfirmActive = selectedTime !== ''; // confirm turns yellow when time is selected

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <Navbar />

// // //       <div className="max-w-7xl mx-auto p-8">
// // //         <button
// // //           onClick={onBack}
// // //           className="flex items-center mb-6 text-gray-600 hover:text-gray-800"
// // //         >
// // //           <ArrowLeft className="w-4 h-4 mr-2" />
// // //           Details
// // //         </button>

// // //         <div className="flex gap-8">
// // //           {/* Left Image Section */}
// // //           <div className="flex-1" style={{ width: '765px' }}>
// // //             <img
// // //               src="https://images.unsplash.com/photo-1734438237000-d3a70f1e4e88?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxrYXlha2luZyUyMGFkdmVudHVyZSUyMG91dGRvb3IlMjBhY3Rpdml0eSUyMHdhdGVyJTIwc3BvcnRzfGVufDB8fHx8MTc2MTczMjM5NXww&ixlib=rb-4.1.0&fit=fillmax&h=381&w=765"
// // //               alt="Kayaking"
// // //               className="rounded-xl object-cover"
// // //               style={{ width: '765px', height: '381px' }}
// // //             />
// // //           </div>

// // //           {/* Right Bill Section */}
// // //           <div
// // //             className="bg-gray-100 rounded-xl p-6 flex flex-col gap-6"
// // //             style={{ width: '387px', height: 'auto' }}
// // //           >
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-sm text-gray-600">Starts at</span>
// // //               <span className="text-lg font-bold">₹999</span>
// // //             </div>

// // //             <div className="flex justify-between items-center">
// // //               <span className="text-sm text-gray-600">Quantity</span>
// // //               <div className="flex items-center gap-3">
// // //                 <button
// // //                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
// // //                   className="w-6 h-6 bg-white rounded border flex items-center justify-center text-sm"
// // //                 >
// // //                   -
// // //                 </button>
// // //                 <span className="text-lg font-bold">{quantity}</span>
// // //                 <button
// // //                   onClick={() => setQuantity(quantity + 1)}
// // //                   className="w-6 h-6 bg-white rounded border flex items-center justify-center text-sm"
// // //                 >
// // //                   +
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             <div className="flex justify-between items-center">
// // //               <span className="text-sm text-gray-600">Subtotal</span>
// // //               <span className="text-lg font-bold">₹{999 * quantity}</span>
// // //             </div>

// // //             <div className="flex justify-between items-center">
// // //               <span className="text-sm text-gray-600">Taxes</span>
// // //               <span className="text-lg">₹69</span>
// // //             </div>

// // //             <hr className="border-gray-300" />

// // //             <div className="flex justify-between items-center">
// // //               <span className="text-lg font-bold">Total</span>
// // //               <span className="text-xl font-bold">
// // //                 ₹{999 * quantity + 69}
// // //               </span>
// // //             </div>

// // //             {/* Confirm Button (changes to yellow when time is selected) */}
// // //             <button
// // //               className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
// // //                 isConfirmActive
// // //                   ? 'bg-yellow-400 text-black'
// // //                   : 'bg-gray-400 text-white'
// // //               }`}
// // //             >
// // //               Confirm
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Date and Time Selection (without headings) */}
// // //         <div className="mt-8" style={{ width: '765px' }}>
// // //           <div className="bg-white rounded-xl p-8 space-y-8">
// // //             <div>
// // //               <h1 className="text-2xl font-bold mb-2">Kayaking</h1>
// // //               <p className="text-gray-600 text-sm">
// // //                 Curated small-group experience. Certified guide. Safety first
// // //                 with gear included. Helmet and life jackets along with an expert
// // //                 will accompany in kayaking.
// // //               </p>
// // //             </div>

// // //             {/* Date Buttons only (no heading) */}
// // //             <div className="flex gap-2 flex-wrap">
// // //               {dates.map((date) => (
// // //                 <button
// // //                   key={date}
// // //                   onClick={() => setSelectedDate(date)}
// // //                   className={`px-3 py-2 rounded text-sm ${
// // //                     selectedDate === date
// // //                       ? 'bg-yellow-400 text-black font-semibold'
// // //                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// // //                   }`}
// // //                 >
// // //                   {date}
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             {/* Time Buttons only (no heading) */}
// // //             <div className="flex gap-2 flex-wrap">
// // //               {times.map((time) => (
// // //                 <button
// // //                   key={time}
// // //                   onClick={() => setSelectedTime(time)}
// // //                   className={`px-3 py-2 rounded text-sm ${
// // //                     selectedTime === time
// // //                       ? 'bg-yellow-400 text-black font-semibold'
// // //                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// // //                   }`}
// // //                 >
// // //                   {time}
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             <p className="text-xs text-gray-500 mt-2">
// // //               All times are in IST (GMT +5:30)
// // //             </p>

// // //             <div>
// // //               <h3 className="text-lg font-semibold mb-2">About</h3>
// // //               <p className="text-sm text-gray-600">
// // //                 Experience pristine, turquoise waters and white fishing. Minimum
// // //                 age 18.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DetailsPage;




// // import React, { useState } from 'react';
// // import Navbar from '../components/Navbar';
// // import { ArrowLeft } from 'lucide-react';
// // import CheckoutPage from './CheckoutPage';

// // interface DetailsPageProps {
// //   onBack: () => void;
// // }

// // const DetailsPage: React.FC<DetailsPageProps> = ({ onBack }) => {
// //   const [selectedDate, setSelectedDate] = useState('');
// //   const [selectedTime, setSelectedTime] = useState('');
// //   const [quantity, setQuantity] = useState(1);

// //   const dates = ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'];
// //   const times = ['07:00 am', '9:00 am', '11:00 am', '1:00 pm'];

// //   const isConfirmActive = selectedTime !== '';

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Navbar />

// //       <div className="max-w-7xl mx-auto p-4 sm:p-8">
// //         <button
// //           onClick={onBack}
// //           className="flex items-center mb-4 sm:mb-6 text-gray-600 hover:text-gray-800"
// //         >
// //           <ArrowLeft className="w-4 h-4 mr-2" />
// //           Details
// //         </button>

// //         {/* Responsive layout: column on mobile, row on desktop */}
// //         <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
// //           {/* Image Section */}
// //           <div className="flex-1">
// //             <img
// //               src="https://images.unsplash.com/photo-1734438237000-d3a70f1e4e88?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxrYXlha2luZyUyMGFkdmVudHVyZSUyMG91dGRvb3IlMjBhY3Rpdml0eSUyMHdhdGVyJTIwc3BvcnRzfGVufDB8fHx8MTc2MTczMjM5NXww&ixlib=rb-4.1.0&fit=fillmax"
// //               alt="Kayaking"
// //               className="rounded-xl object-cover w-full h-56 sm:h-80 md:h-[381px]"
// //             />
// //           </div>

// //           {/* Billing Section */}
// //           <div className="bg-gray-100 rounded-xl p-5 sm:p-6 flex flex-col gap-4 sm:gap-6 w-full lg:w-[387px]">
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Starts at</span>
// //               <span className="text-lg font-bold">₹999</span>
// //             </div>

// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Quantity</span>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
// //                   className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded border flex items-center justify-center text-sm"
// //                 >
// //                   -
// //                 </button>
// //                 <span className="text-lg font-bold">{quantity}</span>
// //                 <button
// //                   onClick={() => setQuantity(quantity + 1)}
// //                   className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded border flex items-center justify-center text-sm"
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Subtotal</span>
// //               <span className="text-lg font-bold">₹{999 * quantity}</span>
// //             </div>

// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Taxes</span>
// //               <span className="text-lg">₹69</span>
// //             </div>

// //             <hr className="border-gray-300" />

// //             <div className="flex justify-between items-center">
// //               <span className="text-lg font-bold">Total</span>
// //               <span className="text-xl font-bold">
// //                 ₹{999 * quantity + 69}
// //               </span>
// //             </div>

// //             {/* Confirm Button */}
// //             <button
// //               className={`w-full py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-300 ${
// //                 isConfirmActive
// //                   ? 'bg-yellow-400 text-black'
// //                   : 'bg-gray-400 text-white'
// //               }`}
// //               onClick={<CheckoutPage/>}
// //             >
// //               Confirm
// //             </button>
// //           </div>
// //         </div>

// //         {/* Date and Time Selection Section */}
// //         <div className="mt-8 w-full lg:w-[765px]">
// //           <div className="bg-white rounded-xl p-5 sm:p-8 space-y-6 sm:space-y-8">
// //             <div>
// //               <h1 className="text-xl sm:text-2xl font-bold mb-2">Kayaking</h1>
// //               <p className="text-gray-600 text-sm sm:text-base">
// //                 Curated small-group experience. Certified guide. Safety first
// //                 with gear included. Helmet and life jackets along with an expert
// //                 will accompany in kayaking.
// //               </p>
// //             </div>

// //             {/* Date Buttons (no heading) */}
// //             <div className="flex flex-wrap gap-2">
// //               {dates.map((date) => (
// //                 <button
// //                   key={date}
// //                   onClick={() => setSelectedDate(date)}
// //                   className={`px-3 py-2 rounded text-sm sm:text-base transition-colors duration-200 ${
// //                     selectedDate === date
// //                       ? 'bg-yellow-400 text-black font-semibold'
// //                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// //                   }`}
// //                 >
// //                   {date}
// //                 </button>
// //               ))}
// //             </div>

// //             {/* Time Buttons (no heading) */}
// //             <div className="flex flex-wrap gap-2">
// //               {times.map((time) => (
// //                 <button
// //                   key={time}
// //                   onClick={() => setSelectedTime(time)}
// //                   className={`px-3 py-2 rounded text-sm sm:text-base transition-colors duration-200 ${
// //                     selectedTime === time
// //                       ? 'bg-yellow-400 text-black font-semibold'
// //                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// //                   }`}
// //                 >
// //                   {time}
// //                 </button>
// //               ))}
// //             </div>

// //             <p className="text-xs sm:text-sm text-gray-500 mt-2">
// //               All times are in IST (GMT +5:30)
// //             </p>

// //             <div>
// //               <h3 className="text-lg font-semibold mb-2">About</h3>
// //               <p className="text-sm text-gray-600">
// //                 Experience pristine, turquoise waters and white fishing.
// //                 Minimum age 18.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DetailsPage;




// // import React, { useState } from "react";
// // import Navbar from "../components/Navbar";
// // import { ArrowLeft } from "lucide-react";

// // interface DetailsPageProps {
// //   onBack: () => void;
// //   onConfirm: () => void;
// // }

// // const DetailsPage: React.FC<DetailsPageProps> = ({ onBack, onConfirm }) => {
// //   const [selectedDate, setSelectedDate] = useState("");
// //   const [selectedTime, setSelectedTime] = useState("");
// //   const [quantity, setQuantity] = useState(1);

// //   const dates = ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"];
// //   const times = ["07:00 am", "9:00 am", "11:00 am", "1:00 pm"];

// //   const total = 999 * quantity + 69;
// //   const isConfirmActive = selectedTime !== "";

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Navbar />

// //       <div className="max-w-7xl mx-auto p-4 sm:p-8">
// //         <button
// //           onClick={onBack}
// //           className="flex items-center mb-6 text-gray-600 hover:text-gray-800"
// //         >
// //           <ArrowLeft className="w-4 h-4 mr-2" />
// //           Back
// //         </button>

// //         <div className="flex flex-col lg:flex-row gap-8">
// //           {/* Left image */}
// //           <div className="flex-1">
// //             <img
// //               src="https://images.unsplash.com/photo-1734438237000-d3a70f1e4e88?auto=format&fit=crop&w=900&q=80"
// //               alt="Kayaking"
// //               className="rounded-xl object-cover w-full h-[300px] sm:h-[400px]"
// //             />
// //           </div>

// //           {/* Billing card */}
// //           <div className="bg-gray-100 rounded-xl p-6 flex flex-col gap-4 w-full lg:w-[380px]">
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Starts at</span>
// //               <span className="text-lg font-bold">₹999</span>
// //             </div>

// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Quantity</span>
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
// //                   className="w-6 h-6 bg-white rounded border flex items-center justify-center"
// //                 >
// //                   -
// //                 </button>
// //                 <span className="text-lg font-bold">{quantity}</span>
// //                 <button
// //                   onClick={() => setQuantity(quantity + 1)}
// //                   className="w-6 h-6 bg-white rounded border flex items-center justify-center"
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="flex justify-between">
// //               <span className="text-sm text-gray-600">Subtotal</span>
// //               <span className="text-lg font-bold">₹{999 * quantity}</span>
// //             </div>

// //             <div className="flex justify-between">
// //               <span className="text-sm text-gray-600">Taxes</span>
// //               <span className="text-lg font-bold">₹69</span>
// //             </div>

// //             <hr className="border-gray-300" />

// //             <div className="flex justify-between items-center">
// //               <span className="text-lg font-bold">Total</span>
// //               <span className="text-xl font-bold">₹{total}</span>
// //             </div>

// //             <button
// //               onClick={onConfirm}
// //               disabled={!isConfirmActive}
// //               className={`w-full py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
// //                 isConfirmActive
// //                   ? "bg-yellow-400 text-black hover:bg-yellow-500"
// //                   : "bg-gray-400 text-white cursor-not-allowed"
// //               }`}
// //             >
// //               Confirm
// //             </button>
// //           </div>
// //         </div>

// //         {/* Details below */}
// //         <div className="mt-8 bg-white rounded-xl p-6 space-y-6">
// //           <div>
// //             <h1 className="text-2xl font-bold mb-2">Kayaking</h1>
// //             <p className="text-gray-600 text-sm">
// //               Curated small-group experience. Certified guide. Safety first with
// //               included gear.
// //             </p>
// //           </div>

// //           {/* Dates */}
// //           <div>
// //             <h3 className="text-lg font-semibold mb-3">Choose date</h3>
// //             <div className="flex flex-wrap gap-2">
// //               {dates.map((date) => (
// //                 <button
// //                   key={date}
// //                   onClick={() => setSelectedDate(date)}
// //                   className={`px-3 py-2 rounded text-sm ${
// //                     selectedDate === date
// //                       ? "bg-yellow-400 text-black font-semibold"
// //                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                   }`}
// //                 >
// //                   {date}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Times */}
// //           <div>
// //             <h3 className="text-lg font-semibold mb-3">Choose time</h3>
// //             <div className="flex flex-wrap gap-2">
// //               {times.map((time) => (
// //                 <button
// //                   key={time}
// //                   onClick={() => setSelectedTime(time)}
// //                   className={`px-3 py-2 rounded text-sm ${
// //                     selectedTime === time
// //                       ? "bg-yellow-400 text-black font-semibold"
// //                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                   }`}
// //                 >
// //                   {time}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DetailsPage;


// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import { ArrowLeft } from "lucide-react";

// interface DetailsPageProps {
//   onBack: () => void;
//   onConfirm: () => void;
// }

// const DetailsPage: React.FC<DetailsPageProps> = ({ onBack, onConfirm }) => {
//   const [selectedDate, setSelectedDate] = useState("Oct 22");
//   const [selectedTime, setSelectedTime] = useState("");

//   const [quantity, setQuantity] = useState(1);

//   const dates = ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"];

//   const times = [
//     { time: "07:00 am", left: 4 },
//     { time: "9:00 am", left: 2 },
//     { time: "11:00 am", left: 5 },
//     { time: "1:00 pm", left: 0 },
//   ];

//   const total = 999 * quantity + 69;
//   const isConfirmActive = selectedTime !== "";

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="max-w-7xl mx-auto p-4 sm:p-8">
//         {/* Back Button */}
//         <button
//           onClick={onBack}
//           className="flex items-center mb-6 text-gray-600 hover:text-gray-800"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back
//         </button>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Image */}
//           <div className="flex-1">
//             <img
//               src="https://images.unsplash.com/photo-1734438237000-d3a70f1e4e88?auto=format&fit=crop&w=900&q=80"
//               alt="Kayaking"
//               className="rounded-xl object-cover w-full h-[300px] sm:h-[400px]"
//             />
//           </div>

//           {/* Billing Card */}
//           <div className="bg-gray-100 rounded-xl p-6 flex flex-col gap-4 w-full lg:w-[380px]">
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">Starts at</span>
//               <span className="text-lg font-bold">₹999</span>
//             </div>

//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">Quantity</span>
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="w-6 h-6 bg-white rounded border flex items-center justify-center"
//                 >
//                   -
//                 </button>
//                 <span className="text-lg font-bold">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="w-6 h-6 bg-white rounded border flex items-center justify-center"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">Subtotal</span>
//               <span className="text-lg font-bold">₹{999 * quantity}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">Taxes</span>
//               <span className="text-lg font-bold">₹69</span>
//             </div>

//             <hr className="border-gray-300" />

//             <div className="flex justify-between items-center">
//               <span className="text-lg font-bold">Total</span>
//               <span className="text-xl font-bold">₹{total}</span>
//             </div>

//             <button
//               onClick={onConfirm}
//               disabled={!isConfirmActive}
//               className={`w-full py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
//                 isConfirmActive
//                   ? "bg-yellow-400 text-black hover:bg-yellow-500"
//                   : "bg-gray-400 text-white cursor-not-allowed"
//               }`}
//             >
//               Confirm
//             </button>
//           </div>
//         </div>

//         {/* Details Section */}
//         <div className="mt-8 bg-white rounded-xl p-6 space-y-6">
//           <div>
//             <h1 className="text-2xl font-bold mb-2">Kayaking</h1>
//             <p className="text-gray-600 text-sm">
//               Curated small-group experience. Certified guide. Safety first with
//               included gear.
//             </p>
//           </div>

//           {/* Choose Date */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Choose date</h3>
//             <div className="flex flex-wrap gap-2 border border-green-500 rounded-md p-2">
//               {dates.map((date) => (
//                 <button
//                   key={date}
//                   onClick={() => setSelectedDate(date)}
//                   className={`px-4 py-2 rounded text-sm font-medium border ${
//                     selectedDate === date
//                       ? "bg-yellow-400 text-black border-yellow-400"
//                       : "bg-white text-gray-600 hover:bg-gray-100 border-gray-200"
//                   }`}
//                 >
//                   {date}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Choose Time */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Choose time</h3>
//             <div className="flex flex-wrap gap-3">
//               {times.map(({ time, left }) => (
//                 <button
//                   key={time}
//                   onClick={() => left > 0 && setSelectedTime(time)}
//                   disabled={left === 0}
//                   className={`relative px-4 py-2 rounded text-sm font-medium border min-w-[100px] text-center ${
//                     left === 0
//                       ? "bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300"
//                       : selectedTime === time
//                       ? "bg-yellow-400 text-black border-yellow-400"
//                       : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
//                   }`}
//                 >
//                   {time}
//                   {left > 0 ? (
//                     <span className="absolute right-[-10px] text-xs text-red-500">
//                       {left} left
//                     </span>
//                   ) : (
//                     <span className="absolute top-[-8px] right-[-10px] text-xs text-gray-500">
//                       Sold out
//                     </span>
//                   )}
//                 </button>
//               ))}
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               All times are in IST (GMT +5:30)
//             </p>
//           </div>

//           {/* About */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">About</h3>
//             <p className="text-gray-600 text-sm bg-gray-100 p-3 rounded">
//               Scenic routes, trained guides, and safety briefing. Minimum age
//               10.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsPage;


import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ArrowLeft } from "lucide-react";

interface DetailsPageProps {
  onBack: () => void;
  onConfirm: () => void;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ onBack, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState("Oct 22");
  const [selectedTime, setSelectedTime] = useState("");
  const [quantity, setQuantity] = useState(1);

  const dates = ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"];
  const times = [
    { time: "07:00 am", left: 4 },
    { time: "9:00 am", left: 2 },
    { time: "11:00 am", left: 5 },
    { time: "1:00 pm", left: 0 },
  ];

  const total = 999 * quantity + 69;
  const isConfirmActive = selectedTime !== "";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1734438237000-d3a70f1e4e88?auto=format&fit=crop&w=900&q=80"
              alt="Kayaking"
              className="rounded-xl object-cover w-full h-[300px] sm:h-[400px]"
            />
          </div>

          {/* Billing Card */}
          <div className="bg-gray-100 rounded-xl p-6 flex flex-col gap-4 w-full lg:w-[380px]">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Starts at</span>
              <span className="text-lg font-bold">₹999</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-6 h-6 bg-white rounded border flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-6 h-6 bg-white rounded border flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-lg font-bold">₹{999 * quantity}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Taxes</span>
              <span className="text-lg font-bold">₹69</span>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total</span>
              <span className="text-xl font-bold">₹{total}</span>
            </div>

            <button
              onClick={onConfirm}
              disabled={!isConfirmActive}
              className={`w-full py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
                isConfirmActive
                  ? "bg-yellow-400 text-black hover:bg-yellow-500"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-8 bg-white rounded-xl p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Kayaking</h1>
            <p className="text-gray-600 text-sm">
              Curated small-group experience. Certified guide. Safety first with
              included gear.
            </p>
          </div>

          {/* Choose Date */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Choose date</h3>
            <div className="flex flex-wrap gap-2 p-1">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-2 rounded text-sm font-medium border transition-colors duration-200 ${
                    selectedDate === date
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-white text-gray-600 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Choose Time */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Choose time</h3>
            <div className="flex flex-wrap gap-3">
              {times.map(({ time, left }) => (
                <button
                  key={time}
                  onClick={() => left > 0 && setSelectedTime(time)}
                  disabled={left === 0}
                  className={`relative px-4 py-2 rounded text-sm font-medium border min-w-[100px] text-center transition-colors duration-200 ${
                    left === 0
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300"
                      : selectedTime === time
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {time}
                  {left > 0 ? (
                    <span className="absolute right-[-10px] text-xs text-red-500">
                      {left} left
                    </span>
                  ) : (
                    <span className="absolute top-[-8px] right-[-10px] text-xs text-gray-500">
                      Sold out
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              All times are in IST (GMT +5:30)
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-600 text-sm bg-gray-100 p-3 rounded">
              Scenic routes, trained guides, and safety briefing. Minimum age 10.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

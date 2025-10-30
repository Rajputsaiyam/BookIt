// // // // import  React from 'react';
// // // // import { ArrowLeft, CreditCard, Lock } from 'lucide-react';
// // // // import Navbar from '../components/Navbar';
// // // // import Footer from '../components/Footer';

// // // // interface CheckoutPageProps {
// // // //   onNavigate: (page: string) => void;
// // // // }

// // // // const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50">
// // // //       <Navbar />
      
// // // //       <div className="max-w-screen-xl mx-auto px-4 py-12">
// // // //         <button 
// // // //           onClick={() => onNavigate('details')}
// // // //           className="flex items-center space-x-2 text-primary mb-8 hover:text-accent transition"
// // // //         >
// // // //           <ArrowLeft className="w-5 h-5" />
// // // //           <span>Back to Details</span>
// // // //         </button>

// // // //         <h1 className="text-4xl font-bold text-primary mb-12 text-center">Complete Your Booking</h1>

// // // //         <div className="grid lg:grid-cols-2 gap-12">
// // // //           {/* Booking Summary */}
// // // //           <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
// // // //             <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
            
// // // //             <div className="space-y-4 mb-6">
// // // //               <img 
// // // //                 src="https://images.unsplash.com/photo-1760817137560-f4062758bed7?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHRyb3BpY2FsJTIwYmVhY2glMjBwYXJhZGlzZXxlbnwwfHx8fDE3NjE3MzE4NDB8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
// // // //                 alt="Tropical Paradise"
// // // //                 className="w-full h-48 object-cover rounded-xl"
// // // //               />
              
// // // //               <h3 className="text-xl font-semibold">Tropical Paradise</h3>
              
// // // //               <div className="space-y-2 text-gray-600">
// // // //                 <div className="flex justify-between">
// // // //                   <span>Check-in:</span>
// // // //                   <span className="font-medium">Dec 15, 2024</span>
// // // //                 </div>
// // // //                 <div className="flex justify-between">
// // // //                   <span>Check-out:</span>
// // // //                   <span className="font-medium">Dec 22, 2024</span>
// // // //                 </div>
// // // //                 <div className="flex justify-between">
// // // //                   <span>Guests:</span>
// // // //                   <span className="font-medium">2 Adults</span>
// // // //                 </div>
// // // //                 <div className="flex justify-between">
// // // //                   <span>Duration:</span>
// // // //                   <span className="font-medium">7 nights</span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="border-t pt-6">
// // // //               <div className="space-y-2 mb-4">
// // // //                 <div className="flex justify-between">
// // // //                   <span>$299 × 7 nights</span>
// // // //                   <span>$2,093</span>
// // // //                 </div>
// // // //                 <div className="flex justify-between">
// // // //                   <span>Service fee</span>
// // // //                   <span>$150</span>
// // // //                 </div>
// // // //                 <div className="flex justify-between">
// // // //                   <span>Taxes</span>
// // // //                   <span>$200</span>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="flex justify-between items-center font-bold text-xl border-t pt-4">
// // // //                 <span>Total</span>
// // // //                 <span className="text-primary">$2,443</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Payment Form */}
// // // //           <div className="bg-white rounded-2xl p-8 shadow-lg">
// // // //             <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            
// // // //             <form className="space-y-6">
// // // //               <div className="grid md:grid-cols-2 gap-4">
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
// // // //                     placeholder="John"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
// // // //                     placeholder="Doe"
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
// // // //                 <input 
// // // //                   type="email" 
// // // //                   className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
// // // //                   placeholder="john.doe@example.com"
// // // //                 />
// // // //               </div>

// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
// // // //                 <input 
// // // //                   type="tel" 
// // // //                   className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
// // // //                   placeholder="+1 (555) 123-4567"
// // // //                 />
// // // //               </div>

// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
// // // //                 <div className="relative">
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
// // // //                     placeholder="1234 5678 9012 3456"
// // // //                   />
// // // //                   <CreditCard className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
// // // //                 </div>
// // // //               </div>

// // // //               <div className="grid grid-cols-2 gap-4">
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
// // // //                     placeholder="MM/YY"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
// // // //                     placeholder="123"
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               <button 
// // // //                 onClick={() => onNavigate('confirmation')}
// // // //                 type="button"
// // // //                 className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center space-x-2"
// // // //               >
// // // //                 <Lock className="w-5 h-5" />
// // // //                 <span>Confirm Booking - $2,443</span>
// // // //               </button>
// // // //             </form>

// // // //             <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-500">
// // // //               <span>Secured by</span>
// // // //               <div className="flex space-x-2">
// // // //                 <div className="bg-gray-100 px-3 py-1 rounded">VISA</div>
// // // //                 <div className="bg-gray-100 px-3 py-1 rounded">MASTERCARD</div>
// // // //                 <div className="bg-gray-100 px-3 py-1 rounded">PAYPAL</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CheckoutPage;
 









// // // import React from "react";
// // // import Navbar from "../components/Navbar";
// // // import { ArrowLeft } from "lucide-react";

// // // interface CheckoutPageProps {
// // //   onBack: () => void;
// // // }

// // // const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack }) => {
// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <Navbar />
// // //       <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white mt-8 rounded-xl shadow">
// // //         <button
// // //           onClick={onBack}
// // //           className="flex items-center mb-6 text-gray-600 hover:text-gray-800"
// // //         >
// // //           <ArrowLeft className="w-4 h-4 mr-2" />
// // //           Back
// // //         </button>

// // //         <h2 className="text-2xl font-bold mb-4">Checkout</h2>
// // //         <p className="text-gray-600 mb-6">
// // //           Review your booking details and complete your payment.
// // //         </p>

// // //         <div className="space-y-4">
// // //           <div className="flex justify-between">
// // //             <span>Activity:</span>
// // //             <span className="font-semibold">Kayaking</span>
// // //           </div>
// // //           <div className="flex justify-between">
// // //             <span>Date:</span>
// // //             <span className="font-semibold">Oct 22</span>
// // //           </div>
// // //           <div className="flex justify-between">
// // //             <span>Time:</span>
// // //             <span className="font-semibold">07:00 am</span>
// // //           </div>
// // //           <div className="flex justify-between">
// // //             <span>Total:</span>
// // //             <span className="font-semibold text-yellow-600">₹1068</span>
// // //           </div>
// // //         </div>

// // //         <button className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg">
// // //           Pay Now
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CheckoutPage;




// // import React from "react";
// // import Navbar from "../components/Navbar";
// // import { ArrowLeft } from "lucide-react";
// // import ConfirmationPage from "./ConfirmationPage";

// // interface CheckoutPageProps {
// //   onBack: () => void;
// // }

// // const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack }) => {
// //   return (
// //     <div className="min-h-screen bg-white">
// //       <Navbar />

// //       <div className="flex flex-col md:flex-row justify-between max-w-[1316px] mx-auto px-4 md:px-0 mt-[68px]">
// //         {/* Left Section - Person Details */}
// //         <div
// //           className="bg-[#EFEFEF] rounded-[12px] p-[24px] flex flex-col gap-[16px]"
// //           style={{
// //             width: "739px",
// //             height: "198px",
// //           }}
// //         >
// //           {/* Back + Checkout Header */}
// //           <div className="flex items-center gap-2 mb-2">
// //             <ArrowLeft
// //               onClick={onBack}
// //               className="w-4 h-4 cursor-pointer text-gray-700"
// //             />
// //             <span className="text-sm font-medium text-gray-700">Checkout</span>
// //           </div>

// //           {/* Form Fields */}
// //           <div className="flex flex-wrap gap-4">
// //             <div className="flex flex-col flex-1 min-w-[280px]">
// //               <label className="text-sm text-gray-600 mb-1">Full name</label>
// //               <input
// //                 type="text"
// //                 placeholder="Your name"
// //                 className="bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //               />
// //             </div>

// //             <div className="flex flex-col flex-1 min-w-[280px]">
// //               <label className="text-sm text-gray-600 mb-1">Email</label>
// //               <input
// //                 type="email"
// //                 placeholder="Your name"
// //                 className="bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //               />
// //             </div>
// //           </div>

// //           {/* Promo Code Row */}
// //           <div className="flex flex-wrap gap-2 items-center">
// //             <input
// //               type="text"
// //               placeholder="Promo code"
// //               className="flex-1 bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //             />
// //             <button className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition">
// //               Apply
// //             </button>
// //           </div>

// //           {/* Terms Checkbox */}
// //           <div className="flex items-center gap-2 text-xs text-gray-600">
// //             <input type="checkbox" id="terms" />
// //             <label htmlFor="terms">I agree to the terms and safety policy</label>
// //           </div>
// //         </div>

// //         {/* Right Section - Payment Summary */}
// //         <div
// //           className="bg-[#EFEFEF] rounded-[12px] p-[24px] flex flex-col justify-between mt-6 md:mt-0"
// //           style={{
// //             width: "387px",
// //             height: "349px",
// //           }}
// //         >
// //           <div className="space-y-2 text-sm text-gray-700">
// //             <div className="flex justify-between">
// //               <span>Experience</span>
// //               <span className="font-medium">Kayaking</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Date</span>
// //               <span>2025-10-22</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Time</span>
// //               <span>08:00 am</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Qty</span>
// //               <span>1</span>
// //             </div>

// //             <div className="flex justify-between mt-2">
// //               <span>Subtotal</span>
// //               <span>₹899</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Taxes</span>
// //               <span>₹59</span>
// //             </div>

// //             <div className="border-t border-gray-300 pt-3 flex justify-between font-semibold text-lg">
// //               <span>Total</span>
// //               <span>₹958</span>
// //             </div>
// //           </div>

// //           <button onClick={<ConfirmationPage/>} className="bg-[#FFD643] hover:bg-[#ffcc33] text-black font-medium rounded-lg py-3 w-full transition">
// //             Pay and Confirm
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;




// // import React from "react";
// // import Navbar from "../components/Navbar";
// // import { ArrowLeft } from "lucide-react";

// // interface CheckoutPageProps {
// //   onBack: () => void;
// //   onConfirm: () => void; // ✅ Add this prop
// // }

// // const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack, onConfirm }) => {
// //   return (
// //     <div className="min-h-screen bg-white">
// //       <Navbar />

// //       <div className="flex flex-col md:flex-row justify-between max-w-[1316px] mx-auto px-4 md:px-0 mt-[68px]">
// //         {/* Left Section - Person Details */}
// //         <div
// //           className="bg-[#EFEFEF] rounded-[12px] p-[24px] flex flex-col gap-[16px]"
// //           style={{
// //             width: "739px",
// //             height: "198px",
// //           }}
// //         >
// //           {/* Back + Checkout Header */}
// //           <div className="flex items-center gap-2 mb-2">
// //             <ArrowLeft
// //               onClick={onBack}
// //               className="w-4 h-4 cursor-pointer text-gray-700"
// //             />
// //             <span className="text-sm font-medium text-gray-700">Checkout</span>
// //           </div>

// //           {/* Form Fields */}
// //           <div className="flex flex-wrap gap-4">
// //             <div className="flex flex-col flex-1 min-w-[280px]">
// //               <label className="text-sm text-gray-600 mb-1">Full name</label>
// //               <input
// //                 type="text"
// //                 placeholder="Your name"
// //                 className="bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //               />
// //             </div>

// //             <div className="flex flex-col flex-1 min-w-[280px]">
// //               <label className="text-sm text-gray-600 mb-1">Email</label>
// //               <input
// //                 type="email"
// //                 placeholder="Your email"
// //                 className="bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //               />
// //             </div>
// //           </div>

// //           {/* Promo Code Row */}
// //           <div className="flex flex-wrap gap-2 items-center">
// //             <input
// //               type="text"
// //               placeholder="Promo code"
// //               className="flex-1 bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //             />
// //             <button className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition">
// //               Apply
// //             </button>
// //           </div>

// //           {/* Terms Checkbox */}
// //           <div className="flex items-center gap-2 text-xs text-gray-600">
// //             <input type="checkbox" id="terms" />
// //             <label htmlFor="terms">I agree to the terms and safety policy</label>
// //           </div>
// //         </div>

// //         {/* Right Section - Payment Summary */}
// //         <div
// //           className="bg-[#EFEFEF] rounded-[12px] p-[24px] flex flex-col justify-between mt-6 md:mt-0"
// //           style={{
// //             width: "387px",
// //             height: "349px",
// //           }}
// //         >
// //           <div className="space-y-2 text-sm text-gray-700">
// //             <div className="flex justify-between">
// //               <span>Experience</span>
// //               <span className="font-medium">Kayaking</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Date</span>
// //               <span>2025-10-22</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Time</span>
// //               <span>08:00 am</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Qty</span>
// //               <span>1</span>
// //             </div>

// //             <div className="flex justify-between mt-2">
// //               <span>Subtotal</span>
// //               <span>₹899</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Taxes</span>
// //               <span>₹59</span>
// //             </div>

// //             <div className="border-t border-gray-300 pt-3 flex justify-between font-semibold text-lg">
// //               <span>Total</span>
// //               <span>₹958</span>
// //             </div>
// //           </div>

// //           {/* ✅ Navigate to ConfirmationPage when clicked */}
// //           <button
// //             onClick={onConfirm}
// //             className="bg-[#FFD643] hover:bg-[#ffcc33] text-black font-medium rounded-lg py-3 w-full transition"
// //           >
// //             Pay and Confirm
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;








// import React from "react";
// import Navbar from "../components/Navbar";
// import { ArrowLeft } from "lucide-react";

// interface CheckoutPageProps {
//   onBack: () => void;
//   onConfirm: () => void;
// }

// const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack, onConfirm }) => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       <div className="flex flex-col md:flex-row justify-between max-w-[1316px] mx-auto px-4 md:px-0 mt-[68px]">
//         {/* Left Section - Person Details */}
//         <div
//           className="bg-[#EFEFEF] rounded-[12px] p-[24px] flex flex-col gap-[16px]"
//           style={{
//             width: "739px",
//             height: "198px",
//           }}
//         >
//           {/* Back + Checkout Header */}
//           <div className="flex items-center gap-2 mb-2">
//             <ArrowLeft
//               onClick={onBack}
//               className="w-4 h-4 cursor-pointer text-gray-700"
//             />
//             <span className="text-sm font-medium text-gray-700">Checkout</span>
//           </div>

//           {/* Form Fields */}
//           <div className="flex flex-wrap gap-4">
//             <div className="flex flex-col flex-1 min-w-[280px]">
//               <label className="text-sm text-gray-600 mb-1">Full name</label>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="bg-[#DDDDDD] rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             <div className="flex flex-col flex-1 min-w-[280px]">
//               <label className="text-sm text-gray-600 mb-1">Email</label>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="bg-[#DDDDDD] rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           </div>

//           {/* Promo Code Row */}
//           <div className="flex flex-wrap gap-2 items-center">
//             <input
//               type="text"
//               placeholder="Promo code"
//               className="flex-1 bg-[#DDDDDD] rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <button className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition">
//               Apply
//             </button>
//           </div>

//           {/* Terms Checkbox */}
//           <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
//             <input type="checkbox" id="terms" />
//             <label htmlFor="terms">I agree to the terms and safety policy</label>
//           </div>
//         </div>

//         {/* Right Section - Payment Summary */}
//         <div
//           className="bg-[#EFEFEF] rounded-[12px] p-[24px] flex flex-col justify-between mt-6 md:mt-0"
//           style={{
//             width: "387px",
//             height: "349px",
//           }}
//         >
//           <div className="space-y-2 text-sm text-gray-700">
//             <div className="flex justify-between">
//               <span>Experience</span>
//               <span className="font-medium">Kayaking</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Date</span>
//               <span>2025-10-22</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Time</span>
//               <span>08:00 am</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Qty</span>
//               <span>1</span>
//             </div>

//             <div className="flex justify-between mt-2">
//               <span>Subtotal</span>
//               <span>₹899</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Taxes</span>
//               <span>₹59</span>
//             </div>

//             <div className="border-t border-gray-300 pt-3 flex justify-between font-semibold text-lg">
//               <span>Total</span>
//               <span>₹958</span>
//             </div>
//           </div>

//           {/* Confirm Button */}
//           <button
//             onClick={onConfirm}
//             className="bg-[#FFD643] hover:bg-[#ffcc33] text-black font-medium rounded-lg py-3 w-full transition"
//           >
//             Pay and Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;








import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ArrowLeft } from "lucide-react";

interface CheckoutPageProps {
  onBack: () => void;
  onConfirm: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack, onConfirm }) => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode.trim() !== "") {
      setIsPromoApplied(true);
      alert("Promo code applied successfully!");
    } else {
      alert("Please enter a promo code before applying.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex flex-col md:flex-row justify-between max-w-[1316px] mx-auto px-4 md:px-0 mt-[68px]">
        {/* Left Section - Person Details */}
        <div
          className="bg-[#EFEFEF] rounded-[12px] p-[24px] flex flex-col gap-[16px]"
          style={{
            width: "739px",
            height: "198px",
          }}
        >
          {/* Back + Checkout Header */}
          <div className="flex items-center gap-2 mb-2">
            <ArrowLeft
              onClick={onBack}
              className="w-4 h-4 cursor-pointer text-gray-700"
            />
            <span className="text-sm font-medium text-gray-700">Checkout</span>
          </div>

          {/* Form Fields */}
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col flex-1 min-w-[280px]">
              <label className="text-sm text-gray-600 mb-1">Full name</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-[#DDDDDD] rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[280px]">
              <label className="text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#DDDDDD] rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Promo Code Row */}
          <div className="flex flex-wrap gap-2 items-center">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 bg-[#DDDDDD] rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleApplyPromo}
              className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition"
            >
              Apply
            </button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the terms and safety policy</label>
          </div>
        </div>

        {/* Right Section - Payment Summary */}
        <div
          className="bg-[#EFEFEF] rounded-[12px] p-[24px] flex flex-col justify-between mt-6 md:mt-0"
          style={{
            width: "387px",
            height: "349px",
          }}
        >
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Experience</span>
              <span className="font-medium">Kayaking</span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span>2025-10-22</span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span>08:00 am</span>
            </div>
            <div className="flex justify-between">
              <span>Qty</span>
              <span>1</span>
            </div>

            <div className="flex justify-between mt-2">
              <span>Subtotal</span>
              <span>₹899</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>₹59</span>
            </div>

            <div className="border-t border-gray-300 pt-3 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹958</span>
            </div>
          </div>

          {/* Confirm Button (disabled until promo applied) */}
          <button
            onClick={onConfirm}
            disabled={!isPromoApplied}
            className={`font-medium rounded-lg py-3 w-full transition ${
              isPromoApplied
                ? "bg-[#FFD643] hover:bg-[#ffcc33] text-black"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            Pay and Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

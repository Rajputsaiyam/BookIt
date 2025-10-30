// // import  React from 'react';
// // import { CheckCircle, Home, FileText } from 'lucide-react';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// // interface ConfirmationPageProps {
// //   onNavigate: (page: string) => void;
// // }

// // const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onNavigate }) => {
// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Navbar />
      
// //       <div className="max-w-screen-xl mx-auto px-4 py-20">
// //         <div className="flex justify-center">
// //           <div className="bg-white rounded-2xl shadow-lg p-12 max-w-lg w-full text-center">
// //             <div className="mb-8">
// //               <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
// //               <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
// //               <p className="text-gray-600 text-lg">
// //                 Your trip to <span className="font-semibold">Tropical Paradise</span> is confirmed. 
// //                 A confirmation email has been sent to your inbox.
// //               </p>
// //             </div>

// //             <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
// //               <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
// //               <div className="space-y-2 text-sm">
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-600">Booking ID:</span>
// //                   <span className="font-medium">#TB240015</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-600">Destination:</span>
// //                   <span className="font-medium">Tropical Paradise</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-600">Check-in:</span>
// //                   <span className="font-medium">Dec 15, 2024</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-600">Check-out:</span>
// //                   <span className="font-medium">Dec 22, 2024</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-600">Guests:</span>
// //                   <span className="font-medium">2 Adults</span>
// //                 </div>
// //                 <div className="flex justify-between border-t pt-2 mt-4">
// //                   <span className="text-gray-600 font-semibold">Total Paid:</span>
// //                   <span className="font-bold text-primary text-lg">$2,443</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="space-y-4">
// //               <button 
// //                 onClick={() => onNavigate('home')}
// //                 className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center space-x-2"
// //               >
// //                 <Home className="w-5 h-5" />
// //                 <span>Go to Home</span>
// //               </button>
              
// //               <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center space-x-2">
// //                 <FileText className="w-5 h-5" />
// //                 <span>View Booking Details</span>
// //               </button>
// //             </div>

// //             <div className="mt-8 pt-8 border-t text-center">
// //               <p className="text-sm text-gray-500 mb-2">Need help?</p>
// //               <p className="text-sm">
// //                 Contact us at <a href="mailto:support@travelease.com" className="text-primary hover:underline">support@travelease.com</a>
// //                 <br />
// //                 or call <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a>
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ConfirmationPage;
 


// import React from "react";
// import { CheckCircle } from "lucide-react";
// import Navbar from "../components/Navbar";


// interface ConfirmationPageProps {
//   onNavigate: (page: string) => void;
// }

// const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onNavigate }) => {
//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Navbar />

//       <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
//         <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
//         <h1 className="text-2xl font-semibold text-gray-900 mb-2">
//           Booking Confirmed
//         </h1>
//         <p className="text-gray-600 mb-6">Ref ID: HUF56&SO</p>
//         <button
//           onClick={() => onNavigate("home")}
//           className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300 transition"
//         >
//           Back to Home
//         </button>
//       </div>

//     </div>
//   );
// };

// export default ConfirmationPage;

import React from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";

interface ConfirmationPageProps {
  onNavigate: (page: string) => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Booking Confirmed
        </h1>
        <p className="text-gray-600 mb-6">Ref ID: HUF56&SO</p>
        <button
          onClick={() => onNavigate("home")}
          className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;

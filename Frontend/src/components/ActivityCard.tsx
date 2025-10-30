// // import  React from 'react';

// // interface ActivityCardProps {
// //   title: string;
// //   location: string;
// //   price: number;
// //   image: string;
// //   category: string;
// //   userInitial: string;
// //   userBg: string;
// //   onViewDetails: () => void;
// // }

// // const ActivityCard: React.FC<ActivityCardProps> = ({
// //   title,
// //   location,
// //   price,
// //   image,
// //   userBg,
// //   onViewDetails
// // }) => {
// //   return (
// //     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
// //       <div className="relative">
// //         <img 
// //           src={image} 
// //           alt={title}
// //           className="w-full h-32 object-cover"
// //         />
// //         <div className={`absolute top-2 left-2 w-6 h-6 ${userBg} rounded-full flex items-center justify-center`}>
// //         </div>
// //       </div>
      
// //       <div className="p-3">
// //         <h3 className="font-semibold text-sm mb-1">{title}</h3>
// //         <p className="text-xs text-gray-600 mb-2">{location}</p>
// //         <p className="text-xs text-gray-500 mb-3 line-clamp-2">
// //           Curated small-group experience. Certified guide. Safety first with gear included.
// //         </p>
        
// //         <div className="flex items-center justify-between">
// //           <div>
// //             <span className="text-xs text-gray-500">From </span>
// //             <span className="font-bold text-lg">₹{price}</span>
// //           </div>
// //           <button 
// //             onClick={onViewDetails}
// //             className="bg-yellow-400 text-xs font-semibold px-3 py-1 rounded hover:bg-yellow-500 transition"
// //           >
// //             View Details
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ActivityCard;
 



// import React from 'react';

// interface ActivityCardProps {
//   title: string;
//   location: string;
//   price: number;
//   image: string;
//   category: string;
//   userInitial: string;
//   userBg: string;
//   onViewDetails: () => void;
// }

// const ActivityCard: React.FC<ActivityCardProps> = ({
//   title,
//   location,
//   price,
//   image,
//   userBg,
//   onViewDetails
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//       {/* Image Section */}
//       <div className="relative">
//         <img 
//           src={image} 
//           alt={title}
//           className="w-full h-32 object-cover"
//         />
//         <div className={`absolute top-2 left-2 w-6 h-6 ${userBg} rounded-full flex items-center justify-center`}>
//         </div>
//       </div>
      
//       {/* Details Section */}
//       <div className="p-3">
//         {/* Title + Location Row */}
//         <div className="flex items-center justify-between mb-1">
//           <h3 className="font-semibold text-sm text-gray-800">{title}</h3>
          
//           {/* ✅ Location Badge styled as per your CSS */}
//           <span
//             className="text-xs text-white font-normal flex items-center justify-center"
//             style={{
//               width: '69px',
//               height: '24px',
//               paddingTop: '4px',
//               paddingRight: '8px',
//               paddingBottom: '4px',
//               paddingLeft: '8px',
//               borderRadius: '4px',
//               background: '#838383',
//               opacity: 1,
//             }}
//           >
//             {location}
//           </span>
//         </div>

//         {/* Description */}
//         <p className="text-xs text-gray-500 mb-3 line-clamp-2">
//           Curated small-group experience. Certified guide. Safety first with gear included.
//         </p>
        
//         {/* Price + Button Row */}
//         <div className="flex items-center justify-between">
//           <div>
//             <span className="text-xs text-gray-500">From </span>
//             <span className="font-bold text-lg">₹{price}</span>
//           </div>

//           <button 
//             onClick={onViewDetails}
//             className="bg-yellow-400 text-xs font-semibold px-3 py-1 rounded hover:bg-yellow-500 transition"
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivityCard;




import React from 'react';

interface ActivityCardProps {
  title: string;
  location: string;
  price: number;
  image: string;
  category: string;
  userInitial: string;
  userBg: string;
  onViewDetails: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  location,
  price,
  image,
  userBg,
  onViewDetails
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Section */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-32 object-cover"
        />
        <div className={`absolute top-2 left-2 w-6 h-6 ${userBg} rounded-full flex items-center justify-center`}>
        </div>
      </div>
      
      {/* Details Section */}
      <div className="p-3">
        {/* Title + Location Row */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-sm text-gray-800">{title}</h3>
          
          {/* ✅ Location Badge styled as per your CSS */}
          <span
            className="text-xs font-normal flex items-center justify-center"
            style={{
              width: '69px',
              height: '24px',
              paddingTop: '4px',
              paddingRight: '8px',
              paddingBottom: '4px',
              paddingLeft: '8px',
              borderRadius: '4px',
              background: '#838383',
              color: 'black', // ✅ Updated text color
              opacity: 1,
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            {location}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">
          Curated small-group experience. Certified guide. Safety first with gear included.
        </p>
        
        {/* Price + Button Row */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">From </span>
            <span className="font-bold text-lg">₹{price}</span>
          </div>

          <button 
            onClick={onViewDetails}
            className="bg-yellow-400 text-xs font-semibold px-3 py-1 rounded hover:bg-yellow-500 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

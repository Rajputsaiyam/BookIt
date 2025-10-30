// import React, { useState } from 'react';

// interface NavbarProps {
//   onSearch: (query: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     onSearch(searchQuery.trim());
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <nav className="bg-white shadow-lg" style={{ height: '87px' }}>
//       <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
//         <div className="text-xl font-bold text-gray-800">TravelApp</div>

//         <div className="flex items-center gap-4" style={{ width: '443px', height: '42px' }}>
//           <div className="relative" style={{ width: '340px', height: '42px' }}>
//             <input
//               type="text"
//               placeholder="Search destinations..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyPress={handleKeyPress}
//               className="w-full h-full bg-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400"
//               style={{
//                 background: '#EDEDED',
//                 paddingTop: '12px',
//                 paddingRight: '16px',
//                 paddingBottom: '12px',
//                 paddingLeft: '16px'
//               }}
//             />
//           </div>

//           <button
//             onClick={handleSearch}
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-colors flex items-center justify-center"
//             style={{
//               width: '87px',
//               height: '42px',
//               background: '#FFD643',
//               paddingTop: '12px',
//               paddingRight: '20px',
//               paddingBottom: '12px',
//               paddingLeft: '20px',
//               borderRadius: '8px'
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav
      className="bg-white shadow-lg"
      style={{
        height: "87px",
        boxShadow: "0px 2px 16px 0px #0000001A",
      }}
    >
      <div
        className="max-w-[1440px] mx-auto flex items-center justify-between h-full"
        style={{
          paddingTop: "16px",
          paddingRight: "124px",
          paddingBottom: "16px",
          paddingLeft: "124px",
        }}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: "84px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Search Section */}
        <div
          className="flex items-center gap-4"
          style={{ width: "443px", height: "42px" }}
        >
          <div className="relative" style={{ width: "340px", height: "42px" }}>
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full h-full bg-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400"
              style={{
                background: "#EDEDED",
                paddingTop: "12px",
                paddingRight: "16px",
                paddingBottom: "12px",
                paddingLeft: "16px",
              }}
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-colors flex items-center justify-center"
            style={{
              width: "87px",
              height: "42px",
              background: "#FFD643",
              paddingTop: "12px",
              paddingRight: "20px",
              paddingBottom: "12px",
              paddingLeft: "20px",
              borderRadius: "8px",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

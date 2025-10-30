// import React, { useState } from "react";
// import HomePage from "./pages/HomePage";
// import DetailsPage from "./pages/DetailsPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import ConfirmationPage from "./pages/ConfirmationPage";

// function App() {
//   const [currentPage, setCurrentPage] = useState<
//     "home" | "details" | "checkout" | "confirmation"
//   >("home");

//   const [selectedActivityId, setSelectedActivityId] = useState<number | null>(null);

//   const handleViewDetails = (activityId: number) => {
//     setSelectedActivityId(activityId);
//     setCurrentPage("details");
//   };

//   const handleBack = () => {
//     if (currentPage === "details") setCurrentPage("home");
//     else if (currentPage === "checkout") setCurrentPage("details");
//     else if (currentPage === "confirmation") setCurrentPage("checkout");
//   };

//   return (
//     <>
//       {currentPage === "home" && <HomePage onViewDetails={handleViewDetails} />}

//       {currentPage === "details" && (
//         <DetailsPage
//           onBack={handleBack}
//           onConfirm={() => setCurrentPage("checkout")}
//         />
//       )}

//       {currentPage === "checkout" && (
//         <CheckoutPage
//           onBack={handleBack}
//           onConfirm={() => setCurrentPage("confirmation")}
//         />
//       )}

//       {currentPage === "confirmation" && <ConfirmationPage />}
//     </>
//   );
// }

// export default App;


import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "details" | "checkout" | "confirmation"
  >("home");

  const [selectedActivityId, setSelectedActivityId] = useState<number | null>(null);

  const handleViewDetails = (activityId: number) => {
    setSelectedActivityId(activityId);
    setCurrentPage("details");
  };

  const handleBack = () => {
    if (currentPage === "details") setCurrentPage("home");
    else if (currentPage === "checkout") setCurrentPage("details");
    else if (currentPage === "confirmation") setCurrentPage("home");
  };

  return (
    <>
      {currentPage === "home" && <HomePage onViewDetails={handleViewDetails} />}

      {currentPage === "details" && (
        <DetailsPage
          onBack={handleBack}
          onConfirm={() => setCurrentPage("checkout")}
        />
      )}

      {currentPage === "checkout" && (
        <CheckoutPage onBack={handleBack} onConfirm={() => setCurrentPage("confirmation")} />
      )}

      {currentPage === "confirmation" && (
        <ConfirmationPage onNavigate={(page) => setCurrentPage(page as any)} />
      )}
    </>
  );
}

export default App;

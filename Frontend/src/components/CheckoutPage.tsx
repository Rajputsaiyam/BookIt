import  { useState } from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';

interface  CheckoutPageProps {
  onNavigateHome: () => void;
  onNavigateToConfirmation: () => void;
  destination?: string;
} 

const  CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigateHome, onNavigateToConfirmation }) => { 
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    promoCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handlePayAndConfirm = () => {
    onNavigateToConfirmation();
  }; 

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="w-full max-w-[1440px] mx-auto h-[87px] flex justify-between items-center px-[124px] shadow-[0px_2px_16px_rgba(0,0,0,0.1)] bg-white">
        <div className="flex items-center gap-4">
          <button onClick={onNavigateHome} className="flex items-center gap-2 text-[#003366]">
            <ArrowLeft className="w-5 h-5" />
            <span>Checkout</span>
          </button>
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-[#003366]" />
            <span className="text-xl font-bold text-[#003366]">highway delite</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4" style={{ width: '443px', height: '42px', gap: '16px' }}>
          <input
            type="text"
            placeholder="Search destinations..."
            className="bg-[#EDEDED] px-4 py-3 text-sm rounded"
            style={{ 
              width: '340px', 
              height: '42px', 
              borderRadius: '4px',
              paddingTop: '12px',
              paddingRight: '16px',
              paddingBottom: '12px',
              paddingLeft: '16px'
            }}
          />
          <button 
            className="bg-[#FFD643] text-black font-medium"
            style={{ 
              width: '87px', 
              height: '42px', 
              borderRadius: '8px',
              paddingTop: '12px',
              paddingRight: '20px',
              paddingBottom: '12px',
              paddingLeft: '20px'
            }}
          >
            Search
          </button>
        </div>
      </nav>

      <div className="relative">
        <div 
          className="absolute bg-[#EFEFEF]"
          style={{
            width: '739px',
            height: '198px',
            top: '155px',
            left: '150px',
            borderRadius: '12px',
            gap: '16px',
            paddingTop: '20px',
            paddingRight: '24px',
            paddingBottom: '20px',
            paddingLeft: '24px'
          }}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Promo code</label>
              <input
                type="text"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white"
              />
            </div>
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
              Apply
            </button>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <input type="checkbox" id="terms" className="rounded" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms and safety policy
            </label>
          </div>
        </div>

        <div 
          className="absolute bg-[#EFEFEF]"
          style={{
            width: '387px',
            height: '349px',
            top: '155px',
            left: '929px',
            borderRadius: '12px',
            gap: '24px',
            padding: '24px'
          }}
        >
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Experience</span>
              <span className="font-medium">Kayaking</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Date</span>
              <span className="font-medium">2025-10-22</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Time</span>
              <span className="font-medium">09:00 am</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Qty</span>
              <span className="font-medium">1</span>
            </div>
            
            <hr className="my-4 border-gray-300" />
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹999</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Taxes</span>
              <span className="font-medium">₹59</span>
            </div>
            
            <hr className="my-4 border-gray-300" />
            
            <div className="flex justify-between mb-6">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">₹958</span>
            </div>
            
            <button 
              onClick={handlePayAndConfirm}
              className="w-full bg-[#FFD643] text-black font-medium py-3 rounded-lg hover:bg-[#FFD700] transition-colors"
            >
              Pay and Confirm
            </button>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-4">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">$</span>
          </div>
          <div className="flex bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center -ml-2">
              <span className="text-white font-bold">S</span>
            </div>
            <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center -ml-2">
              <span className="text-white font-bold">A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
 
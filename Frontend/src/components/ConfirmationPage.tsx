import  { MapPin, Check } from 'lucide-react';

interface ConfirmationPageProps {
  onNavigateHome: () => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="w-full max-w-[1440px] mx-auto h-[87px] flex justify-between items-center px-[124px] shadow-[0px_2px_16px_rgba(0,0,0,0.1)] bg-white">
        <div className="flex items-center gap-2">
          <MapPin className="w-8 h-8 text-[#003366]" />
          <span className="text-xl font-bold text-[#003366]">highway delite</span>
        </div>
        
        <div className="flex items-center gap-4" style={{ width: '443px', height: '42px', gap: '16px' }}>
          <input
            type="text"
            placeholder="Search destinations..."
            className="bg-[#EDEDED] px-4 py-3 text-sm"
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

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-87px)]">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-8">
          <Check className="w-8 h-8 text-white" />
        </div>
        
        <div 
          className="text-[#161616] font-medium text-center mb-4"
          style={{
            width: '294px',
            height: '40px',
            fontSize: '32px',
            lineHeight: '40px',
            fontFamily: 'Inter'
          }}
        >
          Booking Confirmed
        </div>
        
        <div 
          className="text-[#656565] text-center mb-8"
          style={{
            width: '175px',
            height: '24px',
            fontSize: '20px',
            lineHeight: '24px',
            fontFamily: 'Inter',
            fontWeight: '400'
          }}
        >
          Ref ID: HUF56&SO
        </div>
        
        <button 
          onClick={onNavigateHome}
          className="bg-[#E3E3E3] text-black hover:bg-gray-300 transition-colors"
          style={{
            width: '138px',
            height: '36px',
            borderRadius: '4px',
            paddingTop: '8px',
            paddingRight: '16px',
            paddingBottom: '8px',
            paddingLeft: '16px'
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
 
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ActivityCard from '../components/ActivityCard';

interface HomePageProps {
  onViewDetails: (activityId: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onViewDetails }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const activities = [
    { id: 1, title: 'Kayaking', location: 'Uttar', price: 999, image: 'https://images.unsplash.com/photo-1668415871912-4baec8bc7bcb', category: 'Adventure' },
    { id: 2, title: 'Nandi Hills Sunrise', location: 'Bangalore', price: 699, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', category: 'Nature' },
    { id: 3, title: 'Coffee Trail', location: 'Coorg', price: 1299, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e', category: 'Cultural' },
    { id: 4, title: 'Boat Cruise', location: 'Sunderbans', price: 999, image: 'https://images.unsplash.com/photo-1497584062917-342aeed55fdf', category: 'Water Sports' },
    { id: 5, title: 'Bungee Jumping', location: 'Manali', price: 999, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256', category: 'Extreme' },
  ];

  // Filter logic (search in title, location, or category)
  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={setSearchQuery} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                title={activity.title}
                location={activity.location}
                price={activity.price}
                image={activity.image}
                category={activity.category}
                onViewDetails={() => onViewDetails(activity.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">No activities found for “{searchQuery}”</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

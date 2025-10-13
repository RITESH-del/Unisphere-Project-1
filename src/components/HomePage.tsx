import React, { useState } from 'react';
import RejectBooking from './RejectBooking';
import SearchbarBooking from './SearchbarBooking';
import TerminateBooking from './TerminateBooking';
import { Button } from './ui/button';
import OngoingBooking from './OngoingBooking';
import Blacklist from './Blacklist';

const HomePage: React.FC = () => {
  // Separate states for both dialogs
  const [isOngoingOpen, setIsOngoingOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const [isTerminateOpen, setIsTerminateOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [isBlacklistOpen, setIsBlacklistOpen] = useState(false);

  // Mock data
  const mockBooking = {
    cableNumber: "2",
    students: [
      { name: "Mayank Gupta", id: "230553" },
      { name: "Mayank Gupta", id: "230553" },
      { name: "Mayank Gupta", id: "230553" },
      { name: "Mayank Gupta", id: "230553" }
    ],
    checkInTime: "7:20 PM",
    checkOutTime: "7:35 PM",
    remainingTime: "12 minutes 20 seconds",
    requestGenerated: "Wed, 25 January 2025, 12:55 PM",
    bookingTime: "Wed, 25 January 2025, 12:55 7:30 PM - 8:30 PM",
    bookingId: "36330",
    cabinNumber: "2"
  };

  return (
    <div className="min-h-[80px] bg-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Library System
        </h1>

        <div className="space-x-4 mb-6">
          {/* Ongoing Booking */}
          <Button 
            onClick={() => setIsOngoingOpen(true)}
            className="bg-red-600 hover:bg-red-700">
            Ongoing Booking
          </Button>

          {/* Reject Booking */}
          <Button 
            onClick={() => setIsRejectOpen(true)}
            className="bg-blue-600 hover:bg-blue-700">
            Reject Booking
          </Button>

          {/* Terminate Booking */}
          <Button 
            onClick={() => setIsTerminateOpen(true)}
            className="bg-yellow-600 hover:bg-yellow-700">
            Terminate Booking
          </Button>

          {/*Searchbar Booking */}
          <Button 
            onClick={() => setIsSearchbarOpen(true)}
            className="bg-green-600 hover:bg-green-700">
            Searchbar - Approve/Reject Booking
          </Button>



          {/*Blacklist dialog box */}
          <Button 
            onClick={() => setIsBlacklistOpen(true)}
            className="bg-purple-600 hover:bg-purple-700">
            Black List Student
          </Button>
        </div>



        {/* Open rejectBooking.tsx*/}
        <RejectBooking 
          isOpen={isRejectOpen}
          onClose={() => setIsRejectOpen(false)}
          booking={mockBooking}
        />

        {/* open ongoing cabin booking */}
        <OngoingBooking
          isOpen = {isOngoingOpen}
          onClose={() => setIsOngoingOpen(false)}
          booking={mockBooking}
        />

        {/* Open terminateBooking.tsx*/}
        <TerminateBooking 
          isOpen={isTerminateOpen}
          onClose={() => setIsTerminateOpen(false)}
          booking ={mockBooking}
          />

        {/* Open SearchbarBooking.tsx*/}
        <SearchbarBooking 
          isOpen={isSearchbarOpen}
          onClose={() => setIsSearchbarOpen(false)}
          booking={mockBooking}
        />

        {/* Open Blacklist.tsx*/}
        <Blacklist 
          isOpen={isBlacklistOpen}
          onClose={() => setIsBlacklistOpen(false)}
          booking={mockBooking}
        />
        
      </div>
  </div>
  );
};

export default HomePage;

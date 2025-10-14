import React, {useState} from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import TerminateBooking from './TerminateBooking';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { User } from 'lucide-react';


interface Student {
  name: string;
  id: string;
}

interface BookingCardProps {
  isOpen: boolean;
  onClose: () => void;
  booking: {
    cableNumber: string;
    students: Student[];
    checkInTime: string;
    checkOutTime: string;
    remainingTime: string;
    requestGenerated: string;
    bookingTime: string[];
    bookingId: string;
    cabinNumber: string;
  };
}


const OngoingBooking: React.FC<BookingCardProps> = ({ isOpen, onClose, booking }) => {


  const [isTerminateOpen, setIsTerminateOpen] = useState(false);

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
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className = "max-w-2xl w-full bg-white rounded-lg shadow-xl p-0 max-h-[95vh] overflow-y-auto">
        <Card className="border-none">
          {/* Header */}
          <CardHeader>
            <CardTitle>
             <div className="flex justify-center text-lg">
              Cabin Number: {booking.cableNumber}
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent>
            {/* Students List */}
            <div className="space-y-2">             
            {booking.students.map((student, index) => (
              <div key={index} className="flex justify-between items-center border rounded-lg px-3 py-2 bg-white">
            {/* Left side: Profile + Name + ID */}
          <div className="flex items-center gap-3">
            {/* Profile Image */}
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <User className="text-gray-600 h-4 w-4" />
            </div>
            {/* Name + ID */}
            <div className="flex flex-col leading-tight">
              <span className="font-medium text-sm text-gray-900">
                {student.name}
              </span>
              <span className="text-gray-500 text-xs">{student.id}</span>
            </div>
          </div>
          {/* Right side: Expand / Action Icon */}
          <User className="text-gray-500 h-4 w-4" />
          </div>
          ))}
        </div>


            {/* Time Section */}
            <div className="space-y-2 pt-5">
              <div className="flex justify-between items-center">
                <div className="flex flex-col w-1/2 pr-2">
                  <span className="font-medium text-sm mb-1">From</span>
                  <div className="text-gray-600 text-sm border rounded-lg px-3 py-2 w-full">
                    {booking.checkInTime}
                  </div>
                </div>
                <div className="flex flex-col w-1/2 pl-2">
                  <span className="font-medium text-sm mb-1">To</span>
                  <div className="text-gray-600 text-sm border rounded-lg px-3 py-2 w-full">
                    {booking.checkOutTime}
                  </div>
                </div>
              </div>
               </div>

            

            {/* Request Generated Section */}
            <div className="flex justify-center items-center gap-2 my-4">
              <span className="font-medium">Remaining Time:</span>
              <span className=" text-gray-600 text-sm">{booking.remainingTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Request Generated:</span>
              <span className=" text-gray-600 text-sm">{booking.requestGenerated}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Booking Time:</span>
              <span className=" text-gray-600 text-sm">{booking.bookingTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Booking ID:</span>
              <span className=" text-gray-600 text-sm">{booking.bookingId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Cabin Number:</span>
              <span className=" text-gray-600 text-sm">{booking.cabinNumber}</span>
            </div>
            </CardContent>

          {/* Footer Buttons */}
          <CardFooter>
            <div  onClick={() => setIsTerminateOpen(true)} className="flex justify-center items-center gap-4 w-full pb-4 pt-2">
            <Button className="bg-[#7785FC] hover:bg-[#6c78eb] text-white px-8 rounded-full">
              Terminate
            </Button>
             {/* Open terminateBooking.tsx*/}
              <TerminateBooking 
                isOpen={isTerminateOpen}
                onClose={() => setIsTerminateOpen(false)}
                booking = {mockBooking}
                />
            </div>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default OngoingBooking;
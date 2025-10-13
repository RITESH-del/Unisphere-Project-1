import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog"; 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from './ui/button';

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

const Blacklist : React.FC<BookingCardProps> = ({ isOpen, onClose, booking }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
        <DialogContent className = "max-w-2xl w-full bg-white rounded-lg shadow-xl p-0 ">
        <Card className="border-none">
            {/* Header */}
            <CardHeader>
            <CardTitle>
                <div className="flex justify-center text-lg font-bold">
                Black List Student
                </div>
            </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex justify-centre align-center gap-3 mb-4">
              <span className="font-medium">Enter Reason for Blacklisting:</span>
              <span className=" text-gray-600 text-sm text-right ">Mayank Gupta</span>
            </div>

            {/* Blacklist Reason */}
            <div className="space-y-  pt-2">
            <textarea 
                placeholder="lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ."
                className="w-full h-24 border rounded-lg p-3 text-sm resize-none"
                required
                />
            </div>
            </CardContent>

        {/* Footer Buttons */}
          <CardFooter>
            <div className="flex justify-center items-center gap-4 w-full pb-4 pt-2">
            <Button className="bg-[#7785FC] hover:bg-[#6c78eb] text-white px-8 rounded-full">
              Submit
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 px-8 rounded-full hover:bg-gray-50"
              onClick={onClose}
            >
              Cancel
            </Button>
            </div>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default Blacklist;
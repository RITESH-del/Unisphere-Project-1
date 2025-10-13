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
        <DialogContent className = "max-w-2xl w-full bg-white rounded-lg shadow-xl p-0 max-h-[95vh] overflow-y-auto">
        <Card className="border-none">
            {/* Header */}
            <CardHeader>
            <CardTitle>
                <div className="flex justify-center text-lg">
                Black List Student
                </div>
            </CardTitle>
            </CardHeader>

                <CardContent>
                     <div className="flex justify-between">
              <span className="font-medium">Request Generated:</span>
              <span className=" text-gray-600 text-sm">Mayank Gupta</span>
            </div>

            {/* Blacklist Reason */}
            <div className="space-y-2  pt-2">
            <textarea 
                placeholder="lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
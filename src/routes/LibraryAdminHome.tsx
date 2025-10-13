import {Search} from "lucide-react";
import LibrarySlotBox from "../components/LibrarySlotBox";
import logo from "../assets/Logo.svg";

interface dataType {
    slot: string;
    mins: number;
}

export default function HomePage () {
    const data:dataType[] = [{slot:"01", mins:120}, {slot:"02", mins:45}, {slot:"03", mins:30},
                  {slot:"04", mins:100}, {slot:"05", mins:90}, {slot:"06", mins:50},
                  {slot:"07", mins:60}, {slot:"08", mins:70}, {slot:"09", mins:57},
                  {slot:"10", mins:69}, {slot:"11", mins:33}, {slot:"12", mins:59},
                  {slot:"13", mins:103}, {slot:"14", mins:22}, {slot:"15", mins:110},
                  {slot:"16", mins:78}, {slot:"17", mins:95}, {slot:"18", mins:80},
    ];

    // const [value, setValue] = useState(0);

    return (
<div className="flex flex-col items-center">
    <div>
        <div className="ml-[25px]" >
              <img src={logo}></img>
        </div>

        <div className="py-1 w-[360px] my-[20px] ml-[25px] border-[#7785FC] border-b-[1px]">
            <h1 className="text-xl/[1.6] font-normal ">Welcome Librarian</h1>
        </div>

        <div className="flex flex-row justify-between  min-w-[75vw] items-center my-[20px] ml-[25px]">
            <div className="border-[#7785FC] border-[1px] rounded-3xl h-[85px] w-[320px] flex flex-row justify-between items-center p-5">
                <span>Total Cabins Occupied</span>
                <span className="text-[#7785FC] text-[36px]">04</span>
            </div>

            <div className="flex flex-row">
                <button className="w-[140px] h-[44px] m-2 bg-[#7785FC] text-[#fff] rounded-3xl ">Book Cabin</button>
                <button className="w-[140px] h-[44px] m-2 bg-[#7785FC] text-[#fff] rounded-3xl ">View Bookings</button>
            </div>
        </div>

        <div className="flex flex-row w-[65vw] h-[60px] rounded-2xl border-neutral-200 border-[1px] my-[20px] bg-neutral-100 mx-[auto]">
        <Search className="my-[auto] mx-[20px] text-neutral-400 "/>
            <input type="text" 
                className="w-[80%]  bg-neutral-100 focus:outline-none focus:border-none"
                placeholder="Search by Booking ID ,name or any related keyword"/> 
        </div>

        <div className="grid grid-cols-6 grid-rows-3 gap-y-10 my-[20px] mx-[auto] w-[75vw] px-[80px]"> 
            {data.map((values, index)=>{
                return <LibrarySlotBox key={index} slot={values.slot} mins={values.mins}/>
})}
        </div>

     </div>


        </div>
    );
}
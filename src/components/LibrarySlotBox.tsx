import React from 'react';

type childProps = {
    slot: string,
    mins: number,

};
const LibrarySlotBox: React.FC<childProps> = ({slot, mins}) => {
    const percentage = Math.floor((mins/120) * 100);
console.log(percentage)
    return (
        <>
        <div 
        className={`bg-[#D9D9D9] rounded-xl h-[100px] w-[100px] flex justify-center items-stretch
        `}  style={{background: `linear-gradient(to top, #7785FC ${percentage}%, #D9D9D9 ${percentage}%)`,}}>
{/* Uses inline style for dynamic gradient since Tailwind doesn't support variable color stops. */}
            <div className="text-3xl absolute text-neutral-100 self-center font-bold">{slot}</div>
            <div className="self-end text-neutral-100 text-lg font-bold  my-[10px]">{mins} min</div>
        </div>
        </>
    );
}

export default LibrarySlotBox;
import React from "react";

const DetailOrder: React.FC = () => {
  return (
    <div className="bg-white w-[20%] border-l-[6px] border-solid border-gray-300 px-4 py-5 flex flex-col justify-between">
      {/* Content */}
      <div className=" text-black">
        <h1 className="text-[#719ED0] text-2xl font-semibold">Order Details</h1>
      </div>

      <div className="p-4 rounded-md mt-4 border-2 border-solid border-[#719ED0] text-black">KOTAK</div>

      <div className="text-black">
        <div className="p-4 mt-4 border-t-2 border-l-2 border-r-2 border-solid border-[#719ED0] rounded-t-md">
          Box on the bottom side
        </div>
        <button className="bg-[#719ED0] w-[100%] py-2 font-semibold text-lg rounded-b-md text-white">
          Payment
        </button>
      </div>
    </div>
  );
};

export default DetailOrder;

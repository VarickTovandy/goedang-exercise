import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Catalog from "../components/Catalog";
import DetailOrder from "../components/DetailOrder";
import WalletBoxContainer from "@/components/WalletBoxContainer";

const Page = () => {
  return (
    <div className="flex ">
      {/* <WalletBoxContainer /> */}
      <Sidebar />
      <div className="w-[73%] bg-white px-12 py-8">
        <SearchBar />
        <Catalog />
      </div>
      <DetailOrder />
      {/* Rest of your page content */}
    </div>
  );
};

export default Page;

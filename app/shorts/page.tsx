"use client";

import { Context } from "../../appContext/context";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoList from "@/components/VideoList";
import { useContext } from "react";

export default function TrendingPage() {
  let { data } = useContext(Context);

  return (
    <div className="flex">
      <div className="flex-shrink-0 w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Shorts</h1>
          <VideoList videos={data} />
        </div>
      </div>
    </div>
  );
}

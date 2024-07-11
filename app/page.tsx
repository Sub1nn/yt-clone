"use client";

import { Context } from "../appContext/context";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoList from "@/components/VideoList";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

export default function HomePage() {
  let { data, setQuery } = useContext(Context);
  const params = useSearchParams();

  const category = params.get("category");

  useEffect(() => {
    setQuery(category);
  }, [category, setQuery]);

  const pageTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "Home";

  console.log(category);
  return (
    <div className="flex">
      <div className="flex-shrink-0 w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">{pageTitle}</h1>
          <VideoList videos={data} />
        </div>
      </div>
    </div>
  );
}

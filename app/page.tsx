import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-shrink-0 w-64">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
      </div>
    </div>
  );
}

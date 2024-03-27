import { Home, MonitorCheck, MonitorDown, MonitorPlay, SquarePlay } from "lucide-react";
import { ReactNode } from "react";


export default function Sidebar () {
    return (
        <div className="flex flex-col w-16 ml-2 mt-3 h-screen gap-8 items-center text-xs">
            
                <SideButton text="Home" icon={ <Home/> }/>
                <SideButton text="Shorts" icon={ <MonitorPlay/> }/>
                <SideButton text="Subscriptions" icon={ <MonitorCheck/> }/>
                <SideButton text="You" icon={ <SquarePlay/> }/>
              
        </div>
    );
}

function SideButton({ text , icon}: { text: string , icon : ReactNode}) {
    return (
        <div>
            <button className="flex flex-col items-center gap-2">
                {icon}
                {text}
            </button>
        </div>
    );
}
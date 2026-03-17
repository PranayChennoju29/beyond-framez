import "./photographer.css";
import Navbar from "./navbar";
import { ReactNode } from "react";

interface PhotographerLayoutProps {
    children: ReactNode;
}

export default function PhotographerLayout({ children }: PhotographerLayoutProps) {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            {children}
        </div>
    );
}
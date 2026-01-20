import Sidebar from "@/components/Sidebar";
import { Layout } from "antd";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen! flex">
            <Sidebar />
            <div>
                {children}
            </div>
        </div>

    )
}
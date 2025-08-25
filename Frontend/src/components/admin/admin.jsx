import React, { useState } from "react";
import Sidebar from "../Navbar";
import { Home, BarChart3, Settings } from "lucide-react";

const adminNav = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Verified Users", href: "/admin/verified-users", icon: BarChart3 },
    { name: "Student Credentials", href: "/admin/student-cred", icon: BarChart3 },
    { name: "Clerk Credentials", href: "/admin/clerk-cred", icon: BarChart3 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
    { name: "Logout", href: "/logout", icon: Settings }, // Replace icon if needed
];

export default function Admin() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                nav={adminNav}
            />
            <main className="flex-1 p-8">
                <button
                    className="lg:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={() => setSidebarOpen(true)}
                >
                    Open Menu
                </button>
                <h1>Admin Dashboard</h1>
                {/* Add dashboard widgets or summary here */}
            </main>
        </div>
    );
}

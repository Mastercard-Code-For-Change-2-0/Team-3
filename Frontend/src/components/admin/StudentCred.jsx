import React, { useState } from "react";

export default function StudentCred() {
    const [users] = useState([
        { id: 1, name: "Alice Johnson", employStat: "Employed", companyName: "Acme Corp" },
        { id: 2, name: "Bob Smith", employStat: "Seeking", companyName: "—" },
        { id: 3, name: "Carla Gomez", employStat: "Employed", companyName: "Globex" },
        { id: 4, name: "David Lee", employStat: "Intern", companyName: "Initech" },
        { id: 5, name: "Eva Chen", employStat: "Employed", companyName: "Umbrella" }
    ]);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Student Credentials</h2>
                <div className="text-xs uppercase tracking-wide text-gray-500 mb-2 px-2 grid grid-cols-3 gap-4">
                    <span>Name</span>
                    <span>Employment Status</span>
                    <span>Company</span>
                </div>
                <ul className="divide-y divide-gray-200">
                    {users.map(user => (
                        <li key={user.id} className="grid grid-cols-3 items-center gap-4 py-3 px-2">
                            <span className="font-medium text-gray-900 truncate">{user.name}</span>
                            <span className="text-gray-700">{user.employStat}</span>
                            <span className="text-gray-700 truncate">{user.companyName}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

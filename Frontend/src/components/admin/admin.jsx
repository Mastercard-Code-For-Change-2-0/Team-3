import React, { useState } from "react";

export default function Admin() {
    const [admins] = useState([
        { id: 1, name: "Admin One", email: "admin1@example.com" },
        { id: 2, name: "Admin Two", email: "admin2@example.com" },
        { id: 3, name: "Admin Three", email: "admin3@example.com" }
    ]);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Admins</h2>
                <div className="text-xs uppercase tracking-wide text-gray-500 mb-2 px-2 grid grid-cols-2 gap-4">
                    <span>Name</span>
                    <span>Email</span>
                </div>
                <ul className="divide-y divide-gray-200">
                    {admins.map(admin => (
                        <li key={admin.id} className="grid grid-cols-2 items-center gap-4 py-3 px-2">
                            <span className="font-medium text-gray-900 truncate">{admin.name}</span>
                            <span className="text-gray-700 truncate">{admin.email}</span>
                        </li>
                    ))}
                </ul>
                <div className="pt-6">
                    <a
                        href="/admin/create"
                        className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded"
                    >
                        Create New Admin
                    </a>
                </div>
            </div>
        </div>
    );
}

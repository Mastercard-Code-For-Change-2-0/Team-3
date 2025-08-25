import React from "react";

import React, { useState } from "react";

export default function StudentCred() {
    const [users, setUsers] = useState([]);

    const fetchVerifiedUsers = async () => {
        const response = await fetch("/api/VerifiedUsers");
        const data = await response.json();
        setUsers(data);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Student Credentials</h2>
            <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={fetchVerifiedUsers}>
                Fetch Verified Users
            </button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} | {user.employStat} | {user.companyName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

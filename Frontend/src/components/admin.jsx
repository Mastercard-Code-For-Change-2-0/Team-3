import React,{ useState } from "react";
import Sidebar from "./Navbar";
export default function Admin(){
    const [users, setUsers] = useState([]);

    const fetchVerifiedUsers = async () => {
        const response = await fetch("/api/VerifiedUsers");
        const data = await response.json();
        setUsers(data);
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={fetchVerifiedUsers}>Fetch Verified Users</button>
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

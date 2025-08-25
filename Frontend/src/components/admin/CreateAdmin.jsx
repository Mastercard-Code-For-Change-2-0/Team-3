import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAdmin() {
    const navigate = useNavigate();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="bg-white rounded-lg shadow p-6 max-w-xl">
                <h2 className="text-xl font-semibold mb-4">Create New Admin</h2>
                <form
                    className="flex flex-col gap-3"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.target;
                        const username = form.username.value;
                        const password = form.password.value;
                        // TODO: Replace with actual API call
                        alert(`Admin created: ${username}`);
                        navigate("/admin");
                    }}
                >
                    <label className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Username</span>
                        <input name="username" type="text" placeholder="Username" required className="border px-3 py-2 rounded" />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="text-sm text-gray-600">Password</span>
                        <input name="password" type="password" placeholder="Password" required className="border px-3 py-2 rounded" />
                    </label>
                    <div className="flex items-center gap-3 pt-2">
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Create Admin</button>
                        <button type="button" onClick={() => navigate("/admin")} className="px-4 py-2 rounded border">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}



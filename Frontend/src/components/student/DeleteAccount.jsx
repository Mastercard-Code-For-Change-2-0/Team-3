import React from "react";

export default function DeleteAccount() {
    return (
        <div className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to delete your account?</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete Account</button>
        </div>
    );
}

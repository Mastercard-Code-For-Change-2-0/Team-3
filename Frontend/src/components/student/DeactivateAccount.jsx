import React from "react";

export default function DeactivateAccount() {
    return (
        <div className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Deactivate Account</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to deactivate your account?</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Deactivate Account</button>
        </div>
    );
}

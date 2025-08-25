import React from "react";

export default function ChangePassword({ passwordData, handlePasswordChange, handleSavePassword }) {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
            <form className="space-y-4">
                <input type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} placeholder="Current Password" className="border p-2 rounded w-full" />
                <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} placeholder="New Password" className="border p-2 rounded w-full" />
                <input type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} placeholder="Confirm Password" className="border p-2 rounded w-full" />
                <button type="button" onClick={handleSavePassword} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Update Password</button>
            </form>
        </div>
    );
}

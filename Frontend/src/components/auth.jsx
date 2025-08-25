import React, { useState } from 'react';
import { User, Lock, UserPlus, GraduationCap, Shield, Settings } from 'lucide-react';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    
    if (activeTab === 'register' && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (activeTab === 'login') {
        console.log(`${userType} login:`, { username: formData.username, password: formData.password });
        alert(`Welcome ${userType}! Login successful.`);
      } else {
        console.log('Student registration:', formData);
        alert('Registration successful! You can now login.');
      }
      // Reset form
      setFormData({ name: '', username: '', password: '' });
    }
  };

  const getUserIcon = (type) => {
    switch(type) {
      case 'student': return <GraduationCap className="w-5 h-5" />;
      case 'clerk': return <User className="w-5 h-5" />;
      case 'admin': return <Shield className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-4">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Y4D Portal</h1>
          <p className="text-gray-600">Youth for Development Foundation</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <User className="w-4 h-4" />
                Login
              </div>
            </button>
            <button
              onClick={() => {
                setActiveTab('register');
                setUserType('student');
              }}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                activeTab === 'register'
                  ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <UserPlus className="w-4 h-4" />
                Register
              </div>
            </button>
          </div>

          <div className="p-8">
            {/* User Type Selection (Login only) */}
            {activeTab === 'login' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select User Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['student', 'clerk', 'admin'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setUserType(type)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        userType === type
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {getUserIcon(type)}
                        <span className="text-xs font-medium capitalize">{type}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {/* Name Field (Register only) */}
              {activeTab === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
              )}

              {/* Username Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  {getUserIcon(userType)}
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    {getUserIcon(userType)}
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.username ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder="Enter your username"
                  />
                </div>
                {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.password ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              >
                {activeTab === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              {activeTab === 'login' ? (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Students can register for new accounts
                  </p>
                  <p className="text-xs text-gray-500">
                    Clerk & Admin accounts are managed by administrators
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Registration is available for students only
                  </p>
                  <p className="text-xs text-gray-500">
                    Already have an account? Switch to Login tab
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2024 Y4D Foundation. Empowering youth through education.</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
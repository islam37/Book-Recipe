import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load profile data from localStorage based on user email
  useEffect(() => {
    if (user) {
      const userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '{}');
      const userProfile = userProfiles[user.email];
      
      if (userProfile) {
        setProfileData(userProfile);
      }
      setLoading(false);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your profile</h2>
          <p className="text-gray-600">You need to be authenticated to access this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h2>
          <p className="text-gray-600">We couldn't find your profile information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Profile</span>
          </h1>
          <p className="mt-2 text-gray-600">Here's your account information</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="px-8 py-8">
            {/* Profile Header */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                {profileData.firstName?.[0]}{profileData.lastName?.[0]}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {profileData.firstName} {profileData.lastName}
              </h2>
              <p className="text-gray-600">{profileData.email}</p>
            </div>

            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">First Name</label>
                  <p className="text-lg text-gray-900">{profileData.firstName}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Last Name</label>
                  <p className="text-lg text-gray-900">{profileData.lastName}</p>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                  <p className="text-lg text-gray-900">{profileData.email}</p>
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Status</h3>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-green-800 font-medium">Account Active</span>
                </div>
                <p className="text-sm text-green-600 mt-1">Your account is in good standing</p>
              </div>
            </div>

            {/* Member Since */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-500 mb-1">Member Since</label>
              <p className="text-gray-900">
                {user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="px-4 py-3 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors">
              Edit Profile (Coming Soon)
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
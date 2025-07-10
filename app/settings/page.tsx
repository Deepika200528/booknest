'use client';

import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiBell, FiMoon, FiGlobe, FiCreditCard, FiShield, FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function SettingsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('account');
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    language: 'en',
    theme: 'light',
    notifications: true,
    twoFactorAuth: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Settings updated successfully');
    } catch (error) {
      toast.error('Failed to update settings');
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    toast.success('Logged out successfully');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            {/* Sidebar navigation */}
            <aside className="py-6 lg:col-span-3">
              <nav className="space-y-1">
                {[
                  { name: 'Account', icon: FiUser, tab: 'account' },
                  { name: 'Notifications', icon: FiBell, tab: 'notifications' },
                  { name: 'Appearance', icon: FiMoon, tab: 'appearance' },
                  { name: 'Language', icon: FiGlobe, tab: 'language' },
                  { name: 'Billing', icon: FiCreditCard, tab: 'billing' },
                  { name: 'Security', icon: FiShield, tab: 'security' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.tab)}
                    className={`${activeTab === item.tab
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full`}
                  >
                    <item.icon
                      className={`${activeTab === item.tab
                        ? 'text-indigo-500 group-hover:text-indigo-500'
                        : 'text-gray-400 group-hover:text-gray-500'
                        } flex-shrink-0 -ml-1 mr-3 h-5 w-5`}
                    />
                    <span className="truncate">{item.name}</span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-9">
              <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
                {/* Account Settings */}
                {activeTab === 'account' && (
                  <div className="py-6 px-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
                      <span className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer">
                        Edit
                      </span>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notification Settings */}
                {activeTab === 'notifications' && (
                  <div className="py-6 px-4 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Configure how you receive notifications.
                    </p>
                    <div className="mt-6">
                      <fieldset>
                        <legend className="text-base font-medium text-gray-900">Email Notifications</legend>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            <input
                              id="notifications"
                              name="notifications"
                              type="checkbox"
                              checked={formData.notifications}
                              onChange={handleChange}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                            <label htmlFor="notifications" className="ml-3 block text-sm font-medium text-gray-700">
                              Receive email notifications
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                )}

                {/* Appearance Settings */}
                {activeTab === 'appearance' && (
                  <div className="py-6 px-4 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Appearance</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Customize how the app looks on your device.
                    </p>
                    <div className="mt-6">
                      <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
                        Theme
                      </label>
                      <select
                        id="theme"
                        name="theme"
                        value={formData.theme}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Language Settings */}
                {activeTab === 'language' && (
                  <div className="py-6 px-4 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Language & Region</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Set your preferred language and region settings.
                    </p>
                    <div className="mt-6">
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                        Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Billing Settings */}
                {activeTab === 'billing' && (
                  <div className="py-6 px-4 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Billing Information</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage your subscription and payment methods.
                    </p>
                    <div className="mt-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p className="text-sm text-gray-500">Current Plan: <span className="font-medium">Premium</span></p>
                        <p className="text-sm text-gray-500 mt-2">Next Billing Date: January 15, 2024</p>
                        <button
                          type="button"
                          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Manage Subscription
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Settings */}
                {activeTab === 'security' && (
                  <div className="py-6 px-4 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Security</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Update your password and enable two-factor authentication.
                    </p>
                    <div className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                            Current Password
                          </label>
                          <div className="mt-1">
                            <input
                              type="password"
                              id="current-password"
                              name="current-password"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                            New Password
                          </label>
                          <div className="mt-1">
                            <input
                              type="password"
                              id="new-password"
                              name="new-password"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm New Password
                          </label>
                          <div className="mt-1">
                            <input
                              type="password"
                              id="confirm-password"
                              name="confirm-password"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="twoFactorAuth"
                            name="twoFactorAuth"
                            type="checkbox"
                            checked={formData.twoFactorAuth}
                            onChange={handleChange}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label htmlFor="twoFactorAuth" className="ml-3 block text-sm font-medium text-gray-700">
                            Enable two-factor authentication
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer with save button */}
                <div className="py-4 px-4 sm:px-6 flex justify-end">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
                  >
                    <FiLogOut className="mr-2 h-4 w-4" />
                    Logout
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
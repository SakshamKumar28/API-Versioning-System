import React, { useState, useEffect } from 'react';
import { createUserV1, createUserV2, getUsersV1, getUsersV2 } from './services/api';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  const [v1Users, setV1Users] = useState([]);
  const [v2Users, setV2Users] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
  const [v1FormData, setV1FormData] = useState({ name: '', email: '' });
  const [v2FormData, setV2FormData] = useState({ firstName: '', lastName: '', email: '' });

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const fetchUsers = async () => {
    try {
      const v1Res = await getUsersV1();
      const v2Res = await getUsersV2();
      setV1Users(v1Res.data.data || []);
      setV2Users(v2Res.data.data || []);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleV1Submit = async (e) => {
    e.preventDefault();
    try {
      await createUserV1(v1FormData);
      setV1FormData({ name: '', email: '' });
      fetchUsers();
      alert("V1 User Created!");
    } catch (error) {
      alert("Error creating V1 user");
    }
  };

  const handleV2Submit = async (e) => {
    e.preventDefault();
    try {
      await createUserV2(v2FormData);
      setV2FormData({ firstName: '', lastName: '', email: '' });
      fetchUsers();
      alert("V2 User Created!");
    } catch (error) {
      alert("Error creating V2 user");
    }
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 bg-cream dark:bg-dark-bg`}>
      <header className="max-w-6xl mx-auto mb-12 text-center relative">
        <div className="absolute right-0 top-0">
            <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-dark-green text-cream dark:bg-cream dark:text-dark-green font-bold text-sm shadow-lg transition-transform hover:scale-105"
            >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
        </div>
        <h1 className="text-5xl font-bold text-dark-green dark:text-cream mb-4 transition-colors">API Versioning System</h1>
        <p className="text-xl text-dark-green/80 dark:text-cream/80 transition-colors">Demonstrating Backward Compatibility & Evolution</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* V1 Section */}
        <section className="space-y-8">
          <Card title="Version 1 API" className="border-t-8 border-terracotta">
            <form onSubmit={handleV1Submit}>
              <Input 
                label="Full Name" 
                name="name" 
                value={v1FormData.name} 
                onChange={(e) => setV1FormData({...v1FormData, name: e.target.value})}
                required 
              />
              <Input 
                label="Email" 
                name="email" 
                type="email"
                value={v1FormData.email} 
                onChange={(e) => setV1FormData({...v1FormData, email: e.target.value})}
                required 
              />
              <Button type="submit" variant="primary" className="w-full">Create V1 User</Button>
            </form>
            <p className="mt-4 text-sm text-dark-green/60 dark:text-cream/60 italic">
              Endpoint: <code className="bg-dark-green/10 dark:bg-cream/10 px-1 rounded">POST /api/v1/users</code><br/>
              Schema: Single `name` field
            </p>
          </Card>

          <Card title="V1 Users List">
            <ul className="space-y-3">
              {v1Users.length === 0 && <p className="text-dark-green/50 dark:text-cream/50">No users found.</p>}
              {v1Users.map((user) => (
                <li key={user._id} className="bg-white dark:bg-dark-green/30 p-4 rounded-lg shadow-sm border border-dark-green/5 dark:border-cream/5 transition-colors">
                  <div className="font-bold text-dark-green dark:text-cream">{user.name}</div>
                  <div className="text-sm text-dark-green/70 dark:text-cream/70">{user.email}</div>
                  <div className="text-xs text-terracotta mt-1">ID: {user._id}</div>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* V2 Section */}
        <section className="space-y-8">
          <Card title="Version 2 API" className="border-t-8 border-mustard">
            <form onSubmit={handleV2Submit}>
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="First Name" 
                  name="firstName" 
                  value={v2FormData.firstName} 
                  onChange={(e) => setV2FormData({...v2FormData, firstName: e.target.value})}
                  required 
                />
                <Input 
                  label="Last Name" 
                  name="lastName" 
                  value={v2FormData.lastName} 
                  onChange={(e) => setV2FormData({...v2FormData, lastName: e.target.value})}
                  required 
                />
              </div>
              <Input 
                label="Email" 
                name="email" 
                type="email"
                value={v2FormData.email} 
                onChange={(e) => setV2FormData({...v2FormData, email: e.target.value})}
                required 
              />
              <Button type="submit" variant="secondary" className="w-full">Create V2 User</Button>
            </form>
             <p className="mt-4 text-sm text-dark-green/60 dark:text-cream/60 italic">
              Endpoint: <code className="bg-dark-green/10 dark:bg-cream/10 px-1 rounded">POST /api/v2/users</code><br/>
              Schema: Split `firstName` & `lastName`
            </p>
          </Card>

           <Card title="V2 Users List">
            <ul className="space-y-3">
              {v2Users.length === 0 && <p className="text-dark-green/50 dark:text-cream/50">No users found.</p>}
              {v2Users.map((user) => (
                <li key={user._id} className="bg-white dark:bg-dark-green/30 p-4 rounded-lg shadow-sm border border-dark-green/5 dark:border-cream/5 transition-colors">
                  <div className="font-bold text-dark-green dark:text-cream">{user.firstName} {user.lastName}</div>
                  <div className="text-sm text-dark-green/70 dark:text-cream/70">{user.email}</div>
                  <div className="text-xs text-mustard mt-1">ID: {user._id}</div>
                </li>
              ))}
            </ul>
          </Card>
        </section>

      </main>
    </div>
  );
}

export default App;

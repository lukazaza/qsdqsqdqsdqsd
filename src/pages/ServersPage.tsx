import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import ServerCard from '../components/ServerCard';
import { discordServers, promotedServers, serverCategories } from '../data/servers';
import { Search, Filter, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const ServersPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showPromoted, setShowPromoted] = useState(false);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const servers = showPromoted ? promotedServers : discordServers;
  
  const filteredServers = servers.filter((server) => {
    const matchesSearch = server.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         server.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || server.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0F0518] pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {showPromoted ? 'Featured Servers' : 'Discord Servers'}
            </h1>
            <button
              onClick={() => setShowPromoted(!showPromoted)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                showPromoted 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-[#1A0F2E] text-purple-400 hover:bg-purple-600/20'
              }`}
            >
              {showPromoted ? <Crown className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
              {showPromoted ? 'Featured' : 'Regular'}
            </button>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {serverCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-[#1A0F2E] text-purple-400 hover:bg-purple-600/20'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-grow">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search servers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1A0F2E] border border-purple-900 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>
          
          {filteredServers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServers.map((server, index) => (
                <motion.div
                  key={server.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServerCard server={server} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No servers found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}       
        </motion.div>
      </div>
    </div>
  );
};

export default ServersPage;
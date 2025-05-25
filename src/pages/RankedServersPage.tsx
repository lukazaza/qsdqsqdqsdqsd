import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, Trophy, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';
import { rankedServers } from '../data/servers';

const RankedServersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const serversPerPage = 20;

  const filteredServers = rankedServers.filter(server => 
    server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    server.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="text-yellow-400" size={24} />;
      case 2:
        return <Medal className="text-gray-400" size={24} />;
      case 3:
        return <Trophy className="text-amber-700" size={24} />;
      default:
        return <span className="text-lg font-bold text-purple-400">#{rank}</span>;
    }
  };

  const startIndex = (currentPage - 1) * serversPerPage;
  const endIndex = startIndex + serversPerPage;
  const totalPages = Math.ceil(filteredServers.length / serversPerPage);
  const currentServers = filteredServers.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-[#0F0518] pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Server Rankings</h1>
            
            <div className="w-full md:w-auto flex gap-4">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search servers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#1A0F2E] border border-purple-900 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {currentServers.map((server) => (
              <motion.div
                key={server.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-[#1A0F2E] to-[#2D1B4E] rounded-lg p-6 flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  {getRankBadge(server.ranking)}
                </div>
                
                <img
                  src={server.iconUrl}
                  alt={server.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                />
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white">{server.name}</h3>
                  <p className="text-purple-400">{server.memberCount.toLocaleString()} members</p>
                  <p className="text-gray-400 mt-2 line-clamp-2">{server.description}</p>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end gap-2">
                  <div className="text-purple-400">
                    Level {server.boostLevel}
                  </div>
                  <a
                    href={server.inviteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors"
                  >
                    Join
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 text-white hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber = i + 1;
                if (currentPage > 3 && totalPages > 5) {
                  pageNumber = currentPage - 2 + i;
                }
                if (currentPage > totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                }
                
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`w-10 h-10 rounded-lg ${
                      currentPage === pageNumber
                        ? 'bg-purple-600 text-white'
                        : 'text-white hover:bg-purple-600/20'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 text-white hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RankedServersPage;
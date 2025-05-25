import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { discordServers } from '../data/servers';

const RankedServersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const serversPerPage = 10;

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
  const totalPages = 5; // Fixed to 5 pages as requested

  return (
    <div className="min-h-screen bg-[#0F0518] pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">Server Rankings</h1>

          <div className="grid gap-4">
            {discordServers.slice(startIndex, endIndex).map((server, index) => (
              <motion.div
                key={server.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-[#1A0F2E] to-[#2D1B4E] rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              >
                <div className="flex-shrink-0">
                  {getRankBadge(startIndex + index + 1)}
                </div>
                
                <img
                  src={server.iconUrl}
                  alt={server.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500"
                />
                
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{server.name}</h3>
                  <p className="text-purple-400">{server.memberCount.toLocaleString()} members</p>
                </div>

                <a
                  href={server.inviteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 rounded-md transition-colors text-sm sm:text-base"
                >
                  Join
                </a>
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
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === i + 1
                      ? 'bg-purple-600 text-white'
                      : 'text-white hover:bg-purple-600/20'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
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

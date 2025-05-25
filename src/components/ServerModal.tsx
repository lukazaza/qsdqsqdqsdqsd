import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Zap, ExternalLink } from 'lucide-react';
import { DiscordServer } from '../types';

interface ServerModalProps {
  server: DiscordServer;
  isOpen: boolean;
  onClose: () => void;
}

const ServerModal: React.FC<ServerModalProps> = ({ server, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#1A0F2E] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden z-50"
        >
          {/* Header with server icon and name */}
          <div className="relative h-40 bg-gradient-to-r from-purple-900 to-indigo-900">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-purple-300 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="absolute -bottom-12 left-6 flex items-end">
              <img
                src={server.iconUrl}
                alt={server.name}
                className="w-24 h-24 rounded-full border-4 border-[#1A0F2E] object-cover"
              />
            </div>
          </div>

          {/* Server information */}
          <div className="p-6 pt-16">
            <h2 className="text-2xl font-bold text-white mb-2">{server.name}</h2>
            
            <div className="flex items-center gap-4 text-purple-300 mb-6">
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{server.memberCount.toLocaleString()} members</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap size={16} />
                <span>Level {server.boostLevel}</span>
              </div>
            </div>

            <div className="bg-[#2D1B4E] rounded-lg p-4 mb-6">
              <p className="text-gray-300">{server.description}</p>
            </div>

            <div className="space-y-4">
              {server.promoted && (
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <span className="text-purple-300 font-medium">
                    ✨ Featured Server - {server.promotionLevel} Status
                  </span>
                </div>
              )}

              <a
                href={server.inviteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center"
              >
                Join Server <ExternalLink size={16} className="inline ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServerModal;
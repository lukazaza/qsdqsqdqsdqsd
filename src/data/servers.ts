import { DiscordServer } from '../types';

// Generate 100 sample servers for the ranking
const generateRankedServers = (): DiscordServer[] => {
  const servers: DiscordServer[] = [];
  
  for (let i = 1; i <= 100; i++) {
    servers.push({
      id: `ranked-${i}`,
      name: `Top Server #${i}`,
      description: `One of the best Discord servers in our network. Ranked #${i} for its active community and excellent content.`,
      category: i % 4 === 0 ? 'gaming' : i % 3 === 0 ? 'community' : i % 2 === 0 ? 'advertising' : 'other',
      inviteLink: 'https://discord.gg/example',
      iconUrl: `https://images.pexels.com/photos/${2885014 + i}/pexels-photo-${2885014 + i}.jpeg?auto=compress&cs=tinysrgb&w=150`,
      memberCount: 100000 - (i * 800) + Math.floor(Math.random() * 1000),
      boostLevel: Math.max(1, Math.floor((100 - i) / 20)),
      ranking: i
    });
  }
  
  return servers;
};

export const rankedServers = generateRankedServers();

export const serverCategories = [
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
  { id: 'community', name: 'Community', icon: '👥' },
  { id: 'advertising', name: 'Advertising', icon: '📢' },
  { id: 'art', name: 'Art & Design', icon: '🎨' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'technology', name: 'Technology', icon: '💻' },
  { id: 'anime', name: 'Anime & Manga', icon: '🎌' },
  { id: 'movies', name: 'Movies & TV', icon: '🎬' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'food', name: 'Food & Cooking', icon: '🍳' },
  { id: 'pets', name: 'Pets & Animals', icon: '🐾' },
  { id: 'books', name: 'Books & Writing', icon: '📖' },
  { id: 'photography', name: 'Photography', icon: '📸' },
  { id: 'fashion', name: 'Fashion', icon: '👗' },
  { id: 'fitness', name: 'Fitness', icon: '💪' },
  { id: 'travel', name: 'Travel', icon: '✈️' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'other', name: 'Other', icon: '🌟' }
];

export const discordServers: DiscordServer[] = [
  {
    id: '2',
    name: 'Reload Ta Pub',
    description: 'Serveur du fondateur AyviTV & Wayzen!',
    category: 'advertising',
    inviteLink: 'https://discord.gg/JQnhxUGxqr',
    iconUrl: 'https://media.discordapp.net/attachments/1372686113826934855/1375909100017160402/ReloadFrance.png?ex=683366b4&is=68321534&hm=d7ada5e5d94e8ccd693d3eff30d21c4e0e9a7e71f8be12b85f1b47865727b594&=&format=webp&quality=lossless',
    memberCount: 41,
    boostLevel: 2,
    promoted: true,
    promotionLevel: 'premium'
  },
  // Add more servers here...
];

export const promotedServers: DiscordServer[] = [
  {
    id: 'promo1',
    name: 'Gaming Hub',
    description: 'The ultimate gaming community for all gamers! Join us for daily events, tournaments, and amazing prizes.',
    category: 'gaming',
    inviteLink: 'https://discord.gg/example',
    iconUrl: 'https://images.pexels.com/photos/2885014/pexels-photo-2885014.jpeg?auto=compress&cs=tinysrgb&w=150',
    memberCount: 15000,
    boostLevel: 3,
    promoted: true,
    promotionLevel: 'ultimate'
  },
  // Add more promoted servers...
];
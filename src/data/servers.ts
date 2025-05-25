import { DiscordServer } from '../types';

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
  {
    id: '1',
    name: 'Le Repère des graphistes',
    description: '🎨 Tu crées, testes et explores, mais tu as parfois l’impression de tourner en rond ? Tu n’es pas seul(e) : beaucoup de graphistes passionné(e)s se posent les mêmes questions, et c’est tout à fait normal. 🌟 C’est pourquoi on a lancé Le Repère des Graphistes, un serveur Discord pensé pour toi. Tu y trouveras des retours bienveillants, des ressources utiles, des défis stimulants et une vraie communauté de créatif(ve)s. Ici, pas de pression : juste du partage, de l’entraide et de la motivation pour avancer ensemble.',
    category: 'graphiste',
    inviteLink: 'https://discord.gg/EjKBs4kf6k',
    iconUrl: 'https://media.discordapp.net/attachments/1376254397952299139/1376271382979154141/Sans_titre_89_20250306070915.png?ex=6834b81b&is=6833669b&hm=826d935d716686044299cf85455cfc66ed16e1a728e83b50feda92b2591c7c62&=&format=webp&quality=lossless&width=856&height=856',
    memberCount: 341,
    boostLevel: 10
  },
  {
    id: '3',
    name: '#Soon',
    description: '',
    category: '',
    inviteLink: '',
    iconUrl: 'https://images.pexels.com/photos/2755075/pexels-photo-2755075.jpeg?auto=compress&cs=tinysrgb&w=150',
    memberCount: 0,
    boostLevel: 0
  }
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
  {
    id: 'promo2',
    name: 'Anime World',
    description: 'Your one-stop destination for all things anime! Discussion, watch parties, and fan art sharing.',
    category: 'community',
    inviteLink: 'https://discord.gg/example2',
    iconUrl: 'https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=150',
    memberCount: 8000,
    boostLevel: 2,
    promoted: true,
    promotionLevel: 'premium'
  }
];

// Sort and rank servers based on member count and boost level
export const getRankedServers = () => {
  return discordServers
    .sort((a, b) => {
      // Calculate score based on member count and boost level
      const scoreA = a.memberCount + (a.boostLevel * 10);
      const scoreB = b.memberCount + (b.boostLevel * 10);
      return scoreB - scoreA;
    })
    .map((server, index) => ({
      ...server,
      ranking: index + 1
    }));
};

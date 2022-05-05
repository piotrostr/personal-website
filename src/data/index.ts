export interface Entry {
  title: string;
  emoji: string;
  description: string;
}

export interface Data {
  smplverse: Entry;
  healthToken: Entry;
  pixilArtillery: Entry;
  stonedCookies: Entry;
  domi: Entry;
  okemonos: Entry;
  luifs: Entry;
}

export const data: Data = {
  smplverse: {
    title: 'SMPLverse',
    emoji: '🤖',
    description: '',
  },
  healthToken: {
    title: 'Health Token',
    emoji: '🌱',
    description: '',
  },
  pixilArtillery: {
    title: 'Pixil Artillery',
    emoji: '🔫',
    description: '',
  },
  stonedCookies: {
    title: 'Stoned Cookies',
    emoji: '🍪',
    description: '',
  },
  domi: {
    title: "Domi's portfolio",
    emoji: '🐭',
    description: '',
  },
  okemonos: {
    title: 'Okemonos',
    emoji: '🐲',
    description: '',
  },
  luifs: {
    title: 'LUIFS',
    emoji: '📈',
    description: '',
  },
};

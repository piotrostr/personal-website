export interface Entry {
  title: string;
  description: string;
}

export interface Data {
  smplverse: Entry;
  healthToken: Entry;
  domi: Entry;
  luifs: Entry;
}

export interface NFTs {
  stonedCookies: Entry;
  pixilArtillery: Entry;
  okemonos: Entry;
}

export interface Repos {}

export const data: Data = {
  smplverse: {
    title: 'SMPLverse',
    description: 'When AI meets NFTs.',
  },
  healthToken: {
    title: 'Health Token',
    description: "Dietician's companion.",
  },
  luifs: {
    title: 'LUIFS Ghosal',
    description: 'Biggest LU society.',
  },
  domi: {
    title: "Domi's portfolio",
    description: '',
  },
};

export const nftCollections = {
  okemonos: {
    title: 'Okemonos',
    description: '',
  },
  pixilArtillery: {
    title: 'Pixil Artillery',
    description: 'Pixel guns on ethereum',
  },
  stonedCookies: {
    title: 'Stoned Cookies',
    description: 'Mint a stoned cookie.',
  },
};

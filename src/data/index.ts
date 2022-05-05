export interface Entry {
  title: string;
  description: string;
  imgSrc?: string;
  imgWidth?: number;
  rounded?: boolean;
}

export interface Data {
  [project: string]: Entry;
}

export const favourites: Data = {
  smplverse: {
    title: 'SMPLverse',
    description: 'When AI meets NFTs.',
    imgSrc: '/smplverse.png',
    imgWidth: 350,
    rounded: false,
  },
};

export const websites: Data = {
  healthToken: {
    title: 'Health Token',
    description: "Dietician's companion.",
    imgSrc: 'https://health-token.com/_next/image?url=%2Flogo.svg&w=256&q=75',
    imgWidth: 150,
  },
  luifs: {
    title: 'LUIFS Ghosal',
    description: 'Biggest LU society.',
    imgSrc:
      'https://static.wixstatic.com/media/e85197_6f14c03ddcd5463fbd4c21da23a69b6b~mv2.png/v1/fill/w_158,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e85197_6f14c03ddcd5463fbd4c21da23a69b6b~mv2.png',
    imgWidth: 150,
  },
  domi: {
    title: "Domi's portfolio",
    description: 'For my love, with love.',
    imgSrc: '/domi.png',
    imgWidth: 120,
  },
};

export const nfts: Data = {
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

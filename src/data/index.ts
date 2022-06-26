export interface Entry {
  title: string;
  description?: string;
  imgSrc?: string;
  imgWidth?: number;
  rounded?: boolean;
}

export interface Data {
  [project: string]: Entry;
}

export const favourites: Data = {
  accelerate: {
    title: 'Accelerated Inference',
    description: 'TensorRT - the easy way.',
    imgSrc: '/tensorrt.png',
    imgWidth: 400,
  },
  goData: {
    title: 'GoData',
    description: 'Fast, secure and scalable metadata server for OpenSea.',
    imgSrc: '/godata.jpeg',
    imgWidth: 150,
  },
  smplverse: {
    title: 'SMPLverse',
    description: 'When AI meets Blockchain.',
    imgSrc: '/smplverse.png',
    imgWidth: 350,
    rounded: false,
  },
  healthToken: {
    title: 'Health Token',
    description: "Dietician's companion.",
    imgSrc: '/health-token.svg',
    imgWidth: 150,
  },
  ethNode: {
    title: 'Save ETH',
    description: 'Quickstart for running Ethereum nodes.',
    imgSrc: 'eth.png',
    imgWidth: 100,
  },
  dap: {
    title: 'DAP',
    description: 'Degenerate Ape Party.',
    imgSrc: '/dap.jpg',
    imgWidth: 100,
  },
};

export const websites: Data = {
  luifs: {
    title: 'LUIFS Ghosal',
    description: 'Biggest LU student society.',
    imgSrc: '/ghosal.png',
    imgWidth: 150,
  },
  domi: {
    title: "Domi's portfolio",
    description: 'For my love, with love.',
    imgSrc: '/domi.png',
    imgWidth: 120,
  },
  premiere: {
    title: 'Premiere',
    description: 'Gaming tournaments.',
    imgSrc: '/diamond.svg',
    imgWidth: 95,
  },
};

export const nfts: Data = {
  okemonos: {
    title: 'Okemonos',
    description: '',
    imgSrc: '/okemonos.png',
    imgWidth: 200,
  },
  pixilArtillery: {
    title: 'Pixil Artillery',
    imgSrc: '/pixil.png',
  },
  stonedCookies: {
    title: 'Stoned Cookies',
    imgSrc: '/cookies.png',
    imgWidth: 200,
  },
  skelftees: {
    title: 'Skelftees',
    imgSrc: '/skelftees.png',
    imgWidth: 130,
  },
};

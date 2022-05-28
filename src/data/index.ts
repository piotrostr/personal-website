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
    imgSrc: 'https://assets.nvidiagrid.net/ngc/logos/Tensorrt.png',
    imgWidth: 400,
  },
  goData: {
    title: 'GoData',
    description: 'Fast, secure and scalable metadata server for OpenSea.',
    imgSrc: 'https://miro.medium.com/max/960/1*Omyx9_Tare9Dyhht9m9Ivw.jpeg',
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
    imgSrc: 'https://health-token.com/logo.svg',
    imgWidth: 150,
  },
  ethNode: {
    title: 'Save ETH',
    description: 'Quickstart for running Ethereum nodes.',
    imgSrc:
      'https://user-images.githubusercontent.com/63755291/170838921-51455851-e8ec-4bde-a905-1a9818c90a86.png',
    imgWidth: 100,
  },
};

export const websites: Data = {
  luifs: {
    title: 'LUIFS Ghosal',
    description: 'Biggest LU student society.',
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
  premiere: {
    title: 'Premiere',
    description: 'Gaming tournaments.',
    imgSrc:
      'https://www.premiere.sh/_next/image?url=%2Fdiamond_logo.svg&w=64&q=75',
    imgWidth: 105,
  },
};

export const nfts: Data = {
  okemonos: {
    title: 'Okemonos',
    description: '',
    imgSrc:
      'https://uploads-ssl.webflow.com/62212ae26183fe6208f1d2c0/6227cf229ccf2dd34f9f6569_Okemonos%20Logo-p-500.png',
    imgWidth: 200,
  },
  pixilArtillery: {
    title: 'Pixil Artillery',
    imgSrc:
      'https://www.pixilartillery.io/_next/image?url=%2Fmain-logo.png&w=1080&q=75',
  },
  stonedCookies: {
    title: 'Stoned Cookies',
    imgSrc:
      'https://user-images.githubusercontent.com/63755291/152590613-341cd434-db2f-45b1-a970-3c47e0ed4323.png',
    imgWidth: 200,
  },
  skelftees: {
    title: 'Skelftees',
    imgSrc:
      'https://lh3.googleusercontent.com/KOWefq7qKzpk_YzSMGUsVNpfCdFzGgZgtlwPC0adrUhnwdevrutq8KbkmOVA4FlFLOU6GgbgtK_VT_QjuDclpl9h1yHD6MgyUOf2=w600',
    imgWidth: 130,
  },
};

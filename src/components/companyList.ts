type companyList = {
  name: string;
  min?: number;
  max?: number;
  storage: number | object;
  transfer: number;
  icon: string;
  bgColor: string;
};

export const companyList: companyList[] = [
  {
    name: 'backblaze',
    min: 7,
    storage: 0.005,
    transfer: 0.01,
    icon: 'https://www.google.com/s2/favicons?domain=backblaze.com',
    bgColor: 'bg-danger bg-gradient',
  },
  {
    name: 'bunny',
    max: 10,
    storage: {
      hhd: 0.01,
      ssd: 0.02,
    },
    transfer: 0.01,
    icon: 'https://www.google.com/s2/favicons?domain=bunny.net',
    bgColor: 'bg-warning bg-gradient',
  },
  {
    name: 'scaleway',
    storage: {
      free: 75,
      multi: 0.06,
      sungle: 0.03,
    },
    transfer: 0.01,
    icon: 'https://www.google.com/s2/favicons?domain=scaleway.com',
    bgColor: 'bg-primary bg-gradient',
  },
  {
    name: 'vultr',
    min: 5,
    storage: 0.01,
    transfer: 0.01,
    icon: 'https://www.google.com/s2/favicons?domain=vultr.com',
    bgColor: 'bg-info bg-gradient',
  },
];

const cars = [
  {
    model: "Argo",
    automaker: "Fiat",
    amount: "1.757,87",
    typeFuel: "flex",
    category: "compacto",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/ARGO_1.jpg",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "HB20 Vision",
    automaker: "Hyundai",
    amount: "2.037,26",
    typeFuel: "g",
    category: "compacto",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/HB20_1.png",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "Kwid Zen",
    automaker: "Renault",
    amount: "1.434,52",
    typeFuel: "flex",
    category: "compacto",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/KWID1.png",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "Mobi Like",
    automaker: "Fiat",
    amount: "1.397,51",
    typeFuel: "flex",
    category: "compacto",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/MOBI1.png",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "Leaf",
    automaker: "Nissan",
    amount: "6.719,78",
    typeFuel: "eletrico",
    category: "compacto",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/LEAF1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "COOPER SE Exclusive",
    automaker: "Mini",
    amount: "5.769,80",
    typeFuel: "eletrico",
    category: "compacto",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/COOPER1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "Pegeout 208 Allure",
    automaker: "Mini",
    amount: "5.769,80",
    typeFuel: "eletrico",
    category: "compacto",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/PEUGEOT208_1.png",
    seats: '5',
    gear: 'automatico'
  },

  {
    model: "Cronos",
    automaker: "Fiat",
    amount: "2.150,21",
    typeFuel: "flex",
    category: "sedan",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/CRONOS_1.jpg",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "HB20S Vision",
    automaker: "Hyundai",
    amount: "2.101,85",
    typeFuel: "g",
    category: "sedan",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/HB20S_2.png",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "Versa Advance",
    automaker: "Nissan",
    amount: "2.757,31",
    typeFuel: "g",
    category: "sedan",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/VERSA2.png",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "Versa Exclusive",
    automaker: "Nissan",
    amount: "3.061,81",
    typeFuel: "g",
    category: "sedan",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/VERSA2.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "Logan Zen",
    automaker: "Renault",
    amount: "1.749,80",
    typeFuel: "flex",
    category: "sedan",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/LOGAN2.png",
    seats: '5',
    gear: 'manual'
  },

  {
    model: "C4 Cactus Feel",
    automaker: "Citro??n",
    amount: "2.515,83",
    typeFuel: "flex",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/C4CACTUSFEEL1.png",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "Creta",
    automaker: "Hyundai",
    amount: "2.857,35",
    typeFuel: "g",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/CRETA1.png",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "Kicks Advance",
    automaker: "Nissan",
    amount: "3.207,97",
    typeFuel: "g",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/KICKSADVANCE1.png",
    seats: '5',
    gear: 'manual'
  },
  {
    model: "Kicks Exclusive",
    automaker: "Nissan",
    amount: "3.488,97",
    typeFuel: "g",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/KICKSEXCLUSIVE1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "Tiggo 8",
    automaker: "Cherry",
    amount: "5.202,03",
    typeFuel: "g",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/TIGGO8_1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "2008",
    automaker: "Peugeot",
    amount: "2.862,60",
    typeFuel: "flex",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/PEUGEOT2008_1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "Compass Longitude",
    automaker: "Jeep",
    amount: "3.999,00",
    typeFuel: "flex",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/COMPASSTD350_1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "XC 60",
    automaker: "Volvo",
    amount: "9.400,00",
    typeFuel: "hibrido",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/X60_2.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "Tracker",
    automaker: "Chevrolet",
    amount: "3.358,69",
    typeFuel: "flex",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/TRACKER1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "Pulse",
    automaker: "Fiat",
    amount: "2.830,00",
    typeFuel: "flex",
    category: "SUV",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/PULSE1.png",
    seats: '5',
    gear: 'automatico'
  },

  {
    model: "Frontier Attack",
    automaker: "Nissan",
    amount: "6.057,84",
    typeFuel: "diesel",
    category: "picape",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/FRONTIERATTACK1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "Frontier XE",
    automaker: "Nissan",
    amount: "7.328,35",
    typeFuel: "g",
    category: "picape",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/FRONTIERXE1.png",
    seats: '5',
    gear: 'automatico'
  },
  {
    model: "Toro Endurance",
    automaker: "Fiat",
    amount: "3.509,80",
    typeFuel: "flex",
    category: "picape",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/TORO_2.png",
    seats: '5',
    gear: 'automatico'
  },

  {
    model: "Fiorino",
    automaker: "Fiat",
    amount: "2.047,49",
    typeFuel: "flex",
    category: "utilitario",
    img: "https://storage.googleapis.com/storage-public-images/movidafrotas/FIORINO.png",
    seats: '5',
    gear: 'manual'
  },
];

export default cars;

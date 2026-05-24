export type Service = {
  name: string;
  price?: number;
};

export type Model = {
  name: string;
  engine: string;
  ecu: string;
  services: Service[];
};

export type Brand = {
  name: string;
  description: string;
  models: Model[];
};

const defaultServices: Service[] = [
  { name: "ECU diagnostics", price: 150 },
  { name: "Fault code analysis", price: 120 },
  { name: "Performance optimization", price: 180 },
];

const defaultModel = (brand: string): Model => ({
  name: `${brand.toUpperCase()} ECU Standard`,
  engine: "Varies by model",
  ecu: "OEM ECU System",
  services: defaultServices,
});

export const truckData: Record<string, Brand> = {
  man: {
    name: "MAN",
    description: "MAN truck ECU diagnostics and performance tuning.",
    models: [
      {
        name: "MAN TG-E",
        engine: "2.0 TDI 177hp",
        ecu: "Delphi DCM6.2",
        services: [
          { name: "ECU diagnostics", price: 160 },
          { name: "Fuel optimization", price: 160 },
          { name: "Fault code removal", price: 160 },
        ],
      },
      {
        name: "MAN TGX 18.500",
        engine: "D26",
        ecu: "Bosch EDC17CV42",
        services: [
          { name: "ECU remapping", price: 240 },
          { name: "Torque calibration", price: 240 },
          { name: "AdBlue diagnostics", price: 240 },
        ],
      },
    ],
  },

  volvo: {
    name: "Volvo",
    description: "Volvo FH/FM ECU tuning and diagnostics.",
    models: [
      {
        name: "Volvo FH16",
        engine: "D16K",
        ecu: "Bosch EDC17",
        services: [
          { name: "Fuel optimization", price: 250 },
          { name: "ECU tuning", price: 250 },
          { name: "Performance increase", price: 250 },
        ],
      },
    ],
  },

  scania: {
    name: "Scania",
    description: "Scania ECU optimization services.",
    models: [
      {
        name: "Scania R450",
        engine: "DC13",
        ecu: "EMS S8",
        services: [
          { name: "ECU remapping", price: 220 },
          { name: "Fuel saving", price: 220 },
          { name: "Engine optimization", price: 220 },
        ],
      },
    ],
  },

  caterpillar: {
    name: "Caterpillar",
    description: "Heavy machinery ECU diagnostics.",
    models: [
      {
        name: "CAT 320D",
        engine: "C6.6",
        ecu: "CAT ET",
        services: [
          { name: "Diagnostics", price: 200 },
          { name: "ECU tuning", price: 200 },
        ],
      },
    ],
  },

  daf: {
    name: "DAF",
    description: "DAF truck ECU services.",
    models: [
      {
        name: "DAF XF 480",
        engine: "MX-13",
        ecu: "Bosch EDC17",
        services: [
          { name: "ECU remap", price: 230 },
          { name: "Fuel optimization", price: 230 },
        ],
      },
    ],
  },

  // =========================
  // AUTO GENERATED BRANDS
  // =========================

  astra: { name: "Astra", description: "ECU diagnostics services.", models: [defaultModel("astra")] },
  atlas: { name: "Atlas", description: "ECU diagnostics services.", models: [defaultModel("atlas")] },
  bobcat: { name: "BobCat", description: "ECU diagnostics services.", models: [defaultModel("bobcat")] },
  case: { name: "CASE", description: "ECU diagnostics services.", models: [defaultModel("case")] },
  claas: { name: "CLAAS", description: "ECU diagnostics services.", models: [defaultModel("claas")] },
  daewoo: { name: "Daewoo", description: "ECU diagnostics services.", models: [defaultModel("daewoo")] },
  deutz: { name: "Deutz", description: "ECU diagnostics services.", models: [defaultModel("deutz")] },
  dongfeng: { name: "Dongfeng", description: "ECU diagnostics services.", models: [defaultModel("dongfeng")] },
  doosan: { name: "Doosan", description: "ECU diagnostics services.", models: [defaultModel("doosan")] },
  faw: { name: "FAW", description: "ECU diagnostics services.", models: [defaultModel("faw")] },
  fendt: { name: "Fendt", description: "ECU diagnostics services.", models: [defaultModel("fendt")] },
  ford: { name: "Ford", description: "ECU diagnostics services.", models: [defaultModel("ford")] },
  foton: { name: "Foton", description: "ECU diagnostics services.", models: [defaultModel("foton")] },
  freightliner: { name: "Freightliner", description: "ECU diagnostics services.", models: [defaultModel("freightliner")] },
  gaz: { name: "GAZ", description: "ECU diagnostics services.", models: [defaultModel("gaz")] },
  hidromek: { name: "Hidromek", description: "ECU diagnostics services.", models: [defaultModel("hidromek")] },
  hitachi: { name: "Hitachi", description: "ECU diagnostics services.", models: [defaultModel("hitachi")] },
  hino: { name: "Hino", description: "ECU diagnostics services.", models: [defaultModel("hino")] },
  howo: { name: "Howo", description: "ECU diagnostics services.", models: [defaultModel("howo")] },
  hyundai: { name: "Hyundai", description: "ECU diagnostics services.", models: [defaultModel("hyundai")] },
  international: { name: "International", description: "ECU diagnostics services.", models: [defaultModel("international")] },
  isuzu: { name: "Isuzu", description: "ECU diagnostics services.", models: [defaultModel("isuzu")] },
  iveco: { name: "Iveco", description: "ECU diagnostics services.", models: [defaultModel("iveco")] },
  jcb: { name: "JCB", description: "ECU diagnostics services.", models: [defaultModel("jcb")] },
  johndeere: { name: "JohnDeere", description: "ECU diagnostics services.", models: [defaultModel("johndeere")] },
  kassbohrer: { name: "Kassbohrer", description: "ECU diagnostics services.", models: [defaultModel("kassbohrer")] },
  kamaz: { name: "KAMAZ", description: "ECU diagnostics services.", models: [defaultModel("kamaz")] },
  kenworth: { name: "Kenworth", description: "ECU diagnostics services.", models: [defaultModel("kenworth")] },
  kobelco: { name: "Kobelco", description: "ECU diagnostics services.", models: [defaultModel("kobelco")] },
  kohler: { name: "Kohler", description: "ECU diagnostics services.", models: [defaultModel("kohler")] },
  komatsu: { name: "Komatsu", description: "ECU diagnostics services.", models: [defaultModel("komatsu")] },
  krone: { name: "Krone", description: "ECU diagnostics services.", models: [defaultModel("krone")] },
  kubota: { name: "Kubota", description: "ECU diagnostics services.", models: [defaultModel("kubota")] },
  liebherr: { name: "Liebherr", description: "ECU diagnostics services.", models: [defaultModel("liebherr")] },
  mack: { name: "Mack", description: "ECU diagnostics services.", models: [defaultModel("mack")] },
  mahindra: { name: "Mahindra", description: "ECU diagnostics services.", models: [defaultModel("mahindra")] },
  manitou: { name: "Manitou", description: "ECU diagnostics services.", models: [defaultModel("manitou")] },
  masseyferguson: { name: "MasseyFerguson", description: "ECU diagnostics services.", models: [defaultModel("masseyferguson")] },
  maxus: { name: "Maxus", description: "ECU diagnostics services.", models: [defaultModel("maxus")] },
  maz: { name: "MAZ", description: "ECU diagnostics services.", models: [defaultModel("maz")] },
  mercedes: { name: "Mercedes", description: "ECU diagnostics services.", models: [defaultModel("mercedes")] },
  mitsubishi: { name: "Mitsubishi", description: "ECU diagnostics services.", models: [defaultModel("mitsubishi")] },
  newholland: { name: "NewHolland", description: "ECU diagnostics services.", models: [defaultModel("newholland")] },
  nissan: { name: "Nissan", description: "ECU diagnostics services.", models: [defaultModel("nissan")] },
  peterbilt: { name: "Peterbilt", description: "ECU diagnostics services.", models: [defaultModel("peterbilt")] },
  renault: { name: "Renault", description: "ECU diagnostics services.", models: [defaultModel("renault")] },
  shacman: { name: "Shacman", description: "ECU diagnostics services.", models: [defaultModel("shacman")] },
  tata: { name: "TATA", description: "ECU diagnostics services.", models: [defaultModel("tata")] },
  terex: { name: "Terex", description: "ECU diagnostics services.", models: [defaultModel("terex")] },
  uaz: { name: "UAZ", description: "ECU diagnostics services.", models: [defaultModel("uaz")] },
  valtra: { name: "Valtra", description: "ECU diagnostics services.", models: [defaultModel("valtra")] },
  volkswagen: { name: "VolksWagen", description: "ECU diagnostics services.", models: [defaultModel("volkswagen")] },
  wirtgen: { name: "Wirtgen", description: "ECU diagnostics services.", models: [defaultModel("wirtgen")] },
  xcmg: { name: "XCMG", description: "ECU diagnostics services.", models: [defaultModel("xcmg")] },
  yanmar: { name: "Yanmar", description: "ECU diagnostics services.", models: [defaultModel("yanmar")] },
};
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
  { name: "Emission delete (SCR DPF EGR OFF", price: 0 },
  { name: "HorsePower Increase STG1", price: 0 },
  { name: "AdBlue Consumption ", price: 0 },
 

];
const manDefaultServices: Service[] = [
  { name: "Emission delete (SCR DPF EGR OFF", price: 0 },
  { name: "HorsePower Increase STG1", price: 0 },
  { name: "AdBlue Consumption ", price: 0 },
 

];
const volvoDefaultServices: Service[] = [
  { name: "Emission delete (SCR DPF EGR OFF", price: 0 },
  { name: "HorsePower Increase STG1", price: 0 },
  { name: "AdBlue Consumption ", price: 0 },
   { name: "Flash Stock File ", price: 0 },


];
const renaultDefaultServices: Service[] = [
  { name: "Emission delete (SCR DPF EGR OFF", price: 0 },
  { name: "HorsePower Increase STG1", price: 0 },
  { name: "AdBlue Consumption ", price: 0 },
  { name: "Flash Stock File ", price: 0 },

 

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
      services: manDefaultServices
    },
    {
      name: "MAN TG-A-L",
      engine: "3.0 TDI 240hp",
      ecu: "Bosch EDC7-C32 - ACM DCU15",
     services: manDefaultServices
    },
    {
      name: "MAN TG-A-L-M E3",
      engine: "4.6 TDI D0834 310-410hp",
      ecu: "Bosch MS6.1",
     services: manDefaultServices
    },
    {
      name: "MAN TG-A-M - CL-A E6 (D0834 160-220hp)",
      engine: "4.6 TDI D0834 160-220hp",
      ecu: "Bosch EDC17CV42",
      services: manDefaultServices
    },
    {
      name: "MAN TG-A-M-L E6 (D0834)",
      engine: "4.6 TDI D0834 160-220hp",
      ecu: "Bosch MD1CE100",
     services: manDefaultServices
    },
    {
      name: "MAN TG-A-M - CL-A E5 (D0836)",
      engine: "6.9 TDI D0836 250-320hp",
      ecu: "Bosch EDC7C32 - ACM DCU15",
     services: manDefaultServices
    },
    {
      name: "MAN TG-A-M - CL-A E6 (D0836)",
      engine: "6.9 TDI D0836 250-320hp",
      ecu: "Bosch EDC17CV42",
     
    services: manDefaultServices
    },
    {
      name: "MAN TG-A-M-L E6 (D0836 high power)",
      engine: "6.9 TDI D0836 250-330hp",
      ecu: "Bosch MD1CE100",
      services: manDefaultServices
    },
    {
      name: "MAN TG-A-M-L E6 (D15)",
      engine: "9.0 TDI D15 330-400hp",
      ecu: "Bosch EDC17CV42",
      services: manDefaultServices
    },
    {
      name: "MAN TG-A-M-S E5 (D20)",
      engine: "10.5 TDI D20 310-440hp",
      ecu: "Bosch EDC7 - ACM DCU15",
     services: manDefaultServices
    },
    {
      name: "MAN TG-A-M - CL-A E6 (D20)",
      engine: "10.5 TDI D20 320-380hp",
      ecu: "Bosch EDC17CV42",
      services: manDefaultServices
    },
    {
      name: "MAN TG-S-A E3-4",
      engine: "12.0 TDI 420-530hp",
      ecu: "Bosch MS6.1",
      services: manDefaultServices
    },
    {
      name: "MAN TG-A-M-S E5 (D26)",
      engine: "12.4 TDI D26 400-540hp",
      ecu: "Bosch EDC7-C32 - ACM DCU15",
     services: manDefaultServices
    },
    {
      name: "MAN TG-S-X E6 (D26)",
      engine: "12.4 TDI D26 400-520hp",
      ecu: "Bosch EDC17CV42",
      services: manDefaultServices
    },
    {
      name: "MAN TG-S-X E6 2019+ (D26 MD1)",
      engine: "12.4 TDI D26 400-510hp",
      ecu: "Bosch MD1CE100",
      services: manDefaultServices
    },
    {
      name: "MAN TG-S-X E6 (D38)",
      engine: "15.2 TDI D38 540-650hp",
      ecu: "Bosch EDC17CV42",
     services: manDefaultServices
    },
    {
      name: "MAN TG-S-X E6 2019+ (D38 MD1)",
      engine: "15.2 TDI D38 540-650hp",
      ecu: "Bosch MD1CE100",
      services: manDefaultServices
    },
    {
      name: "MAN TG-S-X E5 (D2868)",
      engine: "16.2 TDI D2868 580-680hp",
      ecu: "Bosch EDC7C32 - ACM DCU15",
     services: manDefaultServices
    },
    {
      name: "MAN TG-S-X E5 (EDC17)",
      engine: "16.2 TDI D2868 580-680hp",
      ecu: "Bosch EDC17CV42",
      services: manDefaultServices
    },
    {
      name: "MAN TGX - Marine E6 (D42)",
      engine: "16.2 TDI D42 600-790hp",
      ecu: "Bosch EDC17CV42",
     services: manDefaultServices
    }
  ]
},

volvo: {
  name: "Volvo",
  description: "Volvo FH/FM ECU tuning and diagnostics.",
  models: [
    {
      name: "Volvo D1.8 Euro-5",
      engine: "1.8 TDI 40-50hp",
      ecu: "Bosch EDC17CV45-C55",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D2.6 Euro-5",
      engine: "2.6 TDI 50-70hp",
      ecu: "Denso SH7058 - SH7254x",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D3 Euro-5",
      engine: "3.3 TDI 55-80hp",
      ecu: "Denso SH7058",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D3.8 Euro-5",
      engine: "3.8 TDI 90-130hp",
      ecu: "Denso SH7254x",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D4 Euro-4",
      engine: "4.1 TDI 108-156hp",
      ecu: "TRW EMS2.0 - ACM DCU15",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D4 Euro-4-5",
      engine: "4.1 TDI 108-156hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D4 Euro-6",
      engine: "4.1 TDI 108-156hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D5 Euro-5",
      engine: "4.8 TDI 110-160hp",
      ecu: "TRW EMS2.2   ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D5 - TAD57 Euro-5",
      engine: "5.1 TDI 120-240hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D5 - TAD58 Euro-6",
      engine: "5.1 TDI 120-350hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D5 - TAD58 Euro-6 (alt)",
      engine: "5.1 TDI 120-350hp",
      ecu: "TRW EMS2.4 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D6 Euro-5",
      engine: "5.7 TDI 120-240hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D6 Euro-6",
      engine: "5.7 TDI 120-240hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D7 Euro-5 (D7E)",
      engine: "7.1 TDI 240-320hp",
      ecu: "TRW EMS2.0 - ACM DCU15",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D7 Euro-5 (D7F)",
      engine: "7.1 TDI 250-330hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D7 Euro-5 (standard)",
      engine: "7.1 TDI 250-320hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D7 - TAD76x Euro-5",
      engine: "7.2 TDI 250-320hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D8 Euro-5",
      engine: "7.7 TDI 240-320hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D8 - TAD87x Euro-6",
      engine: "7.7 TDI 240-350hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D8 - TAD78-88 Euro-6",
      engine: "7.8 TDI 240-350hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D8 - TAD78-88 Euro-6 (alt)",
      engine: "7.8 TDI 240-350hp",
      ecu: "TRW EMS2.4 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D9 - TAD94 Euro-5",
      engine: "9.4 TDI 250-380hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D9 - TAD94 Euro-6",
      engine: "9.4 TDI 250-380hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D11 Euro-3",
      engine: "10.8 TDI 360hp",
      ecu: "LUCAS B/C/D",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D11 Euro-4",
      engine: "10.8 TDI 315-425hp",
      ecu: "TRW EMS2.0 - ACM DCU15",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D11 Euro-5",
      engine: "10.8 TDI 315-425hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D11 - TAD11 Euro-6",
      engine: "10.8 TDI 315-460hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D11 - TAD11 Euro-6 (alt)",
      engine: "10.8 TDI 315-460hp",
      ecu: "TRW EMS2.4 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D12 Euro-3",
      engine: "D12 340-460hp",
      ecu: "LUCAS B/C/D",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D12 Euro-4",
      engine: "12.1 TDI 400-510hp",
      ecu: "TRW EMS2.0 - ACM DCU15",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D12 Euro-4 (alt)",
      engine: "12.1 TDI 400-510hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D12 Euro-6",
      engine: "12.1 TDI 400-510hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D13 Euro-4",
      engine: "12.8 TDI 290-500hp",
      ecu: "TRW EMS2.0 - ACM DCU15",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D13 - TAD13 Euro-5",
      engine: "12.8 TDI 290-540hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D13 - TAD13 Euro-6",
      engine: "12.8 TDI 290-540hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D13 - TAD13 Euro-6 (alt)",
      engine: "12.8 TDI 290-540hp",
      ecu: "TRW EMS2.4 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D16 Euro-4",
      engine: "16.1 TDI 500-600hp",
      ecu: "TRW EMS2",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D16 Euro-5",
      engine: "16.1 TDI 540-680hp",
      ecu: "TRW EMS2.2 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D16 Euro-6",
      engine: "16.1 TDI 550-780hp",
      ecu: "TRW EMS2.3 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo D16 - TWD16 Euro-5",
      engine: "16.1 TDI 550-796hp",
      ecu: "TRW EMS2.4 - ACM",
      services: volvoDefaultServices,
    },
    {
      name: "Volvo Double D11",
      engine: "21.6 TDI IPS 800-950hp",
      ecu: "TRW EMS2.4 - ACM",
      services: volvoDefaultServices,
    },
  ],
},
renault: {
  name: "Renault",
  description: "Renault truck ECU diagnostics and performance tuning.",
  models: [
    {
      name: "Renault DCI 2.5",
      engine: "2.5 TDI 110-150hp",
      ecu: "Denso SH705x",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DCI5 Euro-3",
      engine: "5.1 TDI DXi5 220-270hp",
      ecu: "Bosch MS6.3",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi5 Euro-4",
      engine: "5.1 TDI 270-300hp",
      ecu: "TRW EMS2 - ACM DCU15",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi5 Euro-5",
      engine: "5.1 TDI 210-280hp",
      ecu: "TRW EMS2.2 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi5 Euro-6",
      engine: "5.1 TDI 210-280hp",
      ecu: "TRW EMS2.3 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi5 Euro-6 (high power)",
      engine: "5.1 TDI 120-350hp",
      ecu: "TRW EMS2.4 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi7 Euro-3-4",
      engine: "7.2 TDI 270-300hp",
      ecu: "TRW EMS2 - ACM DCU15",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi8 Euro-3-4",
      engine: "7.7 TDI 270-300hp",
      ecu: "TRW EMS2 - ACM DCU15",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi8 Euro-5",
      engine: "7.8 TDI 210-350hp",
      ecu: "TRW EMS2.2 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi8 Euro-6",
      engine: "7.8 TDI 210-350hp",
      ecu: "TRW EMS2.3 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi8 Euro-6 (low power)",
      engine: "7.8 TDI 210-280hp",
      ecu: "TRW EMS2.4 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi11 Euro-4",
      engine: "10.8 TDI 315-460hp",
      ecu: "TRW EMS2 - ACM DCU15",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi11 Euro-5",
      engine: "10.8 TDI 315-460hp",
      ecu: "TRW EMS2.2 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi11 Euro-6",
      engine: "10.8 TDI 315-460hp",
      ecu: "TRW EMS2.3 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi11 Euro-6 (updated)",
      engine: "10.8 TDI 315-460hp",
      ecu: "TRW EMS2.4 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi12 Euro-3",
      engine: "12.5 TDI 440-480hp",
      ecu: "Bosch MS6.2",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi12 Euro-4",
      engine: "12.5 TDI 440-480hp",
      ecu: "TRW EMS2 - ACM DCU15",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi13 Euro-4",
      engine: "13.5 TDI 460-520hp",
      ecu: "TRW EMS2 - ACM DCU15",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DXi13 Euro-5",
      engine: "12.8 TDI 410-460hp",
      ecu: "TRW EMS2.2 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi13 Euro-6",
      engine: "12.8 TDI 440-520hp",
      ecu: "TRW EMS2.3 - ACM",
      services: renaultDefaultServices,
    },
    {
      name: "Renault DTi13 Euro-6 (latest)",
      engine: "12.8 TDI 440-520hp",
      ecu: "TRW EMS2.4 - ACM",
      services: renaultDefaultServices,
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
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
  { name: "Emission delete: AdBlue (SCR), DPF, EGR", price: 0 },
  { name: "HorsePower Increase STG1", price: 0 },
  { name: "AdBlue Consumption ", price: 0 },
 

];
const manDefaultServices: Service[] = [
  { name: "Emission delete: AdBlue (SCR), DPF, EGR", price: 0 },
  { name: "HorsePower Increase STG1", price: 0 },
  { name: "AdBlue Consumption ", price: 0 },
 

];
const volvoDefaultServices: Service[] = [
  { name: "Emission delete: AdBlue (SCR), DPF, EGR", price: 0 },
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
      name: "MAN TG-S-X E6 2019 plus (D26 MD1)",
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
      name: "MAN TG-S-X E6 2019 plus (D38 MD1)",
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
      name: "Scania DC07 Series P-S E6",
      engine: "6.7 TDI 220-280hp",
      ecu: "Motorola EMS EMD1 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC09 Series G-P-R-T E4",
      engine: "8.9 TDI 230-310hp",
      ecu: "Motorola EMS S6 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Scania DC09 Series G-P-R-T E5 S7",
      engine: "9.0 TDI 250-320hp",
      ecu: "Motorola EMS S7",
      services: defaultServices,
    },
    {
      name: "Scania DC09 Series G-P-R-T E5 S8",
      engine: "9.0 TDI 250-320hp",
      ecu: "Motorola EMS S8 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC09 Series G-P-R-T E5-6",
      engine: "9.3 TDI 280-360hp",
      ecu: "Continental EMS S8 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC09 Series G-P-R-T E6",
      engine: "9.3 TDI 280-360hp",
      ecu: "Motorola EMS EMD1 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC11 Series G-P-R-T E3",
      engine: "10.6 TDI 340-380hp",
      ecu: "Bosch MS6.2",
      services: defaultServices,
    },
    {
      name: "Scania DC11 Series G-P-R-T E4",
      engine: "10.6 TDI 340-380hp",
      ecu: "Motorola EMS S6 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Scania DC12 Series G-P-R-T E3",
      engine: "11.7 TDI 380-480hp",
      ecu: "Bosch MS6.2",
      services: defaultServices,
    },
    {
      name: "Scania DC12 Series G-P-R-T E4",
      engine: "11.7 TDI 380-480hp",
      ecu: "Motorola EMS S6 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Scania DC13 Series G-P-R-T E5 S6",
      engine: "12.7 TDI 380-480hp",
      ecu: "Motorola EMS S6 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Scania DC13 Series G-P-R-T E5 S7",
      engine: "12.7 TDI 380-480hp",
      ecu: "Motorola EMS S7",
      services: defaultServices,
    },
    {
      name: "Scania DC13 Series G-P-R-T E5-6",
      engine: "12.7 TDI 410-540hp",
      ecu: "Continental EMS S8 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC13 Series P-R-T-S E6",
      engine: "12.7 TDI 370-540hp",
      ecu: "Motorola EMS EMD1 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC13 Series S E6 High Spec",
      engine: "12.7 TDI 400-550hp",
      ecu: "Continental EMS10-CEM1 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC16 Series P-R-T E4",
      engine: "15.6 TDI 500-620hp",
      ecu: "Motorola EMS S6 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Scania DC16 Series P-R-T E5",
      engine: "15.6 TDI 500-650hp",
      ecu: "Motorola EMS S7",
      services: defaultServices,
    },
    {
      name: "Scania DC16 Series P-R-T Alt",
      engine: "16.4 TDI 500-730hp",
      ecu: "Motorola EMS S7",
      services: defaultServices,
    },
    {
      name: "Scania DC16 Series P-R-T E5-6",
      engine: "16.4 TDI 500-730hp",
      ecu: "Continental EMS S8 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC16 Series T-S E6",
      engine: "16.4 TDI 500-780hp",
      ecu: "Motorola EMS EMD1 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Scania DC16 Series S E6 Top Spec",
      engine: "16.4 TDI 530-780hp",
      ecu: "Continental EMS10-CEM1 - ACM EEC3",
      services: defaultServices,
    },
  ],
},

 caterpillar: {
  name: "Caterpillar",
  description: "Heavy machinery ECU diagnostics and performance tuning.",
  models: [
    {
      name: "Caterpillar CAT C1.5",
      engine: "1.5 TDI 30-60hp",
      ecu: "Denso SH725x",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C2 (low spec)",
      engine: "2.2 TDI 50-70hp",
      ecu: "Denso SH725x",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C2 (Adem A6E10)",
      engine: "2.2 TDI 50-85hp",
      ecu: "Adem A6E10",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C2.4",
      engine: "2.4 TDI 40-65hp",
      ecu: "Bosch EDC17CV45",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C2.8",
      engine: "2.8 TDI 50-90hp",
      ecu: "Adem A6E10",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT V33",
      engine: "3.3 TDI 60-110hp",
      ecu: "Denso SH7058 - SH7254x / ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C3 (EDC17)",
      engine: "3.4 TDI 75-95hp",
      ecu: "Bosch EDC17C49 / ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C3 (A5x)",
      engine: "3.4-3.6 TDI 80-130hp",
      ecu: "Adem A5x",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C3 (A6E11)",
      engine: "3.6 TDI 74-125hp",
      ecu: "Adem A6E11",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT V38 (Denso)",
      engine: "3.8 TDI 90-120hp",
      ecu: "Denso 7254x / ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT V38 (Adem A5X)",
      engine: "3.8 TDI 90-120hp",
      ecu: "Adem A5X / ACM Denso",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C4 (A4E4)",
      engine: "4.2 TDI 90-130hp",
      ecu: "Adem A4E4 / ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C4 (VDO Gen3)",
      engine: "4.4 TDI 85-142hp",
      ecu: "Adem A5x / ACM VDO Gen3",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C4 (A6E2)",
      engine: "4.4 TDI 110-180hp",
      ecu: "Adem A6E2",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C6",
      engine: "6.6 TDI 130-220hp",
      ecu: "Adem A4E4 / ACM A5E2 + DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C7 (A3)",
      engine: "7.0 TDI 100-190hp",
      ecu: "Adem A3",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C7 (A5E2)",
      engine: "7.1 TDI 150-320hp",
      ecu: "Adem A5E2 / ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C7 (A4E4-A5E2)",
      engine: "7.1 TDI 150-320hp",
      ecu: "Adem A4E4 / ACM A5E2 + DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C7 (A6E2)",
      engine: "7.1 TDI 150-320hp",
      ecu: "Adem A6E2",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C9 (A4E4)",
      engine: "9.3 TDI 278-351hp",
      ecu: "Adem A4E4 / ACM A5E2 + DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C9 (A6E2)",
      engine: "9.3 TDI 278-460hp",
      ecu: "Adem A6E2",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C11",
      engine: "10.5 TDI 130-350hp",
      ecu: "Adem A6E2",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT D26",
      engine: "12.4 TDI D26 400-510hp",
      ecu: "Bosch EDC17CV42",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C13 (A4E4)",
      engine: "12.5 TDI 420-530hp",
      ecu: "Adem A4E4 / ACM A5E2 + DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C13 (A6E4)",
      engine: "12.5 TDI 420-530hp",
      ecu: "Adem A6E4",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C15 (A4E4)",
      engine: "15.2 TDI 400-580hp",
      ecu: "Adem A4E4 / ACM A5E2 + DCU17",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C15 (A6E4)",
      engine: "15.2 TDI 400-600hp",
      ecu: "Adem A6E4",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C18 (A4E4)",
      engine: "18.1 TDI 500-700hp",
      ecu: "Adem A4E4 / ACM A5E2",
      services: defaultServices,
    },
    {
      name: "Caterpillar CAT C18 (A6E4)",
      engine: "18.1 TDI 530-700hp",
      ecu: "Adem A6E4",
      services: defaultServices,
    },
  ],
},

 daf: {
  name: "DAF",
  description: "DAF truck ECU services and performance tuning.",
  models: [
    {
      name: "DAF CF-LF 44-45",
      engine: "3.9 TDI 99-150hp",
      ecu: "Bosch ECSDC3 - EDC7",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 44-45 (CM850)",
      engine: "4.5 TDI 130-200hp",
      ecu: "Motorola CM850 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 45",
      engine: "4.5 TDI 150-210hp",
      ecu: "Motorola CM2350",
      services: defaultServices,
    },
    {
      name: "DAF CF-TRX",
      engine: "5.0 TDI",
      ecu: "Bosch EDC17CV01",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 55 (ECSDC3)",
      engine: "5.9 TDI 250hp",
      ecu: "Bosch ECSDC3 - EDC7",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 55 (CM850)",
      engine: "5.9 TDI 180-250hp",
      ecu: "Motorola CM850 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 65 (ECSDC3)",
      engine: "6.7 TDI 220-250hp",
      ecu: "Bosch ECSDC3 - EDC7",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 65 (CM850)",
      engine: "6.7 TDI 220-250hp",
      ecu: "Motorola CM850 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 65 (CM2150)",
      engine: "6.7 TDI 220-280hp",
      ecu: "Motorola CM2150",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 65 (CM2350)",
      engine: "6.7 TDI 220-320hp",
      ecu: "Motorola CM2350",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 65 (CM2670)",
      engine: "6.7 TDI 220-320hp",
      ecu: "Motorola CM2670",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 75 (Bosch)",
      engine: "9.2 TDI 250-360hp",
      ecu: "Bosch MS6.2",
      services: defaultServices,
    },
    {
      name: "DAF CF-LF 75 (Delphi)",
      engine: "9.2 TDI 250-360hp",
      ecu: "Delphi DMCI - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "DAF CF MX11 (ETC3 PCX2)",
      engine: "10.8 TDI 300-450hp",
      ecu: "Delphi ETC3-PCX2 - ACM CM2220",
      services: defaultServices,
    },
    {
      name: "DAF CF MX11 (Gen2)",
      engine: "10.8 TDI 300-450hp",
      ecu: "Delphi ETC3 Gen2 - ACM CM1881",
      services: defaultServices,
    },
    {
      name: "DAF CF 85",
      engine: "12.5 TDI 340-480hp",
      ecu: "Bosch MS6.2",
      services: defaultServices,
    },
    {
      name: "DAF CF 95 (CM850)",
      engine: "12.5 TDI 340-480hp",
      ecu: "Motorola CM850 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "DAF CF 95 (Delphi)",
      engine: "12.5 TDI 360-460hp",
      ecu: "Delphi DMCI - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "DAF CF 95 (12.9 Bosch)",
      engine: "12.9 TDI 480-530hp",
      ecu: "Bosch MS6.2",
      services: defaultServices,
    },
    {
      name: "DAF XF 105",
      engine: "12.9 TDI 410-510hp",
      ecu: "Delphi DMCI - DCU15",
      services: defaultServices,
    },
    {
      name: "DAF XF 106 (MX13 PCX2)",
      engine: "12.9 TDI MX13 430-530hp",
      ecu: "Delphi ETC3-PCX2 - ACM CM2220",
      services: defaultServices,
    },
    {
      name: "DAF XF 106 (Gen2)",
      engine: "12.9 TDI MX13 430-530hp",
      ecu: "Delphi ETC3 Gen2 - ACM CM1881",
      services: defaultServices,
    },
  ],
},


astra: {
  name: "Astra",
  description: "Astra heavy truck ECU diagnostics and tuning services.",
  models: [
    {
      name: "Astra ADT 25C",
      engine: "10300 319hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Astra ADT 30C",
      engine: "10300 353hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Astra ADT 35C",
      engine: "12800 410hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Astra ADT 40C",
      engine: "12800 455hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Astra HD8 66.41",
      engine: "12800 410hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Astra HD8 88.48",
      engine: "12800 480hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
  ],
},
atlas: {
  name: "Atlas",
  description: "Atlas Copco and industrial ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "Atlas Copco 4045",
      engine: "4.5 TDI 77-155hp",
      ecu: "Phoenix L23",
      services: defaultServices,
    },
    {
      name: "Atlas Copco 4045 High",
      engine: "4.5 TDI 110-160hp",
      ecu: "Phoenix L33 - L34",
      services: defaultServices,
    },
    {
      name: "Atlas Copco QSB",
      engine: "4.5 TDI 120-160hp",
      ecu: "Motorola CM2350",
      services: defaultServices,
    },
    {
      name: "Atlas Copco OM934LA",
      engine: "5.1 TDI 220-280hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "Atlas 160W-350MH",
      engine: "6.1 TDI 100-160hp",
      ecu: "Bosch EDC17CV52 - CV54",
      services: defaultServices,
    },
    {
      name: "Atlas CS14-XAVS",
      engine: "6.7 TDI QSB 120-160hp",
      ecu: "Motorola CM2350A",
      services: defaultServices,
    },
    {
      name: "Atlas QAS2x (EMS)",
      engine: "7.1 TDI D7H 240-320hp",
      ecu: "TRW EMS2.2 - ACM",
      services: defaultServices,
    },
    {
      name: "Atlas QAS2x (Continental)",
      engine: "9.3 TDI 280-360hp",
      ecu: "Continental EMS S8 - EME1 - ACM EEC3",
      services: defaultServices,
    },
    {
      name: "Atlas Industrial CAT",
      engine: "9.3 TDI 278-460hp",
      ecu: "Adem A6E2",
      services: defaultServices,
    },
  ],
},
bobcat: {
  name: "BobCat",
  description: "BobCat construction equipment ECU diagnostics and tuning services.",
  models: [
    {
      name: "BobCat E50-S450",
      engine: "1.8 TDI 40-60hp",
      ecu: "Bosch EDC17C87 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "BobCat L85",
      engine: "2.4 TDI 50-70hp",
      ecu: "Bosch EDC17C87 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "BobCat T450-650",
      engine: "2.4 TDI 50-75hp",
      ecu: "Delphi DCM3.7 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "BobCat E85 (EDC17)",
      engine: "3.2 TDI 60-100hp",
      ecu: "Bosch EDC17CV54",
      services: defaultServices,
    },
    {
      name: "BobCat E85 (Denso)",
      engine: "3.3 TDI 60-100hp",
      ecu: "Denso SH7058",
      services: defaultServices,
    },
    {
      name: "BobCat T590",
      engine: "3.4 TDI 90-130hp",
      ecu: "Bosch EDC17C87",
      services: defaultServices,
    },
    {
      name: "BobCat T770-TF870",
      engine: "3.4 TDI 90-130hp",
      ecu: "Delphi DCM3.7 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "BobCat Tx38",
      engine: "3.8 TDI 90-110hp",
      ecu: "Denso SH7058 - ACM DCU17",
      services: defaultServices,
    },
  ],
},
mercedes: {
  name: "Mercedes",
  description: "Mercedes truck ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "Mercedes Atego - Vario OM904",
      engine: "4.2 TDI 120-180hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mercedes Atego - Vario OM924",
      engine: "4.8 TDI 150-220hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mercedes Atego OM934 Euro-6",
      engine: "5.1 TDI 170-230hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "Mercedes Atego OM906",
      engine: "6.4 TDI 210-280hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mercedes Atego OM926",
      engine: "7.2 TDI 230-300hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mercedes Atego OM926 Euro-5-6",
      engine: "7.2 TDI 230-320hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "Mercedes Atego OM936 Euro-6",
      engine: "7.7 TDI 260-380hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "Mercedes Actros - Arocs - Axor OM457",
      engine: "12.0 TDI 250-460hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mercedes Actros - Arocs - Axor OM501",
      engine: "12.0 TDI 313-430hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mercedes Actros - Arocs - Axor OM460",
      engine: "12.8 TDI 420-530hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mercedes Actros - Arocs OM470 Euro-6",
      engine: "10.7 TDI 320-460hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "Mercedes Actros - Arocs OM471",
      engine: "12.8 TDI 420-530hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "Mercedes Actros - Arocs OM473",
      engine: "15.6 TDI 500-630hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "Mercedes Travego OM502",
      engine: "15.9 TDI 510-600hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mercedes Travego OM503",
      engine: "15.9 TDI 510-600hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
  ],
},
mack: {
  name: "Mack",
  description: "Mack truck ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "Mack MP Euro-3 <2005",
      engine: "12.0 TDI 250-460hp",
      ecu: "Bosch EDC7",
      services: defaultServices,
    },
    {
      name: "Mack MP7 Euro-4-5",
      engine: "10.8 TDI 315-410hp",
      ecu: "TRW EMS2-2.2 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mack MP7 Euro-6",
      engine: "10.8 TDI D11 345-400hp",
      ecu: "TRW EMS2.3 - ACM",
      services: defaultServices,
    },
    {
      name: "Mack MP8 Euro-4",
      engine: "12.0 TDI 320-410hp",
      ecu: "Bosch MS6.2",
      services: defaultServices,
    },
    {
      name: "Mack MP8 Euro-4-5",
      engine: "12.8 TDI E5 460-520hp",
      ecu: "TRW EMS2.2 - ACM",
      services: defaultServices,
    },
    {
      name: "Mack MP8 Euro-6",
      engine: "12.8 TDI E6 420-520hp",
      ecu: "TRW EMS2.3 - ACM",
      services: defaultServices,
    },
    {
      name: "Mack MP8 Euro-6 2019+",
      engine: "12.8 TDI E6 420-520hp",
      ecu: "TRW EMS2.4 - ACM",
      services: defaultServices,
    },
    {
      name: "Mack MP10 Euro-4-5",
      engine: "16.1 TDI E5 550-700hp",
      ecu: "TRW EMS2.2 - ACM",
      services: defaultServices,
    },
  ],
},
volkswagen: {
  name: "VolksWagen",
  description: "VolksWagen truck ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "VolksWagen 8150 Series",
      engine: "3.0 TDI 150hp",
      ecu: "Bosch EDC7C1 - C2",
      services: defaultServices,
    },
    {
      name: "VolksWagen 13x-17x Series",
      engine: "5.9 TDI 180-250hp",
      ecu: "Bosch EDC7C1 - C2",
      services: defaultServices,
    },
    {
      name: "VolksWagen 19x-25x Series",
      engine: "8.3 TDI Cummins 320hp",
      ecu: "Motorola CM850 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "VolksWagen Constellation",
      engine: "8.9 TDI ISL 280-400hp",
      ecu: "Motorola CM2150",
      services: defaultServices,
    },
  ],
},
iveco: {
  name: "Iveco",
  description: "Iveco truck ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "Iveco Daily 2.3 TDI MS6.3",
      engine: "2.3 TDI",
      ecu: "Bosch MS6.3",
      services: defaultServices,
    },
    {
      name: "Iveco Daily 2.3 TDI EDC16",
      engine: "2.3 TDI 110-145hp",
      ecu: "Bosch EDC16+C39",
      services: defaultServices,
    },
    {
      name: "Iveco Daily 2.3 TDI EDC17",
      engine: "2.3 TDI 115-160hp",
      ecu: "Bosch EDC17C49 - C69 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Iveco Daily 2.3 TDI MD1",
      engine: "2.3 TDI 115-160hp",
      ecu: "Bosch MD1CS069",
      services: defaultServices,
    },
    {
      name: "Iveco Daily 3.0 TDI EDC16",
      engine: "3.0 TDI 145hp",
      ecu: "Bosch EDC16+C39",
      services: defaultServices,
    },
    {
      name: "Iveco Daily 3.0 TDI EDC17",
      engine: "3.0 TDI 140-210hp",
      ecu: "Bosch EDC17C49 - C69 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Iveco Daily 3.0 TDI MD1",
      engine: "3.0 TDI 140-210hp",
      ecu: "Bosch MD1CS069",
      services: defaultServices,
    },

    {
      name: "Iveco EuroCargo 4.5 TDI EDC7",
      engine: "4.5 TDI 130-180hp",
      ecu: "Bosch EDC7C1 - C2 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Iveco EuroCargo 4.5 TDI EDC17",
      engine: "4.5 TDI 130-210hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "Iveco EuroCargo 4.5 TDI MD1",
      engine: "4.5 TDI 140-200hp",
      ecu: "Bosch MD1CE101",
      services: defaultServices,
    },
    {
      name: "Iveco EuroCargo 5.9 TDI",
      engine: "5.9 TDI 200-280hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Iveco EuroCargo 6.7 TDI EDC17",
      engine: "6.7 TDI 220-320hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "Iveco EuroCargo 6.7 TDI MD1",
      engine: "6.7 TDI 210-300hp",
      ecu: "Bosch MD1CE101",
      services: defaultServices,
    },

    {
      name: "Iveco Stralis 8 E3",
      engine: "7.8 TDI 240-350hp",
      ecu: "Bosch MS6.2",
      services: defaultServices,
    },
    {
      name: "Iveco Stralis 8 E4-E5",
      engine: "7.8 TDI 310-420hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Iveco Stralis 8 E6",
      engine: "8.7 TDI 310-400hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },

    {
      name: "Iveco Stralis 10 E3",
      engine: "10.3 TDI 420-480hp",
      ecu: "Bosch MS6.2",
      services: defaultServices,
    },
    {
      name: "Iveco Stralis 10 E4-E5",
      engine: "10.3 TDI 430-560hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },

    {
      name: "Iveco Stralis 11 E6 2015+",
      engine: "11.1 TDI 400-480hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "Iveco Stralis 11 E6 2020+",
      engine: "11.1 TDI 400-460hp",
      ecu: "Bosch MD1CE101",
      services: defaultServices,
    },

    {
      name: "Iveco Stralis 13 E4-E5",
      engine: "12.9 TDI 410-540hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Iveco Stralis 13 E6",
      engine: "12.9 TDI 450-570hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "Iveco Stralis 13 E6 2020+",
      engine: "12.9 TDI 440-570hp",
      ecu: "Bosch MD1CE101",
      services: defaultServices,
    },
  ],
},
jcb: {
  name: "JCB",
  description: "JCB construction equipment ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "JCB 1CX - 43x",
      engine: "1.7-2.2 TDI C2 50-85hp",
      ecu: "Adem A6E10",
      services: defaultServices,
    },
    {
      name: "JCB Engine Kohler",
      engine: "2.5 TDI 55-75hp",
      ecu: "Denso DC1U - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "JCB Excavator 320-430",
      engine: "3.0 TDI 60-80hp",
      ecu: "Delphi DCM2.7 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "JCB Excavator 3CX - 4CX (DCM3.3)",
      engine: "4.4-5.2 TDI 70-172hp",
      ecu: "Delphi DCM3.3 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "JCB Excavator 3CX - 4CX (DCM7.24)",
      engine: "4.4-4.8 TDI 90-172hp",
      ecu: "Delphi DCM7.24 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "JCB Excavator JS2xx",
      engine: "6.5 TDI 130-220hp",
      ecu: "Transtron 4-6HK - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "JCB Fastrac - Loader EDC17",
      engine: "6.6 TDI 220-280hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "JCB Fastrac - Loader CM850",
      engine: "6.7 TDI 130-200hp",
      ecu: "Motorola CM850 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "JCB Fastrac - Loader CM2350",
      engine: "6.7 TDI 170-190hp",
      ecu: "Motorola CM2350",
      services: defaultServices,
    },
    {
      name: "JCB Fastrac - Loader OM936",
      engine: "7.7 TDI 240-320hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "JCB Fastrac - Loader High Power",
      engine: "8.4 TDI 300-400hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "JCB Fastrac - Loader CM2250",
      engine: "8.9 TDI 240-400hp",
      ecu: "Motorola CM2250",
      services: defaultServices,
    },
  ],
},
mitsubishi: {
  name: "Mitsubishi",
  description: "Mitsubishi Fuso ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "Mitsubishi Fuso Canter 3.0 TDI EDC16",
      engine: "3.0 TDI 125hp",
      ecu: "Bosch EDC16C31",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Canter 3.0 TDI EDC17",
      engine: "3.0 TDI 130-175hp",
      ecu: "Bosch EDC17C49",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Canter 3.0 TDI CP15-52",
      engine: "3.0 TDI 130-210hp",
      ecu: "Bosch EDC17CP15 - CP52",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Canter 3.0 TDI MD1",
      engine: "3.0 TDI 140-210hp",
      ecu: "Bosch MD1CS069",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Canter Forklift",
      engine: "3.3 TDI 40-65hp",
      ecu: "Bosch EDC17CP54",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Canter 3.9 TDI",
      engine: "3.9 TDI 120-170hp",
      ecu: "Bosch EDC17CV55",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Canter 4.9 TDI EDC16",
      engine: "4.9 TDI 150-210hp",
      ecu: "Bosch EDC16C31",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Canter 4.9 TDI CP15-52",
      engine: "4.9 TDI 150-175hp",
      ecu: "Bosch EDC17CP15 - CP52",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Enduro OM906",
      engine: "6.4 TDI 210-280hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Fighter",
      engine: "7.5 TDI 240hp",
      ecu: "Bosch EDC16C31",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Fighter Denso",
      engine: "7.5 TDI 240-300hp",
      ecu: "Denso SH7x - ACM VD1CC",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Shogun OM470",
      engine: "10.8 TDI 350-480hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Super Great OM457",
      engine: "12.0 TDI 250-460hp",
      ecu: "Temic ZGS - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Mitsubishi Fuso Shogun OM471",
      engine: "12.8 TDI 420-530hp",
      ecu: "Continental MCM - ACM - CPC",
      services: defaultServices,
    },
  ],
},
ford: {
  name: "Ford",
  description: "Ford Transit, Cargo, and F-series ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "Ford Transit Connect 1.5 TDCI",
      engine: "1.5 TDCI 110-160hp",
      ecu: "Bosch EDC17C70",
      services: defaultServices,
    },
    {
      name: "Ford Transit Connect 1.6 TDCI",
      engine: "1.6 TDCI 110-160hp",
      ecu: "Bosch MD1CS005",
      services: defaultServices,
    },
    {
      name: "Ford Transit Custom 2.0 TDCI SID209-212",
      engine: "2.0 TDCI 100-180hp",
      ecu: "Siemens SID209 - SID212 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Ford Transit Custom 2.0 TDCI SID213",
      engine: "2.0 TDCI 130-165hp",
      ecu: "Siemens SID213 - ACM VD1CP110",
      services: defaultServices,
    },
    {
      name: "Ford Transit Custom 2.2 TDCI",
      engine: "2.2 TDCI 100-180hp",
      ecu: "Siemens SID208 - ACM DCU17",
      services: defaultServices,
    },

    {
      name: "Ford Cargo 3.0 TDI EDC17",
      engine: "3.0 TDI 240-260hp",
      ecu: "Bosch EDC17CP65",
      services: defaultServices,
    },
    {
      name: "Ford Cargo 3.0 TDI MD1",
      engine: "3.0 TDI 240-260hp",
      ecu: "Bosch MD1CP006",
      services: defaultServices,
    },
    {
      name: "Ford Cargo 3.2 TDI",
      engine: "3.2 TDI 125-170hp",
      ecu: "Bosch EDC7",
      services: defaultServices,
    },
    {
      name: "Ford Cargo 3.2 TDI SID603",
      engine: "3.2 TDI 125-170hp",
      ecu: "Siemens SID603",
      services: defaultServices,
    },
    {
      name: "Ford Cargo 3.6 TDI",
      engine: "3.6 TDI 220-280hp",
      ecu: "Bosch EDC7C1 - C2",
      services: defaultServices,
    },
    {
      name: "Ford Cargo 4.5 TDI",
      engine: "4.5 TDI 110-200hp",
      ecu: "Motorola CM2150",
      services: defaultServices,
    },

    {
      name: "Ford F-Series 6.4 TDI",
      engine: "6.4 TDI 300-400hp",
      ecu: "Siemens SID902",
      services: defaultServices,
    },
    {
      name: "Ford F-Series 6.7 TDI CP05",
      engine: "6.7 TDI 300-475hp",
      ecu: "Bosch EDC17CP05",
      services: defaultServices,
    },
    {
      name: "Ford F-Series 6.7 TDI CP65",
      engine: "6.7 TDI 330-450hp",
      ecu: "Bosch EDC17CP65",
      services: defaultServices,
    },
    {
      name: "Ford F-Series 6.7 TDI MD1CP006",
      engine: "6.7 TDI 360-490hp",
      ecu: "Bosch MD1CP006",
      services: defaultServices,
    },
    {
      name: "Ford F-Series 6.7 TDI MD1CP062",
      engine: "6.7 TDI 400-500hp",
      ecu: "Bosch MD1CP062",
      services: defaultServices,
    },

    {
      name: "Ford F-Max EDC7",
      engine: "9.0 TDI 300-380hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Ford F-Max CM850",
      engine: "9.0 TDI 300-380hp",
      ecu: "Motorola CM850 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Ford F-Max EDC17CV41",
      engine: "9.0 TDI 300-360hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "Ford F-Max 12.7 TDI",
      engine: "12.7 TDI 420-550hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
  ],
},
dongfeng: {
  name: "Dongfeng",
  description: "Dongfeng truck ECU diagnostics and performance tuning services.",
  models: [
    {
      name: "Dongfeng Captain 2.3 TDI",
      engine: "2.3 TDI 90-170hp",
      ecu: "Delphi DCM7.1AP",
      services: defaultServices,
    },
    {
      name: "Dongfeng Captain 3.0 TDI",
      engine: "3.0 TDI 140-180hp",
      ecu: "Bosch EDC17C63",
      services: defaultServices,
    },
    {
      name: "Dongfeng Captain ISF",
      engine: "3.8 TDI 105-120hp",
      ecu: "Motorola CM2350",
      services: defaultServices,
    },
    {
      name: "Dongfeng C160",
      engine: "3.8 TDI 160hp",
      ecu: "Motorola CM2220C",
      services: defaultServices,
    },
    {
      name: "Dongfeng C180",
      engine: "4.5 TDI 180hp",
      ecu: "Motorola CM2880",
      services: defaultServices,
    },
    {
      name: "Dongfeng LZ",
      engine: "8.7 TDI 375hp",
      ecu: "Motorola CM2150",
      services: defaultServices,
    },

    {
      name: "Dongfeng DFH DDi11",
      engine: "10.8 TDI 315-465hp",
      ecu: "TRW EMS2.3 - ACM",
      services: defaultServices,
    },

    {
      name: "Dongfeng DFx EDC7",
      engine: "11.1 TDI 380hp",
      ecu: "Bosch EDC7 - ACM DCU15",
      services: defaultServices,
    },
    {
      name: "Dongfeng DFx EDC17",
      engine: "11.1 TDI 370-420hp",
      ecu: "Bosch EDC17CV44",
      services: defaultServices,
    },
    {
      name: "Dongfeng DFx 11.6 TDI",
      engine: "11.6 TDI 370-420hp",
      ecu: "Bosch EDC17CV44",
      services: defaultServices,
    },

    {
      name: "Dongfeng Dx/H7 EDC17",
      engine: "12.2 TDI 340-480hp",
      ecu: "Bosch EDC17CV44",
      services: defaultServices,
    },
    {
      name: "Dongfeng Dx/H7 MD1",
      engine: "12.2 TDI 340-480hp",
      ecu: "Bosch MD1CE108",
      services: defaultServices,
    },

    {
      name: "Dongfeng Dx DDi13",
      engine: "12.8 TDI 410-540hp",
      ecu: "TRW EMS2.3 - ACM",
      services: defaultServices,
    },

    {
      name: "Dongfeng GX/DFL CM2670",
      engine: "12.9 TDI 400-530hp",
      ecu: "Motorola CM2670",
      services: defaultServices,
    },
    {
      name: "Dongfeng GX/DFL CM2150",
      engine: "13.0 TDI 500-600hp",
      ecu: "Motorola CM2150",
      services: defaultServices,
    },

    {
      name: "Dongfeng HV/GX MD1CE100",
      engine: "13.0 TDI 520-630hp",
      ecu: "Bosch MD1CE100",
      services: defaultServices,
    },
    {
      name: "Dongfeng HV/GX CM2670",
      engine: "13.5 TDI 520-640hp",
      ecu: "Motorola CM2670",
      services: defaultServices,
    },
  ],
},
kubota: {
  name: "Kubota",
  description: "Kubota ECU diagnostics and tuning services.",
  models: [
    {
      name: "Kubota KX series 1.8 TDI",
      engine: "1.8 TDI 35-48hp",
      ecu: "Bosch EDC17CV45-C55",
      services: defaultServices,
    },
    {
      name: "Kubota KX series 2.4 TDI",
      engine: "2.4 TDI 42-65hp",
      ecu: "Bosch EDC17-CV45-C55",
      services: defaultServices,
    },
    {
      name: "Kubota KX series 2.6 TDI",
      engine: "2.6 TDI 40-80hp",
      ecu: "Denso SH7x - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Kubota KX series 3.3 TDI",
      engine: "3.3 TDI 58-90hp",
      ecu: "Denso SH7x - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Kubota MX series 3.8 TDI",
      engine: "3.8 TDI 90-120hp",
      ecu: "Denso SH7x - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "Kubota MX series 6.1 TDI",
      engine: "6.1 TDI 120-190hp",
      ecu: "Denso SH7254x - ACM DCU17",
      services: defaultServices,
    },
  ],
},
claas: {
  name: "CLAAS",
  description: "CLAAS ECU diagnostics and agricultural tuning services.",
  models: [
    {
      name: "CLAAS Axion Nexos",
      engine: "3.4 TDI 70-115hp",
      ecu: "Bosch EDC17C49 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion Scorpion",
      engine: "4.1 TDI 115-156hp",
      ecu: "Bosch EDC17CV52",
      services: defaultServices,
    },
    {
      name: "CLAAS Arion Celtis",
      engine: "4.5 TDI 75-155hp",
      ecu: "Phoenix L4-12",
      services: defaultServices,
    },
    {
      name: "CLAAS Arion Celtis CV41",
      engine: "4.5 TDI 90-98hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "CLAAS Arion Phoenix L33",
      engine: "4.5 TDI 110-160hp",
      ecu: "Phoenix L33-34",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion OM934",
      engine: "5.1 TDI 170-230hp",
      ecu: "Continental MCM - ACM CPC",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion Avero C6",
      engine: "6.6 TDI 150-250hp",
      ecu: "Adem A5E2 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion Arion CV41",
      engine: "6.7 TDI 179-253hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion Arion MD1",
      engine: "6.7 TDI 215-265hp",
      ecu: "Bosch MD1CE101",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion Triton CM2350",
      engine: "6.7 TDI 300-360hp",
      ecu: "Motorola CM2350",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion Triton L1x",
      engine: "6.8 TDI 254hp",
      ecu: "Phoenix L1x-2x",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion Torion",
      engine: "7.0 TDI 160-275hp",
      ecu: "LIDEC ECU2",
      services: defaultServices,
    },
    {
      name: "CLAAS Avero Lexion C7",
      engine: "7.1 TDI 150-320hp",
      ecu: "Adem A3 / A5E2 - ACM DCU17",
      services: defaultServices,
    },
    {
      name: "CLAAS Axion Atles Tucano",
      engine: "7.2 TDI 250-326hp",
      ecu: "Temic ZGS",
      services: defaultServices,
    },
    {
      name: "CLAAS Arion OM936",
      engine: "7.7 TDI 240-380hp",
      ecu: "Continental MCM - ACM CPC",
      services: defaultServices,
    },
    {
      name: "CLAAS Arion EDC17",
      engine: "8.7 TDI 250hp",
      ecu: "Bosch EDC17CV41",
      services: defaultServices,
    },
    {
      name: "CLAAS Arion Xerion",
      engine: "8.8 TDI 275-375hp",
      ecu: "Adem A4E4 - ACM A5x",
      services: defaultServices,
    },
    {
      name: "CLAAS Arion Triton CM2350",
      engine: "8.9 TDI 400-450hp",
      ecu: "Motorola CM2350",
      services: defaultServices,
    },
    {
      name: "CLAAS Arion Lexion C9",
      engine: "9.3 TDI 305-385hp",
      ecu: "Adem A4E4 - ACM A5E2 + DCU17",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar OM470",
      engine: "10.7 TDI 320-460hp",
      ecu: "Continental MCM - ACM CPC",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar OM501",
      engine: "12.0 TDI 310-480hp",
      ecu: "Temic ZGS",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar D26",
      engine: "12.4 TDI 400-530hp",
      ecu: "Bosch EDC17CV42",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar C13",
      engine: "12.5 TDI 420-530hp",
      ecu: "Adem A4E4 - ACM A5E2 + DCU17",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar OM471",
      engine: "12.8 TDI 420-530hp",
      ecu: "Continental MCM - ACM CPC",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar OM473",
      engine: "15.6 TDI 520-650hp",
      ecu: "Continental MCM - ACM CPC",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar OM502",
      engine: "15.9 TDI 440-650hp",
      ecu: "Temic ZGS",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar D2868",
      engine: "16.2 TDI 650-800hp",
      ecu: "Bosch EDC17CV42 x2 ECU",
      services: defaultServices,
    },
    {
      name: "CLAAS Jaguar D2862",
      engine: "24.2 TDI 830-950hp",
      ecu: "Bosch EDC17CV42 x2 ECU",
      services: defaultServices,
    },
  ],
},
  case: { name: "CASE", description: "ECU diagnostics services.", models: [defaultModel("case")] },
  daewoo: { name: "Daewoo", description: "ECU diagnostics services.", models: [defaultModel("daewoo")] },
  deutz: { name: "Deutz", description: "ECU diagnostics services.", models: [defaultModel("deutz")] },
  doosan: { name: "Doosan", description: "ECU diagnostics services.", models: [defaultModel("doosan")] },
  faw: { name: "FAW", description: "ECU diagnostics services.", models: [defaultModel("faw")] },
  fendt: { name: "Fendt", description: "ECU diagnostics services.", models: [defaultModel("fendt")] },
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
  johndeere: { name: "JohnDeere", description: "ECU diagnostics services.", models: [defaultModel("johndeere")] },
  kassbohrer: { name: "Kassbohrer", description: "ECU diagnostics services.", models: [defaultModel("kassbohrer")] },
  kamaz: { name: "KAMAZ", description: "ECU diagnostics services.", models: [defaultModel("kamaz")] },
  kenworth: { name: "Kenworth", description: "ECU diagnostics services.", models: [defaultModel("kenworth")] },
  kobelco: { name: "Kobelco", description: "ECU diagnostics services.", models: [defaultModel("kobelco")] },
  kohler: { name: "Kohler", description: "ECU diagnostics services.", models: [defaultModel("kohler")] },
  komatsu: { name: "Komatsu", description: "ECU diagnostics services.", models: [defaultModel("komatsu")] },
  krone: { name: "Krone", description: "ECU diagnostics services.", models: [defaultModel("krone")] },
  liebherr: { name: "Liebherr", description: "ECU diagnostics services.", models: [defaultModel("liebherr")] },
  mahindra: { name: "Mahindra", description: "ECU diagnostics services.", models: [defaultModel("mahindra")] },
  manitou: { name: "Manitou", description: "ECU diagnostics services.", models: [defaultModel("manitou")] },
  masseyferguson: { name: "MasseyFerguson", description: "ECU diagnostics services.", models: [defaultModel("masseyferguson")] },
  maxus: { name: "Maxus", description: "ECU diagnostics services.", models: [defaultModel("maxus")] },
  maz: { name: "MAZ", description: "ECU diagnostics services.", models: [defaultModel("maz")] },
  newholland: { name: "NewHolland", description: "ECU diagnostics services.", models: [defaultModel("newholland")] },
  nissan: { name: "Nissan", description: "ECU diagnostics services.", models: [defaultModel("nissan")] },
  peterbilt: { name: "Peterbilt", description: "ECU diagnostics services.", models: [defaultModel("peterbilt")] },
  shacman: { name: "Shacman", description: "ECU diagnostics services.", models: [defaultModel("shacman")] },
  tata: { name: "TATA", description: "ECU diagnostics services.", models: [defaultModel("tata")] },
  terex: { name: "Terex", description: "ECU diagnostics services.", models: [defaultModel("terex")] },
  uaz: { name: "UAZ", description: "ECU diagnostics services.", models: [defaultModel("uaz")] },
  valtra: { name: "Valtra", description: "ECU diagnostics services.", models: [defaultModel("valtra")] },
  wirtgen: { name: "Wirtgen", description: "ECU diagnostics services.", models: [defaultModel("wirtgen")] },
  xcmg: { name: "XCMG", description: "ECU diagnostics services.", models: [defaultModel("xcmg")] },
  yanmar: { name: "Yanmar", description: "ECU diagnostics services.", models: [defaultModel("yanmar")] },
};
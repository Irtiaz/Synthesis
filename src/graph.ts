export interface Product {
  type: string;
  instruction: string;
}

interface Graph {
  [key: string]: Product[];
}

export const graph: Graph = {
  alkane: [
    {
      type: 'alkyl halide',
      instruction: 'add halogen',
    },
  ],

  alkene: [
    {
      type: 'alkane',
      instruction: 'add Hydrogen in presence of Ni',
    },

    {
      type: 'alkyl halide',
      instruction: 'add Hydrogen Halide',
    },

    {
      type: 'aldehyde',
      instruction: 'ozonation',
    },
  ],

  alkyne: [
    {
      type: 'alkane',
      instruction: 'add Hydrogen in presence of Nickel',
    },

    {
      type: 'alkene',
      instruction: 'add hydrogen in presence of Pd and Barium Sulfate',
    },
  ],

  'alkyl halide': [
    {
      type: 'alkane',
      instruction: 'reduce in presence of Zn and HCl or perform Wurtz reaction',
    },

    {
      type: 'alkene',
      instruction: 'add alcoholic KOH',
    },

    {
      type: 'alkyne',
      instruction: 'add alcoholic KOH',
    },

    {
      type: 'alcohol',
      instruction: 'add aqueous NaOH',
    },

    {
      type: 'ether',
      instruction: 'add R-O-Na',
    },

    {
      type: 'amine',
      instruction: 'add Ammonia',
    },
  ],

  alcohol: [
    {
      type: 'alkene',
      instruction:
        'perform dehydration in presence of a dehydrating agent such as Sulphuric Acid',
    },

    {
      type: 'amine',
      instruction: 'add Ammonia',
    },

    {
      type: 'ether',
      instruction: 'add Sulphuric Acid or Diazomethane',
    },

    {
      type: 'alkyl halide',
      instruction: 'add HX/PX3/PX5/SOX2',
    },

    {
      type: 'haloform',
      instruction: 'add NaOH and halogen (not always applicable)',
    },

    {
      type: 'ester',
      instruction: 'add organic acid in presence of a dehydrating agent',
    },

    {
      type: 'aldehyde',
      instruction: 'oxidize',
    },

    {
      type: 'ketone',
      instruction: 'oxidize',
    },
  ],

  aldehyde: [
    {
      type: 'alkane',
      instruction: 'perform Clemmensen reduction or Walf Kishner reduction',
    },

    {
      type: 'acid salt',
      instruction: 'perform Fehling test or add Tollens reagent',
    },

    {
      type: 'haloform',
      instruction: 'add NaOH and halogen (not always applicable)',
    },

    {
      type: 'alcohol',
      instruction: 'reduce in presence of LiAlH4',
    },

    {
      type: 'acid',
      instruction: 'oxidize',
    },
  ],

  ketone: [
    {
      type: 'alkane',
      instruction: 'perform Clemmensen reduction or Walf Kishner reduction',
    },

    {
      type: 'haloform',
      instruction: 'add NaOH and halogen (not always applicable)',
    },

    {
      type: 'alcohol',
      instruction: 'reduce in presence of LiAlH4',
    },

    {
      type: 'acid',
      instruction: 'oxidize',
    },
  ],

  acid: [
    {
      type: 'aldehyde',
      instruction: 'reduce',
    },

    {
      type: 'ketone',
      instruction: 'reduce',
    },

    {
      type: 'ester',
      instruction: 'add alcohol in presence of a dehydrating agent',
    },

    {
      type: 'acid salt',
      instruction: 'add base such as NaOH',
    },
  ],

  'acid salt': [
    {
      type: 'alkane',
      instruction: 'perform soda lime decarboxylation or Kolbe electrolysis',
    },

    {
      type: 'amide',
      instruction: 'heat it',
    },
  ],

  ester: [
    {
      type: 'acid salt',
      instruction: 'add KOH',
    },

    {
      type: 'alcohol',
      instruction: 'add KOH',
    },
  ],

  haloform: [
    {
      type: 'alkyne',
      instruction: 'add Ag',
    },
  ],

  amide: [
    {
      type: 'acid',
      instruction: 'hydrolyzation',
    },

    {
      type: 'amine',
      instruction:
        'reduce or perform Clemmensen reduction / Hofmann degradation',
    },

    {
      type: 'acid salt',
      instruction: 'add NaOH',
    },
  ],

  ether: [
    {
      type: 'ester',
      instruction: 'add CO',
    },
  ],

  amine: [
    {
      type: 'alcohol',
      instruction: 'add HNO2 (works only for primary amines)',
    },
  ],
};

export const types = [
  'acid',
  'acid salt',
  'alcohol',
  'aldehyde',
  'alkane',
  'alkene',
  'alkyl halide',
  'alkyne',
  'amide',
  'amine',
  'ester',
  'ether',
  'haloform',
  'ketone',
];

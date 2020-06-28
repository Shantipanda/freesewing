import { version } from '../package.json'

export default {
  name: 'sven',
  version,
  design: 'Joost De Cock',
  code: 'Joost De Cock',
  department: 'menswear',
  type: 'pattern',
  difficulty: 3,
  tags: ['top', 'basics'],
  optionGroups: {
    fit: [
      'chestEase',
      'collarEase',
      'bicepsEase',
      'cuffEase',
      'shoulderEase',
      'lengthBonus',
      'sleeveLengthBonus'
    ],
    style: ['ribbing', 'ribbingHeight'],
    advanced: [
      'acrossBackFactor',
      'armholeDepthFactor',
      'backNeckCutout',
      'frontArmholeDeeper',
      'ribbingStretch',
      'sleeveWidthGuarantee',
      {
        sleevecap: [
          'sleevecapEase',
          'sleevecapTopFactorX',
          'sleevecapTopFactorY',
          'sleevecapBackFactorX',
          'sleevecapBackFactorY',
          'sleevecapFrontFactorX',
          'sleevecapFrontFactorY',
          'sleevecapQ1Offset',
          'sleevecapQ2Offset',
          'sleevecapQ3Offset',
          'sleevecapQ4Offset',
          'sleevecapQ1Spread1',
          'sleevecapQ1Spread2',
          'sleevecapQ2Spread1',
          'sleevecapQ2Spread2',
          'sleevecapQ3Spread1',
          'sleevecapQ3Spread2',
          'sleevecapQ4Spread1',
          'sleevecapQ4Spread2'
        ]
      }
    ]
  },
  measurements: [
    'biceps',
    'chest',
    'hpsToWaistBack',
    'hips',
    'waist',
    'waistToHips',
    'neck',
    'shoulderSlope',
    'shoulderToShoulder',
    'shoulderToWrist',
    'wrist'
  ],
  dependencies: {
    frontBase: 'base',
    backBase: 'base',
    front: 'frontBase',
    back: 'backBase',
    sleeve: ['sleeveBase', 'front', 'back']
  },
  inject: {
    frontBase: 'base',
    backBase: 'base',
    front: 'frontBase',
    back: 'backBase',
    sleeve: 'sleeveBase'
  },
  parts: ['cuff', 'waistband'],
  hide: ['base', 'frontBase', 'backBase', 'sleeveBase'],
  options: {
    // Constants
    collarFactor: 5,
    brianFitSleeve: true,
    brianFitCollar: true,
    shoulderSlopeReduction: 0,

    // Booleans
    ribbing: { bool: true },

    // Percentages
    acrossBackFactor: { pct: 97, min: 93, max: 100 },
    chestEase: { pct: 8, min: 4, max: 20 },
    bicepsEase: { pct: 8, min: 4, max: 20 },
    cuffEase: { pct: 20, min: 5, max: 30 },
    collarEase: { pct: 10, min: 5, max: 30 },
    lengthBonus: { pct: 15, min: 0, max: 30 },
    sleeveLengthBonus: { pct: 3, min: 0, max: 10 },
    ribbingHeight: { pct: 8, min: 3, max: 15 },
    ribbingStretch: { pct: 15, min: 0, max: 30 },

    armholeDepthFactor: { pct: 55, min: 50, max: 70 },
    backNeckCutout: { pct: 5, min: 2, max: 8 },

    frontArmholeDeeper: { pct: 0, min: 0, max: 1.5 },

    hipsEase: { pct: 8, min: -4, max: 20 },

    shoulderEase: { pct: 0, min: -2, max: 6 },

    sleevecapEase: { pct: 0, min: 0, max: 10 },
    sleevecapTopFactorX: { pct: 50, min: 25, max: 75 },
    sleevecapTopFactorY: { pct: 100, min: 35, max: 165 },
    sleevecapBackFactorX: { pct: 60, min: 35, max: 65 },
    sleevecapBackFactorY: { pct: 33, min: 30, max: 65 },
    sleevecapFrontFactorX: { pct: 55, min: 35, max: 65 },
    sleevecapFrontFactorY: { pct: 33, min: 30, max: 65 },
    sleevecapQ1Offset: { pct: 3, min: 0, max: 7 },
    sleevecapQ2Offset: { pct: 5.5, min: 0, max: 7 },
    sleevecapQ3Offset: { pct: 4.5, min: 0, max: 7 },
    sleevecapQ4Offset: { pct: 1, min: 0, max: 7 },
    sleevecapQ1Spread1: { pct: 6, min: 4, max: 20 },
    sleevecapQ1Spread2: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread1: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread2: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread1: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread2: { pct: 8, min: 4, max: 20 },
    sleevecapQ4Spread1: { pct: 7, min: 4, max: 20 },
    sleevecapQ4Spread2: { pct: 7, min: 4, max: 20 },
    sleeveWidthGuarantee: { pct: 90, min: 25, max: 100 },
    waistEase: { pct: 8, min: -4, max: 20 }
  }
}

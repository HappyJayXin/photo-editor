const fontStyle = {
  title1: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '96px',
    lineHeight: '140%',
  },
  title2: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '60px',
    lineHeight: '140%',
  },
  title3: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '140%',
  },
  title4: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '34px',
    lineHeight: '140%',
  },
  title5: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '140%',
  },
  title6: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '140%',
  },

  subTitle1: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '120%',
  },
  subTitle2: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '120%',
  },

  body1: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '140%',
  },
  body2: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '140%',
  },
};

export type FontStyle = keyof typeof fontStyle;

export default fontStyle;

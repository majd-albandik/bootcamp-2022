/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      mobile: '460px',
      // => @media (min-width: 460px) { ... }
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
      print: { raw: 'print' },
      // => @media print {...}
    },
    colors: {
      primary: {
        1: '#C33218',
        2: '#A9260E',
        3: '#801300',
      },
      gray: {
        1: '#FFFFFF',
        2: '#f3f4f6',
        3: '#e5e7eb',
        4: '#d1d5db',
        5: '#9ca3af',
        6: '#262626',
        7: '#000000',
      },
      transparent: 'transparent',
    },
    fontSize: {
      72: ['4.5rem'], // 72px
      64: ['4rem'], // 64px
      48: ['3rem'], // 48px
      32: ['2rem'], // 32px
      24: ['1.5rem'], // 24px
      22: ['1.375rem'], // 22Px
      20: ['1.25rem'], // 20Px
      18: ['1.125rem'], // 18px
      16: ['1rem'], // 16px
      14: ['0.875rem'], // 14px
      12: ['0.75rem'], // 12px
    },
    inset: {
      '-4': '-1rem',
      '1/100': '1%',
      '1/50': '2%',
      '1/2': '50%',
      '1/4': '25%',
      '1/10': '10%',
      sm: '0.125rem',
      0: '0rem',
      1.5: '0.375rem',
      2: '0.5rem',
      4: '1rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      20: '5rem',
      24: '6rem',
      26: '6.5rem',
      30: '7.5rem',
      32: '8rem',
      33: '8.25rem',
      34: '8.5rem',
      38: '9.5rem',
      52: '13rem',
      80: '20rem',
      88: '22rem',
    },
    minWidth: {
      auto: 'auto',
      0: 0,
      6: '1.5rem',
      8: '2rem',
      12: '3rem',
      20: '5rem',
      30: '7.5rem',
      36: '9rem',
      40: '10rem',
      50: '12.5rem',
      51: '13.0rem',
      58: '14.5rem',
      72: '18rem',
      75: '18.75rem',
      140: '35rem',
      144: '36rem',
      full: '100%',
    },
    maxWidth: {
      none: 'none',
      36: '9rem',
      50: '12.5rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      84: '21rem',
      89: '22.5rem',
      96: '24rem',
      115: '28.75rem',
      140: '35rem',
      160: '40rem',
      170: '42.5rem',
      176: '44rem',
      186: '46.5rem',
      190: '47.5rem',
      200: '50rem',
      225: '56.25rem',
      228: '70.5rem',
      300: '75rem',
      content: '90rem',
      xs: '20rem',
      full: '100%',
    },
    minHeight: {
      auto: 'auto',
      6: '1.5rem',
      8: '2rem',
      7: '1.75rem',
      11: '2.75rem',
      12: '3rem',
      20: '5rem',
      25: '6.25rem',
      28: '7rem',
      40: '10rem',
      90: '22.5rem',
      93: '23.25rem',
      131: '32.75rem',
      140: '35rem',
      screen: '100vh',
    },
    maxHeight: {
      none: 'none',
      0: '0',
      24: '6rem',
      28: '7rem',
      200: '50rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '9/10': '90%',
      full: '100%',
      constM: '6.25rem',
    },
    extend: {
      spacing: {
        1.5: '0.375rem', // 6px
        2: '0.5rem', // 8px
        2.5: '0.625rem', // 10px
        2.75: '0.6875rem', // 11px
        3: '0.75rem', // 12px
        3.5: '0.875rem', // 14px
        4: '1rem', // 16px
        4.25: '1.0625rem', // 17px
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        6.5: '1.625rem', // 26px
        7: '1.75rem', // 28px
        8: '2rem', // 32px
        9: '2.25rem', // 36px
        9.5: '2.375rem', // 38px
        10: '2.5rem', // 40px
        10.5: '2.625rem', // 42px
        11: '2.75rem', // 44px
        12: '3rem', // 48px
        13: '3.25rem', // 52px
        14: '3.5rem', // 56px
        15: '3.75rem',
        16: '4rem', // 64px
        17: '4.125rem',
        18: '4.5rem',
        19: '4.75rem', // 76px
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        24: '6rem', // 96px
        25: '6.25rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        34: '8.5rem',
        35: '8.75rem',
        36: '9rem',
        38: '9.5rem',
        38.75: '9.6875rem',
        40: '10rem',
        41: '10.25rem',
        42: '10.5rem',
        43: '10.75rem',
        44: '11rem',
        45: '11.25rem',
        46.5: '11.625rem', // 186px
        48: '12rem',
        50: '12.5rem',
        52: '13rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        68: '17rem',
        70: '17.5rem',
        71: '17.75rem',
        72: '18rem',
        74: '18.5rem',
        75: '18.75rem',
        80: '20rem',
        81: '20.25rem', // 324px
        82: '20.5rem',
        84: '21rem',
        85: '21.25rem',
        88: '22rem',
        88.75: '22.1875rem',
        90: '22.5rem',
        93: '23.25rem',
        98: '24.5rem',
        100: '25rem',
        109: '27.25rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        131: '32.75rem',
        132: '33rem',
        140: '35rem',
        144: '36rem',
        152: '38rem',
        160: '40rem',
        168: '42rem',
        200: '50rem',
        240: '60rem',
        256: '64rem',
        312: '78rem',
      },
      borderWidth: {
        0: '0',
        1: '1px',
        2: '2px',
        5: '5px',
      },
    },
  },
  plugins: [],
};

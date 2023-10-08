/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  //important:true,
  content: [`components/**/*.{vue,js,ts}`,
  `layouts/**/*.vue`,
  `pages/**/*.vue`,
  `plugins/**/*.{js,ts}`,
  `nuxt.config.{js,ts}`,
  './app.vue'],

  theme: {
    screens: {
        'xs': '480px',
        ...defaultTheme.screens,
    },
    fontFamily: {
        ubuntuRegular: ['Ubuntu-Regular', 'sans-serif'],
        ubuntuBold: ['Ubuntu-Bold', 'sans-serif'],
        ubuntuMedium: ['Ubuntu-Medium', 'sans-serif']
    },
    
    extend: {
        colors: {
            primary:'#2EF1BD',
            secondary:'#E79447',
            neutral: {
                dark:'#000000',
                default:'#CFDFEB',//'#F4F4F4',
                light:'#F5F5F5',
            },
            footer: '#ECECEC',//defaultTheme.neutral,
            success:'#000000',
            error: '#FC232B',//defaultTheme.primary,
            notification:'#000000',
            alert:'#000000',
            info:'#000000'
        },
        gridTemplateColumns: {
            'fill-168': 'repeat(auto-fill, minmax(250px, 1fr))',
        },
        gridTemplateRows: {
            'fit-190': 'repeat(auto-fit, 190px)',
        },
        maxWidth:{
            maxWidth:'1920px'
        },
        height:{
            headerMax:'80px',
            headerMin:'60px'
        },
        width:{
            side:'4vw'
        },
        spacing: {
            mainSide:'4vw'
        },
        screens: {
            'xxs': '330px',
            'min-mobile': '390px',
            'xs': '480px',
            'sm': '670px',
            '2sm': '715px',
            'tablet':'769px',
            'mdmin': '950px',
            'md': '1001px',
            'lg': '1200px',
            'xl': '1281px',
            '2xl': '1441px',
            '3xl': '1580px',
            '4xl': '1648px'
        },
        boxShadow: {
            'down': '0px 42px 27px rgba(0, 0, 0, 0.09), 0px 11px 24px rgba(0, 0, 0, 0.06)'
        }
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
        addComponents({
            '.main-side': {
                paddingLeft: '100px !important',//80px
                paddingRight: '100px !important',
                '@media (max-width: 1200px)': {
                    paddingLeft: '30px !important',//20px
                    paddingRight: '30px !important',
                }
            },
            '.global-side': {
                paddingLeft: '20px !important',//20px
                paddingRight: '20px !important',
                '@media (max-width: 480px)': {
                    paddingLeft: '16px !important',//20px
                    paddingRight: '16px !important',
                }
                
            },
            '.gradient-player': {
                backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 96.79%) !important"
            },
            '.left-side': {
                paddingLeft: '4vw !important',//80px
                '@media (max-width: 1200px)': {
                    paddingLeft: '3vw !important',//20px
                }
            },
            '.right-side': {
                paddingRight: '4vw !important',//80px
                '@media (max-width: 1200px)': {
                    paddingRight: '3vw !important',//20px
                },
                '@media (min-width: 1200px)': {
                    paddingRight: '0px !important',//20px
                }
            },
            '.width-side': {
                width: '4vw !important',//80px
                '@media (max-width: 1200px)': {
                    width: '3vw !important',//20px
                }
            },
            '.section-pad': {
                paddingBottom: '155px !important',//80px
                '@media (max-width: 640px)': {
                    paddingBottom: '80px !important',//20px
                }
            },
          // ...
        })
      })
  ],
}


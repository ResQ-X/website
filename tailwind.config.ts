import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			'cold-grey-white': '#fff',
  			'text-txt-primary': '#000',
  			darkest: '#332414',
  			'szrke-2': '#94908c',
  			stt: '#292219',
  			chocolate: '#ea6d27',
  			gray: {
  				'100': '#33141c',
  				'200': '#101828',
  				'300': '#121212',
  				'400': '#000b28',
  				'500': 'rgba(255, 255, 255, 0.05)',
  				'600': 'rgba(25, 25, 25, 0.6)',
  				'700': 'rgba(0, 0, 0, 0.04)',
  				'800': 'rgba(255, 255, 255, 0.8)',
  				'900': 'rgba(18, 18, 18, 0.8)',
  				'1000': 'rgba(16, 24, 40, 0.5)',
  				'1100': 'rgba(51, 36, 20, 0.1)',
  				'1200': 'rgba(0, 0, 0, 0.3)',
  				'1300': 'rgba(16, 26, 36, 0.5)'
  			},
  			dimgray: {
  				'100': '#735059',
  				'200': '#4b2e2a'
  			},
  			whitesmoke: '#f6fafa',
  			brown: '#800020',
  			lightest: '#faf8f5',
  			'pry-col': '#ff8500',
  			darkgray: 'rgba(168, 152, 135, 0.4)',
  			dark: '#736250',
  			light: '#f2e7da',
  			darkslategray: {
  				'100': '#303a42',
  				'200': '#333',
  				'300': '#172b4d',
  				'400': 'rgba(48, 58, 66, 0.5)'
  			},
  			medium: '#a89887',
  			'black-white-gray100': '#1f1f1f',
  			darkorange: 'rgba(255, 133, 0, 0.4)',
  			darkslateblue: '#72479c',
  			'text-text-body': '#323232',
  			mediumseagreen: {
  				'100': '#12b76a',
  				'200': '#039855'
  			},
  			deeppink: '#ff479f',
  			mediumvioletred: '#b11c64',
  			cornflowerblue: '#6e7ddb',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {},
  		fontFamily: {
  			roboto: 'Roboto',
  			poppins: 'Poppins',
  			'button-text-and-navigation': 'Raleway',
  			merriweather: 'Merriweather',
  			'title-1-strong': 'Inter',
  			'body-medium-medium-heebo-14': 'Heebo',
  			'racing-sans-one': 'Racing Sans One'
  		},
  		borderRadius: {
  			xl: '20px',
  			'8xs': '5px',
  			'3xs': '10px',
  			'11xl': '30px',
  			'lg-4': '18.4px',
  			'69xl': '88px',
  			'80xl': '99px',
  			'base-8': '16.8px',
  			'sm-8': '13.8px',
  			'21xl': '40px',
  			'radius-200': '8px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontSize: {
  		sm: '14px',
  		lg: '18px',
  		xs: '12px',
  		base: '16px',
  		'45xl': '64px',
  		'19xl': '38px',
  		'32xl': '51px',
  		'31xl': '50px',
  		'11xl': '30px',
  		'21xl': '40px',
  		xl: '20px',
  		'9xl': '28px',
  		'3xl': '22px',
  		mini: '15px',
  		'6xl': '25px',
  		'49xl': '68px',
  		'22xl': '41px',
  		'35xl': '54px',
  		'29xl': '48px',
  		'5xl': '24px',
  		lgi: '19px',
  		'13xl': '32px',
  		inherit: 'inherit'
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require('daisyui'),
  ],
} satisfies Config

export default config
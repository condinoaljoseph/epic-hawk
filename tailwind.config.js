module.exports = {
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'muted': 'var(--color-muted)',
				'muted-hover': 'var(--color-muted-hover)',
				'primary': 'var(--color-primary)',
				'primary-hover': 'var(--color-primary-hover)',
				'secondary': 'var(--color-secondary)',
				'secondary-hover': 'var(--color-secondary-hover)',
				'danger': 'var(--color-danger)',
				'danger-hover': 'var(--color-danger-hover)',
				'danger-background': 'var(--color-danger-background)',
				'background': 'var(--color-background)',
				'background-muted': 'var(--color-background-muted)',
				'heading': 'var(--color-heading)',
				'heading-muted': 'var(--color-heading-muted)',
				'body': 'var(--color-body)',
				'body-muted': 'var(--color-body-muted)',
				'hawk': {
					light: '#fcdfdf',
					DEFAULT: '#fbcaca'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};

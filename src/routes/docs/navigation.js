export const base_path = '/docs'
export const example_path = '/demo'

export interface Navigation {
	title: string
	route: string
	id?: string
	icon?: string
	description?: string
	children?: Navigation[]
}

export const navigations: Navigation[] = [
	{
		title: 'Getting Started',
		id: 'getting-started',
		route: '/docs',
		children: [
			{
				title: 'Introduction',
				id: 'introduction',
				route: '/introduction',
				icon: 'tabler:file-text',
			},
			{
				title: 'Installation',
				id: 'installation',
				route: '/installation',
				icon: 'tabler:download',
			},
			{
				title: 'Theming',
				id: 'theming',
				route: '/theming',
				icon: 'tabler:color-swatch',
			},
		],
	}
]

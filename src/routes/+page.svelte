<script>
	import Navbar from '../components/landing-page/Navbar.svelte';
	import Icon from '$lib/icon/Icon.svelte';
	import Button from '$lib/button/Button.svelte';
	// import Colorpicker from '$lib/form/Colorpicker.svelte';
	// import Form from '$lib/form/Form.svelte';
	// import FormItem from '$lib/form/FormItem.svelte';
	// import Input from '$lib/form/Input.svelte';

	// let formInline = { user: '', password: '' };

	// 	let cityList = [
	//   {
	//     group: true,
	//     label: 'Group 1',
	//     options: [
	//       { value: 'option1', label: 'Option 1' },
	//       { value: 'option2', label: 'Option 2' },
	//     ],
	//   },
	//   { value: 'option3', label: 'Option 3' },
	//   { value: 'option4', label: 'Option 4' },
	// ];

	let model = '';

	let icon = 'clipboard';
	let iconType = 'regular';

	let headers = [
		{ title: 'Name', key: 'name' },
		{ title: 'Age', key: 'age' },
		{ title: 'Address', key: 'address' }
	];

	let items = [
		{ name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park', date: '2016-10-03' },
		{ name: 'Jim Green', age: 24, address: 'London No. 1 Lake Park', date: '2016-10-01' },
		{ name: 'Joe Black', age: 30, address: 'Sydney No. 1 Lake Park', date: '2016-10-02' },
		{ name: 'Jon Snow', age: 26, address: 'Ottawa No. 2 Lake Park', date: '2016-10-04' }
	];

	async function copy() {
		await navigator.clipboard.writeText('npm i svelte-ui-library-kit');
		icon = 'check';
		iconType = 'solid';

		setTimeout(() => {
			icon = 'clipboard';
			iconType = 'regular';
		}, 3000);
	}
</script>

<div class="hero-banner">
	<section>
		<Navbar />
	</section>
	<div class="mx-auto text-center prose lg:prose-xl py-28">
		<h1>Empower your development with our extensive UI component library</h1>
		<h3>A flexible & powerful Svelte library for building web applications quickly and easily</h3>
		<div class="flex justify-center gap-4 pt-5">
			<div class="flex-initial w-80" on:click={copy}>
				<p class="py-2 border rounded-lg border-sky-500 c-white">
					npm i svelte-ui-library-kit <Icon type={iconType} name={icon} />
				</p>
			</div>
			<div class="my-6">
				<Button color="white" shape="round" size="lg" link="/docs/introduction">
					<Icon type="solid" name="book-open" />Get Started
				</Button>
			</div>
		</div>
	</div>
</div>
<div class="hero-banner">
	<svg viewBox="0 0 2160 261" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			id="Wave"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2160 261H0V0.807678C360 80.1044 720 119.753 1080 119.753C1440 119.753 1800 80.1044 2160 0.807678V261Z"
			fill="white"
		/>
	</svg>
</div>

<!-- <br /> -->
<!-- <Datepicker /> -->
<!-- <Upload /> -->

<!-- <Table columns={headers} data={items} /> -->

<!-- <Slider /> -->

<!-- <Colorpicker bind:color={color2} onChange={handleColorChange}  /> -->

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.hero-banner {
		background-color: #206bc4;
	}

	.c-white {
		color: #fff;
		cursor: pointer;
	}
</style>

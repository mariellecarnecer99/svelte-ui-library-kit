<!-- <script>
    import FormItem from "./FormItem.svelte"
	import Icon from "../icon/Icon.svelte";
    import Input from "./Input.svelte"

	let formInline = { user: '', password: '' };
	let validationMessages = { user: '', password: '' };
  
	const ruleInline = {
	  user: [
		{ type: 'required', message: 'Username is required' },
	  ],
	  password: [
		{ type: 'required', message: 'Password is required' },
	  ],
	};
  
	const validateField = (field) => {
	  const rules = ruleInline[field];
	  const value = formInline[field];
  
	  validationMessages[field] = '';
  
	  for (const rule of rules) {
		if (rule.type === 'required' && !value) {
		  validationMessages[field] = rule.message;
		  break;
		}
		// Add more validation rules as needed
	  }
	};
  
	const handleSubmit = () => {
	  // Validate all fields before submission
	  Object.keys(formInline).forEach((field) => validateField(field));
  
	  // Check if there are any validation errors
	  const hasErrors = Object.values(validationMessages).some((msg) => msg !== '');
  
	  if (!hasErrors) {
		// Your form submission logic goes here
		console.log('Form submitted', formInline);
	  }
	};
  </script> -->

<main>
	<div class="input-group">
		<slot />

		<!-- <input
		type="text"
		bind:value={formInline.user}
		placeholder="Username"
		on:input={() => validateField('user')}
		on:blur={() => validateField('user')}
	  />
	  {#if validationMessages.user !== ''}
		<div class="error-message">{validationMessages.user}</div>
	  {/if} -->
	</div>

	<!-- <div class="input-group">
	  <Icon type="solid" name="lock" />
	  <input
		type="password"
		bind:value={formInline.password}
		placeholder="Password"
		on:input={() => validateField('password')}
		on:blur={() => validateField('password')}
	  />
	  {#if validationMessages.password !== ''}
		<div class="error-message">{validationMessages.password}</div>
	  {/if}
	</div>
  
	<div class="button-group">
	  <button on:click={handleSubmit}>Signin</button>
	</div> -->
</main>

<style>
	/* Add your styles here */
	.input-group {
		margin-bottom: 15px;
	}

	.input-group input {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.input-group .icon {
		margin-right: 10px;
	}

	.error-message {
		color: #ff0000;
		font-size: 14px;
		margin-top: 5px;
	}

	.button-group {
		text-align: center;
	}

	.button-group button {
		padding: 10px 20px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>

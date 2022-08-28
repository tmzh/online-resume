<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let value = '';
  export let label = '';
</script>

<label for="first-name" class="block text-sm mt-2 font-medium text-gray-700">{label}</label>
<input
  type="text"
  name="name"
  id="name"
  bind:value
  autocomplete="name"
  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
/>

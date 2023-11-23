<script>
    let dates;

    export {dates};
  </script>

<input
    type="date"
    bind:value={dates}
    placeholder="Select date"
  />

  <style lang="postcss">
    input {
        @apply border border-gray-300 p-2 rounded-md w-48
    }
  </style>
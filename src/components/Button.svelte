<script lang="ts">
  let className: string = ''
  export { className as class }
  export let ghosted: boolean = false
  export let tag: string = 'a'
  const BASE_CLASSES = 'inline-block h-6 px-2 appearance-none text-base leading-tight text-center whitespace-nowrap border-2'
</script>

<svelte:element
  this={tag}
  {...$$props}
  class={`button ${BASE_CLASSES} ${className} ${ghosted && 'button--ghosted'}`}
>
  <slot />
</svelte:element>

<style lang="postcss" is:global>
  .button {
    border-image: url('/images/unselected.svg') 2 stretch;

    &:active {
      @apply bg-primary;

      border-image: url('/images/selected.svg') 2 stretch;
    }

    &--ghosted {
      @apply opacity-30;
    }
  }
</style>

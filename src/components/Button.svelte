<script lang="ts">
  let className: string
  export let href: string
  export { className as class }
</script>

<a {href} class="button">
  <slot />
</a>

<style lang="postcss">
  .button {
    @apply inline-block h-6 px-2 appearance-none text-base leading-tight text-center whitespace-nowrap border-2;

    border-image: url('/images/unselected.svg') 2 stretch;

    &:active {
      @apply bg-blue;

      border-image: url('/images/selected.svg') 2 stretch;
    }
  }
</style>

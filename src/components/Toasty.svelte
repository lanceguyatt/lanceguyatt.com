<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import toastyMp3 from '/audio/toasty.mp3'
  import toastyImage from '/images/toasty.png'

  let toasty: boolean = false
  let konamiCodeArray: Array<string> = []
  const konamiCodeKey: string =
    'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyA'

  onMount(() => {
    const toastyAudio = <HTMLVideoElement>(
      document.getElementById('js-toasty-audio')
    )
    
    document.addEventListener('keydown', event => {
      konamiCodeArray.push(event.code)
      if (konamiCodeArray.toString().indexOf(konamiCodeKey) >= 0) {
        toastyAudio.load()
        toastyAudio.play()
        konamiCodeArray = []
        toasty = true
      }
    })
  })
</script>

<input
  type="checkbox"
  bind:checked={toasty}
  class={`sr-only ${
    toasty ? 'bg-red' : 'bg-primary'
  } appearance-none w-4 h-4 block`}
  value="Toasty"
>

{#if toasty}
  <img
    src={toastyImage}
    alt="Toasty"
    class="toasty"
    in:fly={{ x: 200, duration: 300 }}
    out:fly={{ delay: 200, x: 200, duration: 400 }}
    on:introend={() => (toasty = false)}
  />
{/if}

<audio id="js-toasty-audio">
  <source src={toastyMp3} type="audio/mp3" />
</audio>

<style lang="postcss">
  .toasty {
    @apply fixed bottom-0 right-0 z-10 h-[12.5rem] w-[12.5rem];
  }
</style>

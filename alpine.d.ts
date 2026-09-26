// import 'alpinejs'

declare global {
  interface Window {
    Alpine: typeof AlpineType
  }

  // Extend the Alpine component type to include $root
  // interface AlpineComponent<D = {}> {
  //   $root: HTMLElement
  //   $el: HTMLElement
  //   $refs: Record<string, HTMLElement>
  //   $watch(property: string, callback: (value: any) => void): void
  //   init?(): void
  // }
}

declare module 'alpinejs' {
  interface Stores {
    document: {
      name: string
    }
  }
}

/// <reference path="../.astro/types.d.ts" />

declare global {
  namespace JSX {
    // type Element = astroHTML.JSX.Element // We want to use this, but it is defined as any.
    type Element = HTMLElement;
  }
}

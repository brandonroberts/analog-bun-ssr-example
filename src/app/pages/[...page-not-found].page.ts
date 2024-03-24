import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
      </a>
    </div>

    <h2>Page Not Found</h2>

    <h3>Oops!</h3>
  `
})
export default class PageNotFoundComponent {}

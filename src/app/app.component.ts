import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  colorScheme: string = 'light';
  previousUrl: string;

  constructor(private renderer: Renderer2, private router: Router) {
    this.renderer.addClass(document.body, this.colorScheme);

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1);
          if (currentUrlSlug) {
            currentUrlSlug = 'page-' + currentUrlSlug.split('?')[0];
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });

  }

}

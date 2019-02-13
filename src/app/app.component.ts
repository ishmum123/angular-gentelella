import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'gentelella';

  private readonly scripts = [
    'assets/jquery/jquery.min.js',
    'assets/bootstrap/js/bootstrap.min.js',
    'assets/theme/js/custom.min.js'
  ];

  private readonly styles = [
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/font-awesome/css/font-awesome.min.css',
    'assets/theme/css/custom.min.css'
  ];

  ngAfterViewInit(): void {
    this.addStyles();
    this.addScripts();
  }

  private addStyles() {
    const head = document.getElementsByTagName('head')[0];

    this.styles.forEach(style => {
      const styleTag: any = document.createElement('link');
      styleTag.rel = 'stylesheet';
      styleTag.href = style;
      head.appendChild(styleTag);
    });
  }

  private addScripts(body?: Element, i = 0) {
    body = body || document.getElementsByTagName('body')[0];

    setTimeout(() => {
      const script = this.scripts[i];

      if (script) {
        const scriptTag: any = document.createElement('script');
        scriptTag.src = script;
        body.appendChild(scriptTag);
        this.addScripts(body, i + 1);
      }
    }, 30);
  }

}

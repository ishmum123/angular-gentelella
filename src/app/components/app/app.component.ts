import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'gentelella';

  private readonly styles = [
    'assets/gentelella/bootstrap/css/bootstrap.min.css',
    'assets/gentelella/font-awesome/css/font-awesome.min.css',
    'assets/gentelella/nprogress/nprogress.css',
    'assets/gentelella/iCheck/green.css',
    'assets/gentelella/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css',
    'assets/gentelella/bootstrap-daterangepicker/daterangepicker.css',
    'assets/gentelella/theme/css/custom.min.css'
  ];

  private readonly scripts = [
    'assets/gentelella/jquery/jquery.min.js',
    'assets/gentelella/bootstrap/js/bootstrap.min.js',
    'assets/gentelella/fastclick/fastclick.js',
    'assets/gentelella/Chart/Chart.min.js',
    'assets/gentelella/gauge/gauge.min.js',
    'assets/gentelella/skycons/skycons.js',
    'assets/gentelella/Flot/jquery.flot.js',
    'assets/gentelella/Flot/jquery.flot.pie.js',
    'assets/gentelella/Flot/jquery.flot.time.js',
    'assets/gentelella/Flot/jquery.flot.stack.js',
    'assets/gentelella/Flot/jquery.flot.resize.js',
    'assets/gentelella/Flot/jquery.flot.orderBars.js',
    'assets/gentelella/Flot/jquery.flot.spline.min.js',
    'assets/gentelella/Flot/curvedLines.js',
    'assets/gentelella/DateJS/date.js',
    'assets/gentelella/nprogress/nprogress.js',
    'assets/gentelella/bootstrap-progressbar/bootstrap-progressbar.min.js',
    'assets/gentelella/iCheck/icheck.min.js',
    'assets/gentelella/jqvmap/jquery.vmap.js',
    'assets/gentelella/jqvmap/jquery.vmap.world.js',
    'assets/gentelella/jqvmap/jquery.vmap.sampledata.js',
    'assets/gentelella/moment/moment.min.js',
    'assets/gentelella/bootstrap-daterangepicker/daterangepicker.js',
    'assets/gentelella/theme/js/custom.min.js'
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

    const script = this.scripts[i];

    if (script) {
      const scriptTag: any = document.createElement('script');
      scriptTag.src = script;
      scriptTag.onload = () => this.addScripts(body, i + 1);
      body.appendChild(scriptTag);
    }
  }

}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './component/app/app.config';
import { AppComponent } from './component/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

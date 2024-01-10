import { NgModule } from '@angular/core';

import { AppFooter } from './footer/footer.component';
import { AppHeader } from './header/header.component';
import { AppIcon } from './icon/icon.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppFooter,
    AppHeader,
    AppIcon
  ],
  exports:[
    AppFooter,
    AppHeader,
    AppIcon
  ],
  imports:[BrowserModule]

})
export class SharedModule { }

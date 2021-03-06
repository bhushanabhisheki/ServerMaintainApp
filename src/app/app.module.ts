import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHightlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    DirectivesComponent,
    BasicHightlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [DirectivesComponent],
})
export class AppModule {}

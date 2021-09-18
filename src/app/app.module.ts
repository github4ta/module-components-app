import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simple/simple.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { HookComponent } from './components/lifecycle/hook/hook.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    LifecycleComponent,
    HookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

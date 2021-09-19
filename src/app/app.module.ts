import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simple/simple.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { HookComponent } from './components/lifecycle/hook/hook.component';
import { MetadataComponent } from './components/metadata/metadata.component';
import { ChangeDetectionStrategyComponent } from './components/metadata/change-detection-strategy/change-detection-strategy.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { InputoutputComponent } from './components/inputoutput/inputoutput.component';
import { PersonComponent } from './components/inputoutput/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    LifecycleComponent,
    HookComponent,
    MetadataComponent,
    ChangeDetectionStrategyComponent,
    DatabindingComponent,
    InputoutputComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { DemosComponent } from './components/demos/demos/demos.component';
import { JungleFighterComponent } from './components/demos/demos/jungle-fighter/jungle-fighter/jungle-fighter.component';
import { ConstructionComponent } from './components/construction/construction/construction.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    ProjectComponent,
    DemosComponent,
    JungleFighterComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

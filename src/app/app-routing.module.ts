import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './components/demos/demos/demos.component';
import { JungleFighterComponent } from './components/demos/demos/jungle-fighter/jungle-fighter/jungle-fighter.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: "", component: MainpageComponent },
  { path: "projects", component : ProjectComponent},
  { path: "demos", component : DemosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

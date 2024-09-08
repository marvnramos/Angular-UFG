import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Part1Component} from "./pages/part1/part1.component";
import {Part2Component} from "./pages/part2/part2.component";

const routes: Routes = [
  {path: 'pages/part1', component: Part1Component},
  {path: 'pages/part2', component: Part2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { DanceComponent } from './dance/dance.component'
import { ClassComponent } from './class/class.component'
import { VideoComponent } from './video/video.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dance', component: DanceComponent},
  {path: 'class', component: ClassComponent},
  {path: 'video', component: VideoComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

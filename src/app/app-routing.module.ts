import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'a-propos', component: AboutComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'blog', component: ArticlesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, ProjectsComponent, ArticlesComponent, ContactComponent]

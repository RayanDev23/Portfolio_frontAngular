import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SkillsComponent } from './skills/skills';
import { LoginComponent } from './login/login';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
    { path: 'blogs', component: BlogsComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

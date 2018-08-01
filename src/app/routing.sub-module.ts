import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { ContentComponent } from "./view/content/content.component";
import { HomeComponent } from "./view/content/home/home.component";
import { StudentComponent } from "./view/content/student/student.component";
const appRoutes: Routes = [
    {
        path: '', component: ContentComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'student', component: StudentComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
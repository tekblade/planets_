import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { FiveComponent } from './five/five.component';
import { RootFiveComponent } from './root-five/root-five.component';
import { RootTenComponent } from './root-ten/root-ten.component';
import { TenComponent } from './ten/ten.component';



const routes: Routes = [   
  {path: '', redirectTo:'/planets', pathMatch:'full'}, 
  {path:'details/:id', component:DetailsComponent},
  {path: 'planets', component: MainComponent,children:[
    {path:'five',component:RootFiveComponent,children:[      
      {path:'',redirectTo:"/planets/five/1", pathMatch: 'full' },
      {path:':id',component:FiveComponent}
    ]},
    {path:'ten',component:RootTenComponent,children:[
      {path:'',redirectTo:"/planets/ten/1", pathMatch: 'full' },
      {path:':id',component:TenComponent}
    ]}    
  ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

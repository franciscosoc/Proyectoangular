import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcustomersComponent } from './customers/components/listcustomers/listcustomers.component';
import { ListAccountsComponent } from './accounts/components/list-accounts/list-accounts.component';


const routes: Routes = [{path:'',component: ListcustomersComponent},

{path:'listCuentas/:clienteId', component: ListAccountsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcustomersComponent } from './customers/components/listcustomers/listcustomers.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './customers/components/form/form.component';
import { DetalleComponent } from './customers/components/detalle/detalle.component';
import { HeaderComponent } from './core/header/header.component';
import { ListAccountsComponent } from './accounts/components/list-accounts/list-accounts.component';






const routesApp:Routes=[


{path: 'customers/form', component:FormComponent},
{path: 'customers/form', component:FormComponent},
{path: 'customers/form/:id', component:FormComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    ListcustomersComponent,
    FormComponent,
    DetalleComponent,
    HeaderComponent,
    ListAccountsComponent,
  



  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routesApp),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

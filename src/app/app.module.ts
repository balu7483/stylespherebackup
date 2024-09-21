import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './navbar/navbar.component';
import { 
	IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
	IgxToggleModule,
  IgxLayoutModule,
 } from "igniteui-angular";
 import { IgxInputGroupModule } from "igniteui-angular";
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UserComponent } from './components/user/user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UseraddComponent } from './components/useradd/useradd.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { EdituserComponent } from './components/edituser/edituser.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangepasswordComponent } from './componenets/changepassword/changepassword.component';
import { ProductComponent } from './components/product/product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './componenets/add-product/add-product.component';



 


//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
    UseraddComponent,
    SignupComponent,
    EdituserComponent,
    ProfileComponent,
    ChangepasswordComponent,
    ProductComponent,
    EditProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule,
  IgxInputGroupModule,
  HttpClientModule,
  MatTableModule,
  FontAwesomeModule,
  NgxSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
	IgxToggleModule,
  IgxLayoutModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

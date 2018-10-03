import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToBuyComponent } from './to-buy/to-buy.component';
import { ContactComponent } from './contact/contact.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivatePageComponent } from './private-page/private-page.component';

// Pipe
import { FilterPipe } from './pipes/filter.pipe';
// Service
import{ AuthService } from './services/auth.service'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToBuyComponent,
    ContactComponent,
    ShopingCartComponent,
    MainComponentComponent,
    SearchComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    PrivatePageComponent
 
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
 
  ],
  providers: [
    appRoutingProviders,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RealizationComponent } from './pages/realization/realization.component';
import { OfferComponent } from './pages/offer/offer.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { IndividualComponent } from './pages/individual/individual.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'onas', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'technologia', component: TechnologyComponent},
  { path: 'oferta', component: OfferComponent},
  { path: 'oferta/catalog', component: CatalogComponent},
  { path: 'oferta/realizacja', component:RealizationComponent},
  { path: 'oferta/indywidualna', component: IndividualComponent},

  { path: '**', redirectTo: '', pathMatch: 'full' }, // ! place this line always as last item !
];

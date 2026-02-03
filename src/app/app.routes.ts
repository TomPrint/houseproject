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
import { ProcesComponent } from './pages/proces/proces.component';
import { AvaiableComponent } from './pages/avaiable/avaiable.component';
import { VirtualtourComponent } from './pages/virtualtour/virtualtour.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'onas', component: AboutComponent },
  { path: 'proces', component: ProcesComponent },
  { path: 'kontakt', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'technologia', component: TechnologyComponent},
  { path: 'oferta', component: OfferComponent},
  { path: 'finansowanie', component: CatalogComponent},
  { path: 'jaktodziala', component:RealizationComponent},
  { path: 'wnetrza', component: IndividualComponent},
  { path: 'dostepne', component: AvaiableComponent},
  { path: 'virtualtour', component: VirtualtourComponent},

  { path: '**', redirectTo: '', pathMatch: 'full' }, // ! place this line always as last item !
];

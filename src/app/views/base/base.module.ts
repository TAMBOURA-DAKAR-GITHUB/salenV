// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



// Forms Component
import { FormsComponent } from './forms.component';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';
import {NgxPaginationModule} from 'ngx-pagination'
import { ModalModule } from 'ngx-bootstrap/modal';



// import { SwitchesComponent } from './switches.component';
// import { TablesComponent } from './tables.component';

// // Tabs Component
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { TabsComponent } from './tabs.component';

// // Carousel Component
// import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { CarouselsComponent } from './carousels.component';



// // Dropdowns Component
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// // Pagination Component
// import { PaginationModule } from 'ngx-bootstrap/pagination';
// import { PopoversComponent } from './popovers.component';

// // Popover Component
// import { PopoverModule } from 'ngx-bootstrap/popover';
// import { PaginationsComponent } from './paginations.component';

// // Progress Component
// import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
// import { ProgressComponent } from './progress.component';

// // Tooltip Component
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { TooltipsComponent } from './tooltips.component';

// // navbars
// import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { ListeMairieComponent } from './liste-mairie/liste-mairie.component';
import { ModifierregionComponent } from './modifierregion/modifierregion.component';
import { ModifiercercleComponent } from './modifiercercle/modifiercercle.component';
import { ModifiercommuneComponent } from './modifiercommune/modifiercommune.component';
import { ModifiermairieComponent } from './modifiermairie/modifiermairie.component';
import { ModifierutilisateurComponent } from './modifierutilisateur/modifierutilisateur.component';
import { PayementComponent } from './payement/payement.component';
import { MarcherComponent } from './marcher/marcher.component';
import { ModifiermarcherComponent } from './modifiermarcher/modifiermarcher.component';
import { ModifiermarchandComponent } from './modifiermarchand/modifiermarchand.component';
import { ModifierplaceComponent } from './modifierplace/modifierplace.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    CollapseModule.forRoot(),
    NgxPaginationModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    FormsComponent,
    CollapsesComponent,
    ListeMairieComponent,
    ModifierregionComponent,
    ModifiercercleComponent,
    ModifiercommuneComponent,
    ModifiermairieComponent,
    ModifierutilisateurComponent,
    PayementComponent,
    MarcherComponent,
    ModifiermarcherComponent,
    ModifiermarchandComponent,
    ModifierplaceComponent,

  
  ],
  exports :[NgxPaginationModule],
})
export class BaseModule { }

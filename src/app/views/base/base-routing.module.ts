import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormsComponent } from './forms.component';
import { CollapsesComponent } from './collapses.component';
import { ListeMairieComponent } from './liste-mairie/liste-mairie.component';
import { PayementComponent } from './payement/payement.component';
import { MarcherComponent } from './marcher/marcher.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      // {
      //   path: 'cards',
      //   component: CardsComponent,
      //   data: {
      //     title: 'Cards'
      //   }
      // },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        },
        
      },
      {
        path: 'listemairie',
        component: ListeMairieComponent,
        data: {
          title: 'Mairie'
        },
        
      },
      {
        path: 'payement',
        component: PayementComponent,
        data: {
          title: 'Payement'
        },
        
      },
      {
        path: 'marcher',
        component: MarcherComponent,
        data: {
          title: 'Marcher'
        },
        
      },
        

      // {
      //   path: 'switches',
      //   component: SwitchesComponent,
      //   data: {
      //     title: 'Switches'
      //   }
     // },
      // {
      //   path: 'tables',
      //   component: TablesComponent,
      //   data: {
      //     title: 'Tables'
      //   }
      // },
      // {
      //   path: 'tabs',
      //   component: TabsComponent,
      //   data: {
      //     title: 'Tabs'
      //   }
      // },
      // {
      //   path: 'carousels',
      //   component: CarouselsComponent,
      //   data: {
      //     title: 'Carousels'
      //   }
      // },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      // {
      //   path: 'paginations',
      //   component: PaginationsComponent,
      //   data: {
      //     title: 'Pagination'
      //   }
      // },
      // {
      //   path: 'popovers',
      //   component: PopoversComponent,
      //   data: {
      //     title: 'Popover'
      //   }
      // },
      // {
      //   path: 'progress',
      //   component: ProgressComponent,
      //   data: {
      //     title: 'Progress'
      //   }
      // },
      // {
      //   path: 'tooltips',
      //   component: TooltipsComponent,
      //   data: {
      //     title: 'Tooltips'
      //   }
      // },
      // {
      //   path: 'navbars',
      //   component: NavbarsComponent,
      //   data: {
      //     title: 'Navbars'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}

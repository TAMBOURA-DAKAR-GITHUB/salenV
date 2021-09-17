import { Component, OnInit } from '@angular/core';
import { MairieserviceService } from '../service/mairieservice.service';
import { MarcherService } from '../service/marcher.service';

@Component({
  selector: 'app-marcher',
  templateUrl: './marcher.component.html',
  styleUrls: ['./marcher.component.scss']
})
export class MarcherComponent implements OnInit {

  isCollapsedmarcher: boolean = true;
  isCollapsedmarchand: boolean = true;
  isCollapsedplace: boolean = true;

  public listeMarcher : any;
  public listeMairie : any

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  constructor(private marcherservice: MarcherService, private mairieservice: MairieserviceService) { }

  ngOnInit(): void {
     // ***************liste marcher ********
     this.marcherservice.getMarcher()
     .subscribe(data =>{
       this.listeMarcher=data;
      // console.log(this.listeMarcher)
     }, error=>{
       console.log(error);
       
     });

     this.mairieservice.getMairie()
     .subscribe(data =>{
       this.listeMairie=data;
       console.log(this.listeMairie)
     }, error=>{
       console.log(error);
       
     });
  }

  onAddMarcher(donnee : any){

  }

  onUpdateMarcher(listemarcher){

  }

  onDeleteMarcher(listemarcher){

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../../../security/service/connexion.service';
import { PayementService } from '../service/payement.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MairieserviceService } from '../service/mairieservice.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {

  public listeMarchandByUtilisateur: any;
  public listePlaceByMarchand: any;
  public idmarchandAtuel: any;
  public listePayement: any;
  public utilisateurvirtuel: number
  public facture: any
  public facturepayemeny :any
  public totalfac : any
  public place :any

  idplaceselected: number[] = [];

  constructor(private payementservice: PayementService, private router: Router, private connexion: ConnexionService , private m : MairieserviceService) { }

  ngOnInit(): void {
    console.log(this.connexion.iduser)

    this.payementservice.getAllMarchandByUtilisateur(this.connexion.iduser)
      .subscribe(data => {
        this.listeMarchandByUtilisateur = data
      }, error => {
        console.log(error);

      });
  }

  getIdPlaceSelectionner(ev: any, id: number) {
    if (ev.target.checked) {
      //console.log(id);
      this.idplaceselected.push(id);
    } else {
      this.idplaceselected = this.idplaceselected.filter(m => m != id);
    }

    //console.log(this.idplaceselected)

  }
  onListePlaceByMarchand(idMarchand: number) {
    //console.log(idMarchand)
    this.idmarchandAtuel = idMarchand;
    this.payementservice.getAllPlaceByMarchand(idMarchand)
      .subscribe(data => {
        this.listePlaceByMarchand = data
        //  console.log(this.listePlaceByMarchand)
      }, error => {
        console.log(error);

      });
  }

  onAddPayement() {
    this.utilisateurvirtuel = this.connexion.iduser;
    this.payementservice.addPayement(this.payementservice.host + "/addPayement", this.idmarchandAtuel, this.utilisateurvirtuel, this.idplaceselected).
      subscribe(data => {
        this.listePayement = data;
       // this.router.navigateByUrl("/base");
        // Swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'Payement affecter avec Success !!!',
        //   showConfirmButton: false,
        //   timer: 1500
        // })
      //  this.openPDF();
        
        this.getFacture();
       
      }, error => {
        console.log(error);

      });
    
    // console.log(donnee.utilisateur);
    // console.log(this.idplaceselected);

  }
   getFacture(){
    this.payementservice.getFacture(this.idmarchandAtuel,this.connexion.iduser)
    .subscribe(data => {
      this.facturepayemeny = data;
      this.getAllPlace();
      console.log(this.facturepayemeny)
      this.getTotal();
      
    }, error => {
      console.log(error);

    });
   }
// la methode pour calculer la somme total de la facture 
   getTotal() {
    let total = 0;
    for (var i in this.facturepayemeny) {
        if (this.facturepayemeny[i].montantPayement) {
            total += this.facturepayemeny[i].montantPayement;
            this.totalfac = total;
            //console.log("total : "+this.totalfac)
        }
    }
    return total;
}

// la methode pour recuperer les places qui sont payer
getAllPlace() {
  //let total = 0;
  for (var i in this.facturepayemeny) {
      if (this.facturepayemeny[i].place) {
          this.place =  this.facturepayemeny[i].place.numeroPlace;
          console.log("les places  "+ this.place)
         // this.totalfac = total;
          //console.log("total : "+this.totalfac)
      }
  }
  return this.place;
}


  // public openPDF():void {
  //   this.payementservice.getFacture(this.idmarchandAtuel,this.connexion.iduser)
  //   .subscribe(data => {
  //     console.log(data)
     
  //       //let test= JSON.stringify(data[0].libelleMairie)
  //     var doc = new jsPDF('p', 'cm', 'a7');
  //     doc.setFont('PTSans');
  //     doc.setFontSize(10);
  //     doc.text( "******information payement******" ,1, 1)
  //    doc.text( `${data[0].datePayement}` ,1, 2)
  //    doc.text( `${data[0].montantPayement}` ,1, 3)
  //    doc.text( `${data[0].marchand.nomMarchand}` ,1, 4)
  //    doc.text( `${data[0].marchand.telephoneMarchand}` ,1, 5)
  //    doc.text( `${data[0].marchand.marcher.libelleMarcher}` ,1, 6)
  //     doc.save('Test.pdf');
  //     }, error => {
  //       console.log(error);

  //     });
  

  // }
  imprimer(){
   var page = document.getElementById('page');
   html2canvas(page).then(canvas => {
    var imgWidth = 200;
    var imgHeight = 200
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p', 'pt', 'a7',true);
   // pdf.setFontSize(100);
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('salen.pdf');
    //this.router.navigateByUrl("/base/payement");
  });

  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-principal-product',
  templateUrl: './section-principal-product.organism.html',
  styleUrls: ['./section-principal-product.organism.scss']
})
export class SectionPrincipalProductOrganism {
  @Input() dataPrincipalProduct = {
    data : [
      {
        urlImgPrincipalProduct : "",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{console.log("Clciksss")}
      }
    ]
  }

  @Input() dataCardProduct = {
    data : [
      {
        urlImgPrincipalProduct : "",
        textTitle : "",
        textDescription :"",
        textValue : "",
        clickProduct : () =>{}
      }
    ]
  }
}

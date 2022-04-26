import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-importar-brasilia',
  templateUrl: './importar-brasilia.component.html',
  styleUrls: ['./importar-brasilia.component.scss']
})
export class ImportarBrasiliaComponent implements OnInit {

  UrlSemob: string = "https://www.sistemas.dftrans.df.gov.br";

  resto = "/horario/linha/numero/0.018";

  resto2 = "/linha/find/0/1000";

  codigoLinha: string = "";

  loadingData: boolean = false;

  // RestClient Client = new RestClient(UrlSemob + "/linha/find/0/1000");

  // UrlSemob + "/horario/linha/numero/" + CodigoLinha

  adminTools = [
    {
      label: 'Importar de outro projeto',
      icon: 'fas fa-cloud-download-alt',
      link: '/import-from-project',
      active: true,
      key: 'KMXB8J5T'
    }
  ]

  constructor(public json: JsonService) {

  }

  ngOnInit(): void {



  }

  clickando() {
    console.log('miau miauuu');
    this.loadingData = true;

    this.json.getJson(`https://www.sistemas.dftrans.df.gov.br${this.resto2}`).subscribe((res: any) => {
      console.log(res);



    })

    setTimeout(() => {
      this.loadingData = false;
    }, 500);


  }

}

import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: ActivatedRoute) {

  }

  ngOnInit() {
    /*this.router.params.suscribe( params => {
      console.log(params['termino']);
      this.HeroesService.buscarHeroes(params['termino']);
    })*/
  }

  verHeroe(termino: string) {
    //this.router.navigate(['/search', termino]);
  }

}

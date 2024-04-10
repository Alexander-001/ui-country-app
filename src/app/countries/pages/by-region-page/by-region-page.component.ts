import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  searchByRegion(term: string): void {
    this.countryService.searchRegion(term).subscribe((resp) => {
      this.countries = resp;
    });
  }
}
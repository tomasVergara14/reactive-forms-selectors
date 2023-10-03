import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, filter, map, of } from 'rxjs';

import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1'

  private _regions: Region[] = [ Region.Africa, Region.America, Region.Asia, Region.Europe, Region.Oceania ];

  constructor(
    private http: HttpClient
  ) { }

  get regions(): Region[] {
    return [ ...this._regions ];
  }

  getCountriesByRegion( region: Region ): Observable<SmallCountry[]>{

    if( !region ) return of([]);

    const url: string = `${ this.baseUrl }/region/${ region }?fields=cca3,name,borders`

    return this.http.get<Country[]>(url)
     .pipe(
      map( countries => countries.map( country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      }) ))
     )
  }  

  getCountryByAlphaCode( alphaCode: string ): Observable<SmallCountry> {

    console.log(alphaCode)

    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`

    return this.http.get<Country>(url)
    .pipe(
      map( country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    )
  }
}

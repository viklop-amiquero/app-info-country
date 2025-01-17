import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Country } from '../interfaces/countries.interface'
import { catchError, Observable, of, map } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class CountriesService {
    private _apiUrl = 'https://restcountries.com/v3.1'
    constructor(private _http: HttpClient) {}

    searchCapital(data: string): Observable<Country[]> {
        const url = `${this._apiUrl}/capital/${data}`
        return this._http.get<Country[]>(url).pipe(catchError(() => of([])))
    }

    searchCountry(data: string): Observable<Country[]> {
        const url = `${this._apiUrl}/name/${data}`
        return this._http.get<Country[]>(url).pipe(catchError(() => of([])))
    }

    searchRegion(data: string): Observable<Country[]> {
        const url = `${this._apiUrl}/region/${data}`
        return this._http.get<Country[]>(url).pipe(catchError(() => of([])))
    }

    searchById(id: string): Observable<Country | null> {
        const url = `${this._apiUrl}/alpha/${id}`

        return this._http.get<Country[]>(url).pipe(
            map((countries) => (countries.length > 0 ? countries[0] : null)),
            catchError(() => of(null))
        )
    }
}

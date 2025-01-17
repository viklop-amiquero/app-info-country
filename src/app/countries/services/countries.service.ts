import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Country } from '../interfaces/countries.interface'
import { catchError, Observable, of } from 'rxjs'

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
}

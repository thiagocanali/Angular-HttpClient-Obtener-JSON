import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class JsonService {

    constructor(private http: HttpClient) { }

    getJson(url: string) {
        return this.http.get(url);
    }
}

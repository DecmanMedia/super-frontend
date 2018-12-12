import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from "@angular/http"
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AppService {

    backendUrl = "http://localhost:3000";
    pipe = 0;

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(`${this.backendUrl}/product/`);
    }
}
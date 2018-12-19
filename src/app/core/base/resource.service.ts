import { Resource } from './resource.model';
import { Serializer } from './interfaces/serializer.interface';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Injectable} from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJuYmYiOjE1NDUxNjY4OTIsImV4cCI6MTU3NjcwMjg5Mn0.U5R0nElNH-1pqNtpFAK_YB40J2bymHYIlYzp-kVQpC4'
  })};

@Injectable({
  providedIn: 'root'
})
export class ResourceService<T extends Resource> {
  constructor(
      private httpClient: HttpClient,
      private url: String,
      private endpoint: String,
      private serializer: Serializer) {}

    public create(item: T): Observable<T> {

      return this.httpClient
        .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item),httpOptions).pipe(
          map(data => this.serializer.fromJson(data) as T)
        );
    }

    public update(item: T, id: Number): Observable<T> {
      return this.httpClient
        .put<T>(`${this.url}/${this.endpoint}/${id}`, this.serializer.toJson(item),httpOptions).pipe(
          map(data => this.serializer.fromJson(data) as T)
        );
    }

    read(id: Number): Observable<T> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}/${id}`,httpOptions).pipe(
          map((data: any) => this.serializer.fromJson(data) as T)
        );
    }

    list(): Observable<T[]> {
          return this.httpClient
            .get(`${this.url}/${this.endpoint}`,httpOptions)
            .pipe(map((data: any) => this.convertData(data))
        );
    }

    delete(id: Number) {
      return this.httpClient
        .delete(`${this.url}/${this.endpoint}/${id}`,httpOptions);
    }

    private convertData(data: any): T[] {
      return this.serializer.fromJsonList(data, 'processedObjects');
    }
}

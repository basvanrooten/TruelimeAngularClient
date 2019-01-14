import { Resource } from '../base/resource.model';
import { Serializer } from '../base/interfaces/serializer.interface';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class ResourceService<T extends Resource> {
  constructor(
      protected httpClient: HttpClient,
      protected url: String,
      protected endpoint: String,
      protected httpHeaders: HttpHeaders,
      protected serializer: Serializer) {}

      protected httpOptions = { headers: this.httpHeaders };

    public create(item: T): Observable<T> {
      return this.httpClient
        .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item), this.httpOptions).pipe(
          map(data => this.serializer.fromJson(data) as T)
        );
    }

    public createWithParameter(userId: String, item: any): Observable<T> {
      return this.httpClient
        .post<T>(`${this.url}/${this.endpoint}/${userId}`, this.serializer.toJson(item), this.httpOptions).pipe(
          map(data => this.serializer.fromJson(data) as T)
        );
    }

    public update(item: T, id: Number): Observable<T> {
      return this.httpClient
        .put<T>(`${this.url}/${this.endpoint}/${id}`, this.serializer.toJson(item), this.httpOptions).pipe(
          map(data => this.serializer.fromJson(data) as T)
        );
    }

    read(id: Number): Observable<T> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}/${id}`, this.httpOptions).pipe(
          map((data: any) => this.serializer.fromJson(data) as T)
        );
    }

    list(): Observable<T[]> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}`, this.httpOptions)
        .pipe(map((data: any) => this.convertData(data))
        );
    }

    listSpecific(id: any): Observable<T[]> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}/${id}`, this.httpOptions)
        .pipe(map((data: any) => this.convertData(data))
        );
    }

    delete(id: Number) {
      return this.httpClient
        .delete(`${this.url}/${this.endpoint}/${id}`, this.httpOptions);
    }

    private convertData(data: any): T[] {
      console.log(data);
      return this.serializer.fromJsonList(data, 'processedObjects');
    }
}

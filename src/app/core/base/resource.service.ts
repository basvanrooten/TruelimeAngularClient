import { Resource } from '../base/resource.model';
import { Serializer } from '../base/interface/serializer.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class ResourceService<T extends Resource> {
  constructor(
      private httpClient: HttpClient,
      private url: String,
      private endpoint: String,
      private serializer: Serializer) {}

    public create(item: T): Observable<T> {
      return this.httpClient
        .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item)).pipe(
          map(data => this.serializer.fromJson(data) as T)
        );
    }

    public update(item: T, id: Number): Observable<T> {
      return this.httpClient
        .put<T>(`${this.url}/${this.endpoint}/${id}`, this.serializer.toJson(item)).pipe(
          map(data => this.serializer.fromJson(data) as T)
        );
    }

    read(id: Number): Observable<T> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}/${id}`).pipe(
          map((data: any) => this.serializer.fromJson(data) as T)
        );
    }

    list(httpParams: HttpParams): Observable<T[]> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}?${httpParams.toString}`).pipe(
          map((data: any) => this.convertData(data.items))
        );
    }

    delete(id: Number) {
      return this.httpClient
        .delete(`${this.url}/${this.endpoint}/${id}`);
    }

    private convertData(data: any): T[] {
      return data.map(item => this.serializer.fromJson(item));
    }
}

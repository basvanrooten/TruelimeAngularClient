import { Resource } from '../resource.model';

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
  fromJsonList(data: any, key: string): any;
}

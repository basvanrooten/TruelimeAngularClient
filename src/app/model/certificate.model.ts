export class Certificate {
  public id: number;
  public name: string;
  public date: string;
  public validUntil: string;

  constructor(id: number, name: string, date: string, validUntil: string) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.validUntil = validUntil;
  }
}

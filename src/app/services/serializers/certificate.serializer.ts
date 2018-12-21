import { Certificate } from '../../models/certificate.model';

export class CertificateSerializer {
  fromJson(json: any): Certificate {
    const certificate = new Certificate();
    certificate.id = json.id;
    certificate.name = json.name;
    certificate.date = json.date;
    certificate.validUntil = json.validUntil;

    return certificate;
  }

  toJson(certificate: Certificate): any {
    return {
      id: certificate.id,
      name: certificate.name,
      date: certificate.date,
      validUntil: certificate.validUntil
    };
  }

  fromJsonList(json: any, key: string): Certificate[] {
    const certificates: Certificate[] = [];

    json[key].forEach((element: any) => {
      certificates.push(this.fromJson(element));
    });

      return certificates;
    }
  }

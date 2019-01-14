import { Certificate } from '../../models/certificate.model';

export class UserCertificateSerializer {
  fromJson(json: any): Certificate {
    const certificate = new Certificate();

    certificate.id = json.certificateId;

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

    json.forEach((element: any) => {
      certificates.push(this.fromJson(element));
    });

    return certificates;
  }
}

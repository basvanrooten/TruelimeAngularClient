import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CertificateService } from '../../services/certificate.service';
import { UserCertificateService } from '../../services/user-certificate.service';
import { forkJoin } from 'rxjs';
import { Certificate } from 'src/app/models/certificate.model';

@Component({
  selector: 'app-certificate-menu',
  templateUrl: './certificate-menu.component.html',
  styleUrls: ['./certificate-menu.component.css']
})
export class CertificateMenuComponent implements OnInit {
  userCertificateList: any
  certificateCollection: any
  certificateInput: any 
  constructor(private certificateService: CertificateService, private userCertificateService: UserCertificateService) { }

  ngOnInit() {
    this.certificateCollection = [];
    this.certificateInput = [];
    this.userCertificateList = [];
    forkJoin(this.certificateService.list(), this.userCertificateService.list())
    .subscribe(results => {
        this.certificateInput = results[0];
        this.userCertificateList = this.getFullCertificate(this.certificateInput, results[1]);
        this.certificateCollection = this.filterList(this.certificateInput, this.userCertificateList);

    });
  }
  private getFullCertificate(certificateList, userCertificateList) {
    let certificates : Certificate[] = [];
    certificateList.forEach(element => {
      userCertificateList.forEach(certificate => {
            if (element.id == certificate.id) {
                certificates.push(element);
            }
        });
    });
    return certificates;
  };

  onSave(){
    let certificateList = [];

    this.userCertificateList.forEach(element => {
        certificateList.push(element.id);
    });

    this.userCertificateService.updateList({certificateList: certificateList}).subscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.onSave();
  }

  filterList(listToFilter, userCertificateList){

    return listToFilter.filter(certificate =>  
      !userCertificateList.reduce((acc, userCertificate) => 
          certificate.id == userCertificate.id || acc
        ,false)
    );

  }
}

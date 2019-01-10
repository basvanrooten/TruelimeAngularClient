import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skillMenu',
  templateUrl: './skillMenu.component.html',
  styleUrls: ['./skillMenu.component.css']
})
export class SkillMenuComponent implements OnInit {
  userSkillList: any
  skillCollection: any
  skillInput: any 
  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit() {
    this.skillCollection = []
    this.userSkillList = ["Python", "Backend developer", "Stackoverflow expert"]
    this.skillInput = ["Java", "Python", "Backend developer", "Frontend developer", "C#", "Stackoverflow expert" ]

    this.skillCollection = this.filterList(this.skillInput, this.userSkillList)

    
    // this.skilllist = this.deckservice.getCurrentDeck().deckList

    // this.cardservice.getCards().subscribe(response=>{
    //   this.skillCollection = response
    //   console.log(this.skilllist)
    // },
    // (error: HttpErrorResponse)=>{
    //   if(error.error instanceof Error){
    //     console.log("Client side error");
    //   }else{
    //     console.log("Server side error")
    //   }
    // })
  }

  onSave(){
    // let username = JSON.parse(localStorage.getItem("currentUser")).username;

    // this.deckservice.putDeck(username, this.skillname, this.skilllist)
    // .subscribe(response=>{
    //   this.skilllist = response
    //   this.onBack() 
    // },
    // (error: HttpErrorResponse)=>{
    //   if(error.error instanceof Error){
    //     console.log("Client side error");
    //   }else{
    //     console.log("Server side error")
    //   }
    // })
  }
  onDelete(){
    // let username = JSON.parse(localStorage.getItem("currentUser")).username;

    // this.deckservice.deleteDeck(username, this.skillname)
    // .subscribe(response=>{
    //   console.log(response)
    //   this.onBack() 
    // },
    // (error: HttpErrorResponse)=>{
    //   if(error.error instanceof Error){
    //     console.log("Client side error");
    //   }else{
    //     console.log("Server side error")
    //   }
    // })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        console.log("SkillCollection: ");
      console.log(this.skillCollection);
      console.log("In skillList: ");
      console.log(this.userSkillList);
    }
  }

  filterList(listToFilter, filterList){
    var filteredlist = []
    for(let skill of listToFilter){
      if(!filterList.includes(skill)){
        filteredlist.push(skill)
      }
    }
    return filteredlist
  }
}

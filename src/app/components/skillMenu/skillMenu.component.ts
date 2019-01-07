import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { DeckService } from '../../services/deck.service';
import { HttpErrorResponse } from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
// import { CardService } from '../../services/card.service'

@Component({
  selector: 'app-skillMenu',
  templateUrl: './skillMenu.component.html',
  styleUrls: ['./skillMenu.component.css']
})
export class SkillMenuComponent implements OnInit {
  skilllist: any
  skillCollection: any
  constructor( private router: Router) { }

  ngOnInit() {

    this.skilllist = ["Java", "Python", "Backend developer"]
    this.skillCollection = ["Frontend developer", "C#", "Stackoverflow expert"]
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
                        console.log("SkillCollection: ")
      console.log(this.skillCollection)
      console.log("In skillList: ")
      console.log(this.skilllist)
    }
  }
}

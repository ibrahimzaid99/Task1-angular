import { Component, Output,EventEmitter } from '@angular/core';

@Component({
    selector:"app-Navbar",
     templateUrl:"./NavBar.Component.html",
     styleUrls:['./NavBar.Component.Css']
})

export class NavBarComponent{
    @Output() LoginmyEvent=new EventEmitter();
    
    login(x:any){

        this.LoginmyEvent.emit(x)
    }


}
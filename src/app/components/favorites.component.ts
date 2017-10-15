import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCheckboxModule } from '@angular/material';

@Component({
 selector : 'favorite',
 templateUrl : './favorites.component.html',
 styleUrls : ['./css/home.component.css']
})

export class FavoriteComponent implements OnInit{
  favoriteList : any[];
  name: string;
  sources : string;
  myfavorites : any[] = [];
  checked = true;

constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.sources = params.sources;
    }) 
    this.getSources();
}

saveFavorites(source){
  let postion = this.myfavorites.indexOf(source)
  if (postion != -1) {
      this.myfavorites.splice(postion, 1)
  } else {
    this.myfavorites.push(source)
  }
  console.log(this.myfavorites)
}

saveSources(){
     if (localStorage){
        localStorage.setItem('favorite', this.myfavorites.join(" "));
     }
     console.log(this.myfavorites.join(" "))
  }

  getSources(){
    if (localStorage){
      this.myfavorites = localStorage.getItem('favorite').split(" ");
      console.log(this.myfavorites);
      return this.myfavorites;
    }
  }

  onSelectFavorite(){}
  ngOnInit(){

  }

}
// constructor(public dialog: MatDialog){}
  
// openDialog(){
//     let dialogRef = this.dialog.open(FavoriteDialog, {
//       width: '250px',
//       data: { 
//           favoriteList: this.favoriteList,
//           name : this.name
//         }
//     }) 

//     dialogRef.afterClosed().subscribe(result => {
//         console.log('The dialog was closed');
//         this.favoriteList = result;
//       });

// }

// }

// @Component({
//     selector: 'dialog',
//     templateUrl: 'dialog.html',
//   })
//   export class FavoriteDialog {
  
//     constructor(public dialogRef: MatDialogRef<FavoriteDialog>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  
//     onNoClick(): void {
//       this.dialogRef.close();
//     }
  
//   }

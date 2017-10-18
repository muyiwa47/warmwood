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
  myvalue : any[];
  favoriteObjects : any[] = []

constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.sources = params.sources;
    }) 
    this.generateObjFavorite(this.sources)
    // this.getSources();

}

generateObjFavorite(sources){

    for (var i in sources){
      this.favoriteObjects.push({ 'name' : sources[i], 'status' : false })
    }
    console.log(this.favoriteObjects)
}

checkByDefault(source){
    return this.myfavorites.indexOf(source) !== -1
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
        localStorage.setItem('favorite', JSON.stringify(this.myfavorites));
        console.log("Saved" + localStorage.getItem('favorite'));
        console.log(JSON.parse(localStorage.getItem('favorite')));
      }

  }

  getSources(){
    // if (!localStorage){
    //   console.log(JSON.parse(localStorage.getItem('favorite')));
    // } else {
    //   return null
    // }
    console.log(JSON.parse(localStorage.getItem('favorite')));
  }

  ngOnInit(){
    // if (!localStorage.favorite) {
    //     console.log("No local Storage");
    //        this.generateObjFavorite(this.sources);
    //    } else {
    //   return JSON.parse(localStorage.getItem('favorite'))
    // }
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

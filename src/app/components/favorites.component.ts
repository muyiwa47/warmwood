import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCheckboxModule } from '@angular/material';

@Component({
 selector : 'favorite',
 templateUrl : './favorites.component.html',
 styleUrls : ['./css/home.component.css']
})

export class FavoriteComponent implements OnInit {
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
    this.generateObjFavorite(this.sources);
    this.getSources();
    //this.setPersitentData();
}

// setPersitentData(){
//   for (var i in this.favoriteList) {
//     this.favoriteObjects.map(function(obj){
//        if ((obj.key) == (this.favoriteList[i].key)) {
//          this.favoriteObjects.value = true
//        }
//     })
//   }
//   console.log(this.favoriteObjects)
// }

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

    this.favoriteList = JSON.parse(localStorage.getItem('favorite'));
    console.log(this.favoriteList)


    for (var i in this.favoriteList) {
      for (var j in this.favoriteObjects){
        if (this.favoriteList[i].name == this.favoriteObjects[j].name){
          this.favoriteObjects[j].status = true
        }
      }
    }
    console.log(this.favoriteObjects)
    // console.log(this.favoriteObjects)
    // return this.favoriteList
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

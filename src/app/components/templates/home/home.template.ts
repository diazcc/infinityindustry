import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-template',
  templateUrl: './home.template.html',
  styleUrls: ['./home.template.scss']
})
export class HomeTemplate {
  dataHeader = {
    textTitle :"Infinity Industry",
    urlIconMenu: "assets/icons/menu.svg",
    classHeader :"header",
    classContentHeader :"content-header",
    classIconMenu :"icon-Menu",
    classIconMenu2 :"classIconMenu",
    classHeaderTitulo :"header-titulo",
    clickHeader : () => {this.showMenu()},
    dataNavBar : {
      textOption1 : "Adidas",
      textOption2 : "Nike",
      textOption3 : "Quest",
      textOption4 : "Puma",
      classMenu : "menu--hidden",
      classContentMenu : "content-menu",
      classOptionMmenu : "option-menu"
    }
  }

  classMain = "main";
  showMenu(){
    if (this.dataHeader.dataNavBar.classMenu=="menu--hidden") {
      this.dataHeader.dataNavBar.classMenu="menu";
      this.classMain = "main filterBlur";
      this.dataHeader.urlIconMenu = "assets/icons/close.svg"
    }else{
      this.dataHeader.dataNavBar.classMenu="menu--hidden";
      this.classMain = "main";
      this.dataHeader.urlIconMenu = "assets/icons/menu.svg"
    }
    console.log("Menu activo");
  }
}

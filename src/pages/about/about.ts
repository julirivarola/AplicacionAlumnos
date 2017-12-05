import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

    listStudents : any;

    posts: any;

    constructor(public navCtrl: NavController, public http: Http) {

        this.http.get('http://localhost/app/api/alumnos.php').map(res => res.json()).subscribe(data => {
            this.listStudents = data;
            this.listStudents.forEach(item => {
                item['showDetail'] = true;
             })
        });

    }

    ngOnInit(){
   
    }


    studentSelected(itemSelected){
        this.listStudents.forEach(item => {
            
            if (item['id'] === itemSelected['id'])
                item['showDetail'] = false;
            else
                item['showDetail'] = true;
        })
    }

}

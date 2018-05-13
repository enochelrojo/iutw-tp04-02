import { Component, OnInit }                 from '@angular/core';
import { Router, ActivatedRoute, ParamMap }  from '@angular/router';
import { DaoService }                        from '../dao.service';

@Component({
    selector: 'userdetail',
    templateUrl: './userdetail.component.html',
    styleUrls: ['./userdetail.component.css']
})


export class UserdetailComponent implements OnInit {
    public userData = {};

    constructor(
        private ruta: ActivatedRoute, 
        private router: Router, 
        private dao: DaoService
    ) { }

    ngOnInit() {
    }

}
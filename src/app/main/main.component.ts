import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public filters: string[] = [
        'Needs lessons',
        'Lessons submitted',
        'Ungraded',
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

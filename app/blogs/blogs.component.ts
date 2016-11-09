import {
    Component,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'blogs',
    templateUrl: 'blogs.component.html',
    styleUrls: ['blogs.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({
                transform: 'translateX(0)'
            })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})

export class BlogsComponent implements OnInit {

    ngOnInit() { }
}
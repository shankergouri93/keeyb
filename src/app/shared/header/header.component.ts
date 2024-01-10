import { Component } from "@angular/core";
import { MenuItem } from "./menu-item";

@Component({
    templateUrl: './header.component.html',
    selector: 'app-header',
    styleUrls:['./header.component.scss']
})
export class AppHeader {
    public menu: MenuItem[] = [{
        name: 'Services',
        link: '',
        subMenuItems: [{
            name: 'Strategy',
            subMenuItems: [{
                name: 'Business strategy'
            },
            {
                name: 'Customer strategy'
            },
            {
                name: 'Data & technology strategy'
            }]
        },
        {
            name: 'Cloud',
            subMenuItems: [{
                name: 'Migration & modernization'
            }, {
                name: 'Optimization'
            },
            {
                name: 'Infrastructure'
            }]
        },
        {
            name: 'Digital product building',
            subMenuItems: [{
                name: 'Product engineering'
            },
            {
                name: 'Platform engineering'
            },
            {
                name: 'Data engineering & machine learning'
            }]
        },
        {
            name: 'Digital product building',
            subMenuItems: [{
                name: 'Product engineering'
            },
            {
                name: 'Platform engineering'
            },
            {
                name: 'Data engineering & machine learning'
            }]
        }
        ]
    },
    {
        name: 'Industries'
    },
    {
        name: 'Insights'
    },
    {
        name: 'Who we are'
    },
    {
        name: 'Careers'
    }]
}
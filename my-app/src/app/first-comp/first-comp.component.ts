import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent  {

  countries:any[]=[
    {
      name:'India',
      states:[
        {
          name:'M.P',
          cities:[
           'Indore',
           'Bhopal',
           'Ratlam'
          ]
        },
        {
          name:'U.P',
          cities:[
           'Lucknow',
           'Bihar',
           'ABC'
          ]
        },
        {
          name:'Maha',
          cities:[
           'Mumbai',
           'Pune',
           'XYZ'
          ]
        }

      ]
    },
    {
      name:'Pakistan',
      states:[
        {
          name:'Balochistan',
          cities:[
           'Lahore',
           'JKL',
           'FGH'
          ]
        },
        {
          name:'Islamabaad',
          cities:[
           'UIO',
           'TGV',
           'ERT'
          ]
        },
      

      ]
    },

  ]

}

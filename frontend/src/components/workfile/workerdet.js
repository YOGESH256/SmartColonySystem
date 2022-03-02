import { plumbers } from '../ImageMap' 
import axios from 'axios'

const PlumberServ =[
     'Basin & Sink',
     'Grouting',
     'Bath fitting',
     'Drainage pipes',
     'Toilet',
     'Tap & mixer',
     'Water tank',
     'Moter',
     'Water pipe connections',
     'Water Filter',
     'Home consultation for major work'
]
export const acptdPlumberDet = [
    {
        username:'Plumber A',
        profImg:plumbers.p,
        contactNo:1111111111,
        role:'plumber',
        Services:[PlumberServ[0], PlumberServ[3],PlumberServ[4],],
        description:'near north',
        rating:2
    },
    {
        username:'Plumber B',
        profImg:plumbers.p,
        contactNo:2222222222,
        role:'plumber',
        Services:[PlumberServ[0],PlumberServ[2],],
        description:'near south',
        rating:3
    },
    {
        username:'Plumber ',
        profImg:plumbers.p,
        contactNo:3333333333,
        role:'plumber',
        Services:[PlumberServ[0],PlumberServ[2],PlumberServ[3],PlumberServ[5],],
        description:'near east',
        rating:4
    },
    {
        username:'Plumber ',
        profImg:plumbers.p,
        contactNo:4444444444,
        role:'plumber',
        Services:[PlumberServ[3],PlumberServ[6],PlumberServ[8],PlumberServ[10],],
        description:'near west',
        rating:2.5
    },
    {
        username:'Plumber ',
        profImg:plumbers.p,
        contactNo:5555555555,
        role:'plumber',
        Services:[PlumberServ[7],PlumberServ[9],],
        description:'near north-east',
        rating:1.5
    },
]
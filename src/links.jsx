import {RiBuildingLine} from "react-icons/ri";
import {AiOutlineSetting, AiOutlineBug} from "react-icons/ai"
import {RxDotFilled, RxChevronDown} from "react-icons/rx";
import {BsPerson} from "react-icons/bs";
import {CiStreamOn} from "react-icons/ci";
import Lana from "./assets/Lana.png";
import Drew from "./assets/Drew.png";
import Aliah from "./assets/Aliah.png";
import Eve from "./assets/Eve.png";

export const links = [
    {
        id: 1,
        title: 'Favorites',
        links:[
            {
                id: 1,
                name: 'Versastyle: Toronto',
                drop_down: <RxDotFilled/>,
                icon: null
            }
        ]
    },

    {   id: 2,
        title: 'Dashboard',
        links:[
            {
                id: 2,
                name: 'Event Selection',
                drop_down: <RxChevronDown/>,
                icon: <RiBuildingLine/>
            }
        ]
    },

    {
        id: 3,
        title: 'Global Settings',
        links:[
            {
                id: 3,
                name: 'Settings',
                drop_down: <RxChevronDown/>,
                icon: <AiOutlineSetting />
            }
        ]
    },
]

export const notifications=[
    {
        id: 1,
        title: 'You have a bug that needs to be fixed.',
        para: 'Email@gmail.com',
        icon: <AiOutlineBug/>
    },
    {
        id: 2,
        title: 'New user registered',
        para: '1:23 AM',
        icon: <BsPerson/>
    },
    {
        id: 3,
        title: 'You have a bug that needs to be fixed.',
        para: '0:32 AM',
        icon: <AiOutlineBug/>
    },
    {
        id: 4,
        title: 'Andi Lane sent payment',
        para: 'Yesterday 12:39 AM',
        icon: <CiStreamOn/>
    },
]


export const activities =[
    {
        id: 1,
        detail: 'Added entries to Kelowna',
        para: 'Email@gmail.com',
        img: Eve
    },
    {
        id: 2,
        detail: 'Added students',
        para: '1:32 AM',
        img: Aliah
    },
    {
        id: 3,
        detail: 'Submitted a bug',
        para: 'Submitted a bug',
        img: Drew
    },
    {
        id: 4,
        detail: 'Uploaded music',
        para: 'Last Thursday 3:34 AM',
        img: Aliah
    },
    {
        id: 5,
        detail: 'Deleted entry',
        para: 'Aug 11',
        img: Lana
    },
]
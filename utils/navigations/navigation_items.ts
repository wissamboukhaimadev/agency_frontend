import { Navigationitems, NavigationitemsWithChildren } from "./types/navigation_types";

export const navigation_items_nochildren: Navigationitems[] = [

    {
        id: 1,
        name: "About",
        path: "/about"
    },

    {
        id: 2,
        name: "Contact",
        path: "/contact"
    },


]

export const navigation_items_withchildren: NavigationitemsWithChildren[] = [
    {
        id: 2,
        name: "Services",
        path: "/services",
        children: [
            {
                name: "copywriting",
                path: "#copywriting",
                description: "marketing writing"
            },
            {
                name: "web",
                path: "#web",
                description: "web dev and design"
            },
            {
                name: "Youtube",
                path: "#youtube",
                description: "Youtube Stuff"
            },
        ]
    },
]


export const all_navigations_items: Navigationitems[] = [

    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },

    {
        id: 3,
        name: "Contact",
        path: "/contact"
    },
    {
        id: 4,
        name: "Services",
        path: "/services",
    }


]
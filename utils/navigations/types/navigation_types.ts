interface NavigationitemsChildren {
    name: string
    path: string
    description: string
}
export interface NavigationitemsWithChildren {
    id: number
    name: string
    path: string
    children: NavigationitemsChildren[]
}
export interface Navigationitems {
    id: number
    name: string
    path: string
}

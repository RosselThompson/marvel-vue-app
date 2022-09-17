import * as urls from '@/constants/Urls';

export const menuOptionsData = [
    { id: 1, isSelected:true,  text: "Characters",to: urls.CHARACTERS_URL,routeName: "characters"},
    { id: 2, isSelected:false, text: "Comics",    to: urls.COMICS_URL,    routeName: "comics"},
    { id: 3, isSelected:false, text: "Stories",   to: urls.STORIES_URL,   routeName: "stories"},
    { id: 4, isSelected:false, text: "Favorites", to: urls.FAVORITES_URL, routeName: "favorites"}
]
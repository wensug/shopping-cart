import item1 from '../images/apple.png'
import item2 from '../images/bread.png'
import item3 from '../images/milk.png'
import item4 from '../images/soup.png'

const initState =  {
    items: [
        {
            id: 1,
            title:'Apples',
            img: item1,
            price:1.00,
        },
        {
            id: 2,
            title:'Bread',
            img: item2,
            price:0.80,
        },
        {
            id: 3,
            title:'Milk',
            img: item3,
            price:1.15,
        },
        {
            id: 4,
            title:'Soup',
            img: item4,
            price:0.65,
        },
    ],
    addedItem:[],
    total: 0
}
const reducer = (state = initState,action) => {
    return state;
}

export default reducer;


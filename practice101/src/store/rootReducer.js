import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes.js';

const store = {
    cart: {
        items: []
    },
    auth: {
        loggedIn: false,
        email: ''
    },
    catalog: {
        search: "",
        items: [
            {
                id: 0,
                title: "Shoe",
                price: 9.50,
                type: "Formal",
                description: "It's just one shoe Idk",
                img: "http://www.clker.com/cliparts/d/3/6/5/13579371752084257714shoe-hi.png"
            },
            {
                id: 1,
                title: "Shoe2",
                price: 6.90,
                type: "Sport",
                description: "It's another singular shoe",
                img: "https://freepngimg.com/download/adidas_shoes/5-2-adidas-shoes-transparent.png"
            },
            {
                id: 2,
                title: "Shoe3",
                price: 4.40,
                type: "Casual",
                description: "A third shoe of some sort",
                img: "https://pngriver.com/wp-content/uploads/2018/02/download-denim-snikers-shoes-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-sneakers-2768263_960_720.png"
            }
        ],
        filters: [
            {
                id: 1,
                name: "Names",
                //  curry methodology - function return function, naudojama perduoti papildomiem parametram
                filterFunction: types => {
                    // Funkcija kuris bus naudojama arr.filter(... cia....), turi grazint true arba false
                    return function (item) {
                        const title = item.title;
                        for (let i = 0; i < types.length; i++) {
                            const { name, show } = types[i];
                            if (!show && title.includes(name)) return false;
                        }
                        return true;
                    }
                },
                options: [
                    {
                        name: 'Shoe1',
                        checked: true
                    },
                    {
                        name: 'Shoe2',
                        checked: true
                    },
                    {
                        name: 'Shoe3',
                        checked: true
                    }
                ]
            },
            {
                id: 2,
                name: "Types",
                filterFunction: types => {
                    return function (item) {
                        const type = item.type;
                        for (let i = 0; i < types.length; i++) {
                            const { name, show } = types[i];
                            console.log(name);
                            if (!show && type === name) return false;
                        }
                        return true;
                    }
                },
                options: [
                    {
                        name: 'Formal',
                        checked: true
                    },
                    {
                        name: 'Sport',
                        checked: true
                    },
                    {
                        name: 'Casual',
                        checked: true
                    }
                ]
            }]
    }

};

// Reduceris - tai funkcija kuri priklausomai nuo action tipo keičia esamą state reikšmę
export default function (state = store, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items.findIndex(({ id }) => id === action.payload.id) >= 0
                        ? state.cart.items.map(item => ({
                            ...item,
                            purchaseAmount: item.id === action.payload.id ? item.purchaseAmount + 1 : item.purchaseAmount
                        }))
                        : [
                            ...state.cart.items,
                            {
                                ...state.catalog.items.find(({ id }) => id === action.payload.id),
                                purchaseAmount: 1
                            }
                        ]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items
                        .map(item => ({
                            ...item,
                            purchaseAmount: item.id === action.payload.id ? item.purchaseAmount - 1 : item.purchaseAmount
                        }))
                        .filter(({purchaseAmount}) => purchaseAmount > 0)
                }
            };
        default: return state;
    }
}

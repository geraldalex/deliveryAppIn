
import Cart from "../containers/Cart";
import Shop from "../containers/Shop";


const routesConfig = [
    {
        path: '/',
        element: <Shop />
    },
    {
        path: '/cart',
        element: <Cart />
    }
]

export default routesConfig
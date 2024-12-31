import {Banner} from "./layouts";
import {Properties} from "@/pages/components/Properties";

const App = () => {
    const availableProperties = [
        {
            id: 1,
            address: "Some address",
            price: 100000
        },
        {
            id: 2,
            address: "Some address2",
            price: 200000
        },
    ];
    return (
        <>
            <Banner slogan="...lets help you find your ideal space"/>
            <Properties properties ={availableProperties}/>
        </>
           
    );
}
export default App;
import Item from "@/app/items/Item";

export default function Items({items}) {
    return (
        <ul>
            {items.map((item:number) => {
                return(<Item key={item} item={item}/>);             
            })}
        </ul>
    );
}
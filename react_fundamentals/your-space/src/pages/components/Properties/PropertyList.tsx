import {Property, PropertyListStyle} from "@/pages/components/Properties";
import {H5Message} from "@/pages/components/misc";


const PropertyList = ({properties}) => {
    return (
        <div>
            <H5Message message="Properties currently on the market"/>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Address</th>
                    <th>Asking Price</th>
                </tr>
                </thead>
                <tbody className={PropertyListStyle.propertiesList}>
                {
                    properties.map(property => {
                        return (<Property key={property.id} property={property}/>)
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default PropertyList;
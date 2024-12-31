import {PropertyList} from "@/pages/components/Properties";
import {H5Message} from "@/pages/components/misc";

const Properties = ({properties}) => {
    return (
        <div className="row mb-2">
            {
                properties.length === 0
                    ? (<H5Message message="Sorry, there are currently no properties available"/>)
                    : (<PropertyList properties={properties}/>)
            }

        </div>

    )
}

export default Properties;
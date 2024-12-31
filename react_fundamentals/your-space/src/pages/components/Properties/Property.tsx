const Property = ({property}) => {
    return (
        <tr>    
            <td> {property.address}</td>
            <td> {property.price}</td>
        </tr>
    )
}

export default Property;
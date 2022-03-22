const returnLiFromArray = (array) => {
    return (
        array.map((each) => {
            return (
                <li key={each.index}>{each.name}</li>
            )
        })
    )
}

export default returnLiFromArray
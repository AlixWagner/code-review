const CharacterAlignment = (props) => {

    const currentAlignment = props.infoObject;


    return (
            <div className="basicCharacterSection">
                <h2>{props.name}</h2>
                <div className="alignmentSection">
                    <h4>{currentAlignment.name}</h4>
                    <p>{currentAlignment.desc}</p>
                </div>
            </div>
    )
}

export default CharacterAlignment;
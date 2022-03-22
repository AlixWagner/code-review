
import CharacterClassInfo from "./CharacterClassInfo";
import CharacterRaceInfo from "./CharacterRaceInfo";
import CharacterAlignment from "./CharacterAlignment";

const CharacterInfo = (props) => {

    const handleClick = (e) => {
        props.saveCharacter(props.name, props.class, props.race, props.alignment);
        e.target.classList.add("disabled");
        e.target.disabled = true;
        e.target.innerText = "Character Saved"
    }


    return (
        <section className = "characterInfoSection">
            {props.loaded 
                ?
                <div className="wrapper">
                    <div className="flexContainer">
                        <CharacterAlignment infoObject={props.alignment} name={props.name} />
                        <div className="innerFlex">
                            <CharacterRaceInfo infoObject={props.race} />
                            <CharacterClassInfo infoObject={props.class} />
                        </div>
                        <div className="buttonContainer">
                            <button onClick={ handleClick } className="primary">Save Character</button>
                        </div>
                    </div>
                </div>
                : null
            }
        </section>
    )

}

export default CharacterInfo;
import liFromArray from "./liFromArray";

const CharacterRaceInfo = (props) => {

    const currentRace = props.infoObject;


    return (
            <div className="raceSection">
                <h3>{currentRace.name}</h3>
                <div className="basicRaceInfo">
                    <p>Movement Speed: {currentRace.speed}ft</p>
                
                </div>

                <div className="languages">
                    <h4>Languages</h4>
                    <ul>
                    {
                        liFromArray(currentRace.languages)
                    }
                    </ul>
                    <h5>Language Choices</h5>
                    {
                        currentRace.language_options
                            ? <>
                                <p className="chooseOptionLabel">Choose {currentRace.language_options.choose} From Below:</p>
                                <ul className="choiceList">
                                    {
                                        liFromArray(currentRace.language_options.from)
                                    }
                                </ul>
                            </>
                            : <p className="noChoice" >No Language Choices for {currentRace.name} </p>
                    }
                </div>

                <div className="traits">
                    <h4>Traits</h4>
                    <ul>
                    {
                        liFromArray(currentRace.traits)
                    }
                    </ul>
                </div>

                <div className="proficiencies">
                    <h4>Proficiencies</h4>
                        {
                            currentRace.starting_proficiencies[0]
                            ? <ul className="baseProficiencies"> {currentRace.starting_proficiencies.map((proficiency) => {
                                    return (
                                        <li key={proficiency.index}>{proficiency.name}</li>
                                    )
                                })}
                            </ul>
                            : <p className="noChoice" >No Starting Proficiencies for {currentRace.name}</p>
                        }
                    <h5>Proficiency Choices</h5>
                    {
                        currentRace.starting_proficiency_options
                        ? <div className="proficiencyChoices" >
                                <p className="chooseOptionLabel">Choose {currentRace.starting_proficiency_options.choose} From Below:</p>
                                <ul className="choiceList">
                                    {
                                        currentRace.starting_proficiency_options.from.map((option) => {
                                            return (
                                                <li key={option.index}>{option.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            : <p className="noChoice" >No Proficiency Choices for {currentRace.name}</p>
                    }
                </div>

                <div className="abilityBonuses">
                    <h4>Ability Bonuses</h4>
                    <ul>
                    {
                        currentRace.ability_bonuses.map((ability) => {
                            return (
                                <li key={ability.ability_score.index}>
                                    <span className="bonusSpan">+{ability.bonus} </span>
                                    <span className="abilityType">{ability.ability_score.name} </span>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <h5>Ability Bonus Choices</h5>
                    {
                        currentRace.ability_bonus_options
                            ? <>
                                <p className="chooseOptionLabel">Choose {currentRace.ability_bonus_options.choose} From Below:</p>
                                <ul className="choiceList">
                                    {
                                        currentRace.ability_bonus_options.from.map((option) => {
                                            return (
                                                <li key={option.ability_score.index}>
                                                    <span className="bonusSpan">+{option.bonus} </span>
                                                    <span className="abilityType">{option.ability_score.name} </span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                            : <p className="noChoice" >No Ability Bonus Choices for {currentRace.name}</p>
                    }
                </div>
            </div>
    )
}

export default CharacterRaceInfo


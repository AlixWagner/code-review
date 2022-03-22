const randomFromArray = ( array, setChoice ) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomChoice = array[randomIndex];
    if (setChoice) {
        if (randomChoice.index) {
            setChoice(randomChoice.index)
        } else {
            setChoice(randomChoice)
        }
    } else {
        if (randomChoice.index) {
            return (randomChoice.index)
        } else {
            return (randomChoice)
        }
    }
}

export default randomFromArray;

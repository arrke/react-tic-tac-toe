
export default function Log({turns}){
    return <ol id="log">
        {turns.map((turn) => {
            return <li key={`${turn.square.row}-${turn.square.col}`}>
                Turn({turn.player}: {turn.square.row}, {turn.square.col})
            </li>
        })}
    </ol>
}
//  Can use either rfc or rfce functional component structure.
import DisplayTotals from "./DisplayTotals";

function PresidentVoting() {

    const votes = [
        { name: "Abe Lincoln", count: 139033},
        { name: "Stephen Douglas", count: 115509},
    ]

    return(
        <>
            <h1>Presidents</h1>
            {votes.map((vote,index) => (
                <DisplayTotals
                    key = {index}
                    name= {vote.name}
                    count= {vote.count}
                />
            ))}
        </>
    )


}

export default PresidentVoting;

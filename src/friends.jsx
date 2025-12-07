import {use} from "react"
export default function Friends ({friendPromise}) {
    let friends = use(friendPromise);
    console.log(friends);
    return (
        <>
        <h2>jayed</h2>
        </>
    )
}
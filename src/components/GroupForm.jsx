import { useState } from "react"
import { useGroup } from "../contexts"

function GroupForm() {
    const [group, setGroup] = useState("")
    const {addGroup} = useGroup()

    const add = (e) => {
        e.preventDefault()

        if (!group) return

        addGroup({group: group, status: true})
        setGroup("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input className="w-full p-2" type="text" placeholder="Add New Group" value={group} onChange={(e) => setGroup(e.target.value)} />
            <button className="bg-gray-950 text-white px-6" type="submit">Add</button>
        </form>
    )
}

export default GroupForm
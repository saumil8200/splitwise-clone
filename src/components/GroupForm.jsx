import { useState } from "react"
import { useGroup } from "../contexts"
import { useNavigate } from "react-router-dom";

function GroupForm() {
    const [group, setGroup] = useState("")
    const {addGroup} = useGroup()
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault()

        if (!group) return

        addGroup({group: group, status: true})
        setGroup("");
        navigate("/");
    }

    return (
        <>
            <h2 className="text-2xl font-bold py-6">Add New Group</h2>
            <hr className="border-t border-gray-300 mb-4" />
            <form onSubmit={add}>
                <label htmlFor="group-name" className="font-medium mb-2 block">Group Name</label>
                <input id="group-name" className="w-full text-sm p-2 mb-4" type="text" placeholder="Add New Group" value={group} onChange={(e) => setGroup(e.target.value)} />
                <button className="bg-gray-950 text-white px-3 py-2 text-sm" type="submit">Submit</button>
            </form>
        </>
    )
}

export default GroupForm
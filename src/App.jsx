import { useEffect, useState } from 'react'
import './App.css'
import { GroupProvider } from './contexts'
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  const [groups, setGroups] = useState([])

  const addGroup = (group) => {
    setGroups((prev) => [{id: Date.now(), ...group}, ...prev])
  }
  const updateGroup = (id, group) => {
    setGroups((prev) => prev.map((prevGroup) => (prevGroup.id === id ? group : prevGroup)))
  }
  const deleteGroup = (id) => {
    setGroups((prev) => prev.filter((group) => group.id !== id))
  }

  useEffect(() => {
    const groups = JSON.parse(localStorage.getItem("groups"))

    if (groups && groups.length > 0) {
      setGroups(groups)
    }
    
  }, [])

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups))
  }, [groups])

  return (
    <GroupProvider value={{groups, addGroup, updateGroup, deleteGroup}}>
      {/* <div>
        <h1 className="mt-10 bg-gray-950 text-white p-6 uppercase text-3xl text-center font-black">
          Splitwise
        </h1>
        <h3 className='mt-4 text-2xl font-bold'>
          Your Groups
        </h3>
        <div className='mt-4'>
          <GroupForm />
        </div>
        <hr className="border-t border-gray-300 my-4" />
        <div className='mt-4'>
          {groups.map((group) => (
            <div key={group.id}>
              <GroupItem group={group} />
            </div>
          ))}
        </div>
      </div> */}
      <RouterProvider router={router} />
    </GroupProvider>
  )
}

export default App

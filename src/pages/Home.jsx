import { useGroup } from '../contexts';
import { GroupItem } from '../components';
import { Link } from 'react-router-dom';

function Home() {
  const { groups } = useGroup();

  return (
    <div>
        <h1 className="py-6 uppercase text-4xl font-black">
          Splitwise
        </h1>
        <hr className="border-t border-gray-300 mb-4" />
        <Link to="/addgroup">
            <button className="bg-gray-950 text-white px-3 py-2 mb-6 text-sm">
                Add New Group
            </button>
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {groups.map((group) => (
            <div key={group.id}>
              <GroupItem group={group} />
            </div>
          ))}
        </div>
    </div>
  );
}

export default Home;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function GroupItem({ group }) {
	return (
		<div className="bg-white p-8">
			<Link to={`/group/${group.id}`}>
				<div className="bg-white p-3">
					<h2 className="font-bold text-xl">{group.group}</h2>
				</div>
			</Link>
		</div>
	);
}

export default GroupItem;

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import GroupDetail from "./pages/GroupDetail";
import { GroupForm } from "./components";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="addgroup" element={<GroupForm />} />
			<Route path="group/:id" element={<GroupDetail />} />
		</Route>
	),
	{
		basename: "/splitwise-clone"
	}
);

export default router;

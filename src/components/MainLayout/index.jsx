import React from 'react';
import { renderRoutes } from 'react-router-config';

function MainLayout({ route }) {
	return <div>{renderRoutes(route.routes)}</div>;
}

export default MainLayout;

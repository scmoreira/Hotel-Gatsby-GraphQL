import React from "react";
import { css } from "@emotion/react";
import styled from '@emotion/styled';

import useRooms from "../hooks/use-rooms";

import Layout from "../components/layout";
import ImageHotel from "../components/imageHotel";
import HomeContent from "../components/homeContent";
import RoomPreview from "../components/roomPreview";

const RoomList = styled.ul`
	max-width: 1200px;
	width: 95%;
	margin: 4rem auto 0 auto;

	@media(min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 3rem;
	}
`;

const IndexPage = () => {
	const rooms = useRooms();
	return (
		<Layout>
			<ImageHotel />
			<HomeContent />
			<h2
				css={css`
				text-align: center;
				margin-top: 5rem;
				font-size: 4rem;
				`}
			>
				Our rooms
      		</h2>
			<RoomList>
				{ rooms.map(room => (
					<RoomPreview key={ room.id } room={ room }/>
				))}
			</RoomList>
		</Layout>
	);
}

export default IndexPage;
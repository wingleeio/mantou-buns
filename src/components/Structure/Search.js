import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const SearchContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	margin: 0px 24px;

	/* span {
		height: 100%;
	} */
`;

function Search() {
	return (
		<SearchContainer>
			<Input.Search placeholder='Search for something..' enterButton />
		</SearchContainer>
	);
}

export default Search;

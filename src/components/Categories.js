import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
	{
		name: 'All',
		text: '전체보기',
	},
	{
		name: 'Business',
		text: '비즈니스',
	},
	{
		name: 'Entertainment',
		text: '엔터테인먼트',
	},
	{
		name: 'Health',
		text: '건강',
	},
	{
		name: 'Science',
		text: '과학',
	},
	{
		name: 'Sports',
		text: '스포츠',
	},
	{
		name: 'Technology',
		text: '기술',
	},
];

const CategoriesBlock = styled.div`
	display: flex;
	padding: 1rem;
	width: 768px;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		width: 100%;
		overflow-x: auto;
	}
`;
const Category = styled.div`
	font-size: 1.125rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: 0.25rem;

	&:hover {
		color: #495057;
	}

	${(props) =>
		props.active &&
		css`
			font-weight: 600;
			border-bottom: 2px solid #22b8cf;
			color: #22b8cf;
			&:hover {
				color: #3bc9db;
			}
		`}

	& + & {
		margin-left: 1rem;
	}
`;
const Categories = ({ category, onSelect }) => {
	return (
		<CategoriesBlock>
			{categories.map((c) => (
				<Category
					key={c.name}
					active={category === c.name}
					onClick={() => onSelect(c.name)}
				>
					{c.name}
				</Category>
			))}
		</CategoriesBlock>
	);
};

export default Categories;

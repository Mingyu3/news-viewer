import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const NewsList = () => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=d7203d3735dc456d9ab93874c4a334dd');
				setArticles(response.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <NewsListBlock>대기 중...</NewsListBlock>;
	}

	if (!articles) {
		return null;
	}

	return (
		<NewsListBlock>
			{articles.map((article) => (
				<NewsItem key={article.url} article={article}></NewsItem>
			))}
		</NewsListBlock>
	);
};

export default NewsList;

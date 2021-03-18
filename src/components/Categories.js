import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'All'}
          to={c.name === 'All' ? '/' : `/${c.name}`}
        >
          {c.name}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;

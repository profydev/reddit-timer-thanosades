import styled from 'styled-components';

const HorizontalList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;

  &>li:not(:last-child) {
    padding-right: 25px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default HorizontalList;

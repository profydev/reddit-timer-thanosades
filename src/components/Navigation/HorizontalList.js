import styled from 'styled-components';

const HorizontalList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 5px;
  margin: 0;

  &>li:not(:last-child) {
    margin-right: 25px;
  }
`;

export default HorizontalList;

import styled from 'styled-components';

const HorizontalList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;

  &>li:not(:last-child) {
    margin-right: 25px;
  }
`;

export default HorizontalList;

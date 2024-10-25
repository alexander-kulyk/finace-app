import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 1230px;
`;

export const WrapperCard = styled.div`
  & img {
    margin-top: 30px;
    margin-bottom: 60px;
  }
`;

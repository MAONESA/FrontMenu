import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 15px;
    color: #444;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #666;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 10px;
    margin: 20px 0;
  }
`;

export const Message = styled.div`
  text-align: center;
  color: #888;
  font-size: 18px;
  margin-top: 20px;
`;

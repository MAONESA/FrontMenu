import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const EventList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EventItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EventDetails = styled.li`
  font-size: 18px;
  color: #555;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #1e90ff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DetailField = styled.span`
  margin-bottom: 5px;

  &::before {
    content: attr(data-label);
    font-weight: bold;
    margin-right: 5px;
    color: #333;
  }
`;

export const CreateButton = styled.button`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

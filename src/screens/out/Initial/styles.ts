import styled from 'styled-components/native';

import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.red};
  margin-bottom: 15px;
`;

export const Paragraph = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 25px;
  text-align: center;
`;

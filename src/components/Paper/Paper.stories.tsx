import { ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import Paper from '@/components/Paper';

export default {
  title: 'Example/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Item = styled(Paper)`
  background-color: #fff;
  text-align: center;
  height: 100%;
  padding: 8px;
`;

export const Basic = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridAutoRows: '150px',
      gap: '1em',
    }}
  >
    {([0, 1, 2, 3, 4, 5] as const).map((elevation) => (
      <Item key={elevation} elevation={elevation}>
        {`elevation=${elevation}`}
      </Item>
    ))}
  </div>
);

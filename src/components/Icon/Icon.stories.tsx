import { ComponentMeta } from '@storybook/react';
import Icon from '@/components/Icon';
import data from './data';

export default {
  title: 'Example/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

type glyph = keyof typeof data;
const glyphs = Object.keys(data) as glyph[];

export const Basic = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridAutoRows: '200px',
      gap: '1em',
    }}
  >
    {glyphs.map((glyph) => (
      <div
        key={glyph}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
        }}
      >
        <Icon glyph={glyph} />
        <p
          style={{
            paddingTop: '4px',
            fontSize: '0.8rem',
          }}
        >
          {glyph}
        </p>
      </div>
    ))}
  </div>
);

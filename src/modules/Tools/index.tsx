import Icon from '@/components/Icon';
import { ToolsContainer, IconWrap } from './styled';
import data from './data';

const Tools = () => (
  <ToolsContainer>
    {data.map((tool) => (
      <IconWrap key={tool.glyph}>
        <Icon glyph={tool.glyph} />
      </IconWrap>
    ))}
  </ToolsContainer>
);

export default Tools;

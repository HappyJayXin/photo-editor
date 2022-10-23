import { useSpring } from 'react-spring';
import Icon from '@/components/Icon';
import { Flex } from '@/components/System';
import { useTypedSelector, useActions } from '@/redux/hook';
import { HeaderContainer } from '@/styles/common';

const ToolSettings = () => {
  const common = useTypedSelector((state) => state.common);
  const { toggleToolSetting } = useActions();

  const styles = useSpring({
    transform: common.isToolSetting ? 'translateY(0px)' : 'translateY(-60px)',
  });

  return (
    <HeaderContainer index={5} style={styles}>
      <Flex container justifyContent="flex-end">
        <Icon glyph="close" onClick={() => toggleToolSetting(false)} />
      </Flex>
    </HeaderContainer>
  );
};

export default ToolSettings;

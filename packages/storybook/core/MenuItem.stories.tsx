import { GiVikingHelmet } from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';
import { storybookSetup } from '@packages/utils/Storybook/storybookSetup';
import {
  MenuItem,
  MenuItemProps,
  Menu,
  MenuButton,
  MenuList,
} from '@packages/components/core/Menu';
import Button from '@packages/components/core/Button';

const { defaultExport, StoryFactory } = storybookSetup<MenuItemProps>(MenuItem, {
  decorators: [
    Story => (
      <Menu>
        <MenuButton elementCategories={[]} as={Button} rightIcon={<BiChevronDown />}>
          Menu
        </MenuButton>
        <MenuList>
          <Story />
        </MenuList>
      </Menu>
    ),
  ],
});

export default defaultExport;

export const Default = StoryFactory({
  closeOnSelect: true,
  command: 'Ctrl+H',
  commandSpacing: 0,
  iconSpacing: 2,
  isDisabled: false,
  isFocusable: false,
  icon: <GiVikingHelmet />,
  children: 'Item name',
});

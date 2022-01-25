import { Accordion } from '@chakra-ui/react';
import AccordionItem, { AccordionItemProps } from '@packages/components/core/AccordionItem';
import { storybookSetup } from '@packages/utils/Storybook/storybookSetup';

const { defaultExport, StoryFactory } = storybookSetup<AccordionItemProps>(AccordionItem, {
  decorators: [
    Story => (
      <Accordion>
        <Story />
      </Accordion>
    ),
  ],
});

export default defaultExport;

const children = 'Content of accordion item';

export const Default = StoryFactory({ title: 'A title', children });

export const WithSubtitle = StoryFactory({
  title: 'A title 2',
  subtitle: '[A subtitle]',
  children,
});

export const MultipleItems = () => (
  <>
    <Default {...(Default.args as AccordionItemProps)} />
    <WithSubtitle {...(WithSubtitle.args as AccordionItemProps)} />
  </>
);

import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '../components/Text'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium quasi consequuntur deleniti id, incidunt repudiandae est beatae quas maiores suscipit alias ratione impedit. Voluptatem deserunt consequuntur consequatur ducimus veniam.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}

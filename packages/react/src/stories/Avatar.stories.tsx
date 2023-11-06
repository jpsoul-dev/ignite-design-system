import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '../components/Avatar'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://avatars.githubusercontent.com/u/134611445?v=4',
    alt: 'avatar',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

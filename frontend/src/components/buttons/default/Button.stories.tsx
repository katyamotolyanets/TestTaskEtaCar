import Button from './Button';
import {ComponentStory} from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            type: 'string',
            name: 'label',
            control: 'text',
        },
        backgroundColor: {
            type: 'string',
            control: 'text',
        },
        color: {
            type: 'string',
            control: 'text',
        },
        border: {
            type: Boolean,
            default: false,
        },
        type: {
            control: 'checked',
            options: ['submit', 'button']
        }
    },
}

export const Default: ComponentStory<typeof Button> = (arg ) => <Button {...arg}/>
Default.args = {
    children: 'Click me',
    backgroundColor: 'transparent',
    color: '#000',
    border: true,
    type: 'button'
}

export const Cancel: ComponentStory<typeof Button> = (arg ) => <Button {...arg}/>
Cancel.args = {
    children: 'Cancel',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: false,
    type: 'button'
}

export const Confirm: ComponentStory<typeof Button> = (arg ) => <Button {...arg}/>
Confirm.args = {
    children: 'Yes',
    backgroundColor: '#4dffa6',
    color: '#fff',
    border: false,
    type: 'submit'
}

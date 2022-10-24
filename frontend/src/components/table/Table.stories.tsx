import '../../index.css';
import {ComponentStory} from "@storybook/react";
import Table from "./Table";

export default {
    title: 'Table',
    component: Table,
    argTypes: {
        backgroundColor: {
            type: 'string',
            control: 'text',
            name: 'row background color'
        },
        firstParam: {
            type: 'string',
            control: 'text',
            name: 'first column header'
        },
        secondParam: {
            type: 'string',
            control: 'text',
            name: 'second column header'
        },
        thirdParam: {
            type: 'string',
            control: 'text',
            name: 'third column header'
        },
        fourthParam: {
            type: 'string',
            control: 'text',
            name: 'fourth column header'
        }
    }
}

export const Default: ComponentStory<typeof Table> = (arg ) => <Table {...arg}/>
Default.args = {
    backgroundColor: '#f2f3ff',
    firstParam: 'First',
    secondParam: 'Second',
    thirdParam: 'Third',
    fourthParam: 'Fourth'
}

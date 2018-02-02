import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Dinosaur from '../Dinosaur';

storiesOf('Dinosaur', module)
	.add('Must display their name in green', () => <Dinosaur />)
	.add('Must tell their nickame', () => <Dinosaur nickname='Carl' />)
	.add('Must tell their life story', () => <Dinosaur />);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

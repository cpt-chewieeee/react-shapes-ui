import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Hexagon from './index';

storiesOf('Hexgaon').add('small', () => <Hexagon width={400} height={400}>TEST</Hexagon>)
.add('large', () => <Hexagon width={800} height={800}>TEST</Hexagon>)
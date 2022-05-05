import { Theme } from '@mui/system';
import { merge } from 'lodash';

import Autocomplete from './Autocomplete';
import Backdrop from './Backdrop';
import Button from './Button';
import Card from './Card';
import IconButton from './IconButton';
import Input from './Input';
import Lists from './Lists';
import Tooltip from './Tooltip';
import Typography from './Typography';

export default function ComponentsOverrides(theme: Theme) {
    return merge(
        Autocomplete(theme),
        Backdrop(theme),
        Button(theme),
        Card(theme),
        IconButton(theme),
        Input(theme),
        Lists(theme),
        Tooltip(theme),
        Typography(theme),
    );
}
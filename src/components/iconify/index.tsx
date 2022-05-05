import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

interface Props {
  icon: any,
  sx?: object,
  width?: number,
  height?: number,
}

const Iconify: React.FC<Props> = ({ icon, sx, ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}

export default Iconify;
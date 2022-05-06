import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import gridFill from '@iconify-icons/eva/grid-fill';

const getIcon = (name: any) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/app',
    icon: getIcon(pieChart2Fill)
  },
  // declare_menu_module

            {
              title: 'User',
              path: '/app/user',
              icon: getIcon(gridFill),
            },
          
  {
    title: 'Nested Menu',
    icon: getIcon(shoppingBagFill),
    children: [{
      title: 'Link',
      path: '/link2',
      icon: getIcon(gridFill),
    }],
  },
 
];

export default sidebarConfig;
import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));


const MeuSindicato = React.lazy(() => import('./views/sindicato/meusindicato/MeuSindicato'));
const Membros = React.lazy(() => import('./views/sindicato/membros/Membros'));


const Contratos = React.lazy(() => import('./views/contratos/contratos/Contratos'));
const Suporte = React.lazy(() => import('./views/surpote/Suporte'));
const Orcamentos = React.lazy(() => import('./views/orcamentos/orcamentos/Orcamentos'));
const Propostas = React.lazy(() => import('./views/propostas/propostas/Propostas'));
const Perfil = React.lazy(() => import('./views/perfil/perfil/Perfil'));
const Pagamentos = React.lazy(() => import('./views/pagamentos/pagamentos/Pagamentos'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard/contratos', name: 'Contratos', component: Contratos, exact: true },
  { path: '/dashboard/suporte', name: 'Suporte', component: Suporte, exact: true },
  { path: '/dashboard/orcamentos', name: 'Orçamentos', component: Orcamentos, exact: true },
  { path: '/dashboard/propostas', name: 'Propostas', component: Propostas, exact: true },
  { path: '/dashboard/perfil', name: 'Perfil', component: Perfil, exact: true },
  { path: '/dashboard/mensalidade', name: 'Pagamentos', component: Pagamentos, exact: true },
  { path: '/dashboard', exact: true,name: 'Dashboard', component: Dashboard },
  { path: '/dashboard/sindicato/meusindicato', name: 'Meu Sindicato', component: MeuSindicato },
  { path: '/dashboard/sindicato/membros', name: 'Membros', component: Membros },
  { path: '/dashboard/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/dashboard/theme/colors', name: 'Colors', component: Colors },
  { path: '/dashboard/theme/typography', name: 'Typography', component: Typography },
  { path: '/dashboard/sindicato', name: 'Sindicato', component: Cards, exact: true },
  { path: '/dashboard/sindicato/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/dashboard/sindicato/cards', name: 'Cards', component: Cards },
  { path: '/dashboard/sindicato/carousels', name: 'Carousel', component: Carousels },
  { path: '/dashboard/sindicato/collapses', name: 'Collapse', component: Collapses },
  { path: '/dashboard/sindicato/forms', name: 'Forms', component: BasicForms },
  { path: '/dashboard/sindicato/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/dashboard/sindicato/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/dashboard/sindicato/navbars', name: 'Navbars', component: Navbars },
  { path: '/dashboard/sindicato/navs', name: 'Navs', component: Navs },
  { path: '/dashboard/sindicato/paginations', name: 'Paginations', component: Paginations },
  { path: '/dashboard/sindicato/popovers', name: 'Popovers', component: Popovers },
  { path: '/dashboard/sindicato/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/dashboard/sindicato/switches', name: 'Switches', component: Switches },
  { path: '/dashboard/sindicato/tables', name: 'Tables', component: Tables },
  { path: '/dashboard/sindicato/tabs', name: 'Tabs', component: Tabs },
  { path: '/dashboard/sindicato/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/dashboard/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/dashboard/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/dashboard/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/dashboard/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/dashboard/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/dashboard/charts', name: 'Charts', component: Charts },
  { path: '/dashboard/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/dashboard/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/dashboard/icons/flags', name: 'Flags', component: Flags },
  { path: '/dashboard/icons/brands', name: 'Brands', component: Brands },
  { path: '/dashboard/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/dashboard/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/dashboard/notifications/badges', name: 'Badges', component: Badges },
  { path: '/dashboard/notifications/modals', name: 'Modals', component: Modals },
  { path: '/dashboard/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/dashboard/widgets', name: 'Widgets', component: Widgets },
  { path: '/dashboard/users', exact: true,  name: 'Users', component: Users },
  { path: '/dashboard/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;

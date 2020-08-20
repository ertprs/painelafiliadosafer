import React from 'react';

const MeuSindicato = React.lazy(() => import('./views/sindicato/meusindicato/MeuSindicato'));
const Membros = React.lazy(() => import('./views/sindicato/membros/Membros'));

const Contratos = React.lazy(() => import('./views/contratos/contratos/Contratos'));
const Suporte = React.lazy(() => import('./views/surpote/Suporte'));
const Orcamentos = React.lazy(() => import('./views/orcamentos/orcamentos/Orcamentos'));
const Propostas = React.lazy(() => import('./views/propostas/propostas/Propostas'));
const Perfil = React.lazy(() => import('./views/perfil/perfil/Perfil'));
const Pagamentos = React.lazy(() => import('./views/pagamentos/pagamentos/Pagamentos'));

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

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
];

export default routes;

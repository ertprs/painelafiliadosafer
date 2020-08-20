export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contratos',
    to: '/dashboard/contratos',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Suporte',
    to: '/dashboard/suporte',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Orçamentos',
    to: '/dashboard/orcamentos',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Propostas',
    to: '/dashboard/propostas',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Perfil',
    to: '/dashboard/perfil',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mensalidade',
    to: '/dashboard/mensalidade',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sindicato',
    route: '/sindicato',
    icon: 'cil-list',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Meu Sindicato',
        to: '/dashboard/sindicato/meusindicato',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Membros',
        to: '/dashboard/sindicato/membros',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Agro Fácil',
    route: '/agrofacil',
    icon: 'cil-list',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Estoque',
        to: '/dashboard/agrofacil/estoque',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Vendas',
        to: '/dashboard/agrofacil/vendas',
      },
    ],
  },
]


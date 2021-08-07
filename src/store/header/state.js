
export default function () {
  return {
    lang: 'en-us',
    menuList: [
      {
        icon: 'fas fa-home',
        href: '/',
        label: 'menu.index',
        separator: true
      },
      {
        icon: 'fas fa-code',
        href: '/services',
        label: 'menu.services',
        separator: false
      },
      {
        icon: 'fas fa-briefcase',
        href: '/works',
        label: 'menu.portfolio',
        separator: false
      },
      {
        icon: 'fas fa-phone',
        href: '/contact',
        label: 'menu.contact',
        separator: false
      },
    ],
  }
}

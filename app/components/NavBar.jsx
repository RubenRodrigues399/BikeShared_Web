import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { logOut } from '../actions/logOut'

const navigation = [
  { name: 'Home', href: '/bikeshared', current: true },
  { name: 'Estações', href: '/bikeshared/estacoes/', current: false },
  // { name: 'Docas', href: '/bikeshared/docas/Listagem', current: false },
  //{ name: 'Bicicletas', href: '/bikeshared/bikes/Listagem', current: false },
  { name: 'Ciclistas', href: '/bikeshared/ciclistas', current: false },
  { name: 'Administradores', href: '/bikeshared/admins', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-[whitesmoke] border-b-2 border-lilas">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-lilas hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">BikeShared</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          {/* DIV DO LOGO E OS BOTOES DO MENU */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* LOGO */}
            <div className="flex flex-shrink-0 items-center">
            <span className='text-lilas flex items-center p-1'>BikeShared</span>
              <img
                alt="Bikeshared"
                src="/2.png"
                className="h-8 w-auto"
              />
            </div>
          </div>

           {/* BOTOES DO MENU */}
           <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-lilas hover:bg-lilas hover:text-white' : 'text-lilas hover:bg-lilas hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* BOTAO DE NOTIFICACOES */}
            <button
              type="button"
              className="relative rounded-full bg-lilas p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Notificações</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton>
                  <span className='w-10 h-1/3 flex items-center justify-center rounded bg-lilas text-white'>RR</span>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Perfil
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Definições
                  </a>
                </MenuItem>
                <MenuItem>
                <div className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100'>
                  <form action={logOut}>
                  <button type="submit">Sair</button>
                  </form>                
                </div>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'hover:bg-lilas hover:text-white text-lilas' : 'hover:bg-lilas hover:text-white text-lilas',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
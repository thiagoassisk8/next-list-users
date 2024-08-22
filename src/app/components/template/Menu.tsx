import { IconHome, IconUser , IconUserCircle} from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
    return (
        <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem icon={IconHome} text="Home" url="/" />
                <MenuItem icon={IconUser} text="Users" url="/users" />
                <MenuItem icon={IconUserCircle} text="User Detail" url="/user/1" />
            </nav>
        </aside>
    )
}

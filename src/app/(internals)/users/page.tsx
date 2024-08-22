//  Server Components for server-side rendering
import { IconUser } from '@tabler/icons-react'
import axios from "axios";
import Pagina from '@/app/components/template/Page'
import Title from '@/app/components/template/Title'
import { User } from '@/core/model/User';


async function getUsers(): Promise<User[]> {
  try {
    const res = await axios.get<User[]>(
      `https://api.github.com/orgs/rocketseat/members`
    );
    return res.data;
  } catch (error) {
    console.error(`Error fetching data:`, error);
    return [];
  }
}

export default async function Page() {
  const data = await getUsers();

  return (
    <Pagina className="flex flex-col gap-10">
      <Title icon={IconUser} principal="Users" second="Users list" />
      <div>
        {data.map((user: User) => (
          <div key={user.id}>{user.login}</div>
        ))}
      </div>
    </Pagina>
  )
}

import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">Post Content</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts.map(({ name, username, email, id, address, phone,  website, company  }: UserProps, key: number) => (
              <UserCard name={name} username={username} id={id} email={email} address={address} phone={phone} website={website} company={company} key={key}  />
            ))
          }
        </div>
      </main>
    </div>
  )
}
export default Users

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()
  
    return {
      props: {
        posts
      }
    }
}
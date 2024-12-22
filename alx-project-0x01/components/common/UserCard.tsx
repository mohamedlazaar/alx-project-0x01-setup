import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, id, address, phone,  website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{username}</h2>
      </div>
=      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Name: {name}</span>
        <span>User ID: {id}</span>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Phone: {phone}</span>
        <span>Website: {website}</span>
        <span>Email: {email} </span>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <div>
                <p className="font-semibold">Company:</p>
                <p>{company.name}</p>
                <p className="italic">&quot;{company.catchPhrase}&quot;</p>
                <p>{company.bs}</p>
            </div>
            <div>
            <p className="font-semibold">Address:</p>
          <p>
            {address.suite}, {address.street}, {address.city}, {address.zipcode}
          </p>
            </div>
            <span>Address: {address.street}</span>
        </div>
            
      </div>
  );
};

export default UserCard;
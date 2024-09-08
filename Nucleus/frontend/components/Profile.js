const Profile = () => {
  const user = {
    name: "John Doe",
    type: "Candidate",
    email: "johndoe@example.com",
    bio: "A passionate software developer...",
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md min-h-screen">
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600">Type: {user.type}</p>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600 mt-4">{user.bio}</p>
    </div>
  );
};

export default Profile;

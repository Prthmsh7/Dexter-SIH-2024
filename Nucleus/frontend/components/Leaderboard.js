// components/Leaderboard.js

const Leaderboard = () => {
  // Example data, replace with actual data
  const users = [
    { name: "John Doe", rating: 95 },
    { name: "Jane Smith", rating: 90 },
    { name: "Bob Johnson", rating: 85 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      <ul className="mt-4">
        {users.map((user, index) => (
          <li key={index} className="flex justify-between py-2">
            <span>{user.name}</span>
            <span>{user.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

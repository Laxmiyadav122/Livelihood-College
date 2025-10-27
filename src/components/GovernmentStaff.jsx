
function GovenmentStaff() {
   const staffMembers = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcurCPRPk2o3O5usdqWn3hVPfgDiX0-0VEA&s",
      name: "Name 1",
      email: "email1@example.com",
      address: "Address 1",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcurCPRPk2o3O5usdqWn3hVPfgDiX0-0VEA&s",
      name: "Name 2",
      email: "email2@example.com",
      address: "Address 2",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcurCPRPk2o3O5usdqWn3hVPfgDiX0-0VEA&s",
      name: "Name 3",
      email: "email3@example.com",
      address: "Address 3",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcurCPRPk2o3O5usdqWn3hVPfgDiX0-0VEA&s",
      name: "Name 4",
      email: "email4@example.com",
      address: "Address 4",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcurCPRPk2o3O5usdqWn3hVPfgDiX0-0VEA&s",
      name: "Name 5",
      email: "email5@example.com",
      address: "Address 5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcurCPRPk2o3O5usdqWn3hVPfgDiX0-0VEA&s",
      name: "Name 6",
      email: "email6@example.com",
      address: "Address 6",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 " style={{fontFamily:"georgia, serif"}}>
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-900 tracking-wide">
        Government Staff
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
        {staffMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <a
              href={`mailto:${member.email}`}
              className="text-blue-600 hover:underline block mt-1"
            >
              {member.email}
            </a>
            <p className="text-gray-600 mt-2">{member.address}</p>
            <p className="text-gray-600 mt-2">{member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default GovenmentStaff
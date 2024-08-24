function Badge({ status }: { status: string }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Promoted":
        return "bg-yellow-500 text-white";
      case "Active":
        return "bg-green-500 text-white";
      case "Passed":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-sm ${getStatusColor(status)}`}
    >
      {status}
    </span>
  );
}
export default Badge;

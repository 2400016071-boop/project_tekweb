import { useParams } from "react-router-dom";

export default function EventEdit() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        Edit Event ID: {id}
      </h1>
      <p className="text-gray-600">
        Halaman edit (placeholder)
      </p>
    </div>
  );
}

type Props = {
  Make_Name: string;
  Model_Name: string;
  Model_Id: number;
  Make_Id: number;
};

export default function VehicleCard({ Make_Name, Model_Name, Model_Id, Make_Id }: Props) {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <h3 className="text-lg font-bold text-gray-800">Make Name: {Make_Name}</h3>
      <h3 className="text-lg font-bold text-gray-800">Model Name: {Model_Name}</h3>
      <p className="text-sm text-gray-600">Model ID: {Model_Id}</p>
      <p className="text-sm text-gray-600">Make ID: {Make_Id}</p>
    </div>
  );
}

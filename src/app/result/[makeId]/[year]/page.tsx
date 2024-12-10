import React, {lazy, Suspense} from "react";
import {ModelsForMakeIdYearResponse} from "@/types/ModelsForMakeIdYearTypes";
import Link from "next/link";
import {GET_MODELS_LINK} from "@/constants";

const VehicleCard = lazy(() => import("@/components/VehicleCard"));


async function fetchVehicleData(makeId: number, year: string) {
  const response = await fetch(
    `${GET_MODELS_LINK}${makeId}/modelyear/${year}?format=json`
  );
  const data: ModelsForMakeIdYearResponse = await response.json();
  return data.Results;
}

export default async function Page({ params }: { params: { makeId: number; year: string } }) {
  const { makeId, year } = await params;

  const vehicleData = await fetchVehicleData(makeId, year);

  return (
    <main className="py-4 px-4">
      <Link
        href="/"
        className="block w-fit px-4 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-700"
      >
        Back
      </Link>
      <h1>Vehicle Models for Make ID: {makeId} and Year: {year}</h1>
      <div className="flex flex-col gap-1">
        {vehicleData.map((item) => (
          <Suspense key={item.Model_ID} fallback={<div>Still loading...</div>}>
            <VehicleCard
              Make_Name={item.Make_Name}
              Model_Name={item.Model_Name}
              Model_Id={item.Model_ID}
              Make_Id={item.Make_ID}
            />
          </Suspense>
        ))}
      </div>
    </main>
  );
}

"use client"

import {Suspense, useEffect, useState} from "react";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import {MakesForVehicleResponse, MakesForVehicleResult} from "@/types/MakesForVehicleTypes";
import {GET_MAKES_LINK, YEARS} from "@/constants";

export default function Home() {
  const [makes, setMakes] = useState<null | MakesForVehicleResult[]>()
  const [makeChoose, setMakeChoose] = useState<number | string>('')
  const [yearChoose, setYearChoose] = useState('')

  const fetchMakes = async () => {
    const response = await fetch(GET_MAKES_LINK)
    const responseJSON: MakesForVehicleResponse = await response.json()
    setMakes(responseJSON.Results)
  }

  useEffect(() => {
    fetchMakes()
  }, [])

  return (
    <main className="flex flex-col text-center py-4">
      <h1 className="text-3xl">This is filter page</h1>
      <div className="flex gap-4 mx-auto">
        <Dropdown
          dropdownButtonText="Choose make"
          chooseItem={makeChoose}
        >
          <Suspense fallback={<div>Still loading...</div>}>
            <div
              className="absolute mt-2 w-48 max-h-40 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10"
            >
              {makes?.map((item) => (
                <button
                  onClick={() => setMakeChoose(item.MakeId)}
                  key={item.MakeId}
                  className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:outline-none"
                >
                  {item.MakeName}
                </button>
              ))}
            </div>
          </Suspense>
        </Dropdown>
        <Dropdown
          dropdownButtonText={"Choose year"}
          chooseItem={yearChoose}
        >
          <div
            className="absolute mt-2 w-48 max-h-40 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10"
          >
            {YEARS.map((item) => (
              <button
                onClick={() => setYearChoose(item)}
                key={item}
                className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:outline-none"
              >
                {item}
              </button>
            ))}
          </div>
        </Dropdown>
      </div>
      {makeChoose && yearChoose ? (
        <Link
          href={`/result/${makeChoose}/${yearChoose}`}
          className="block w-fit mx-auto mt-2 px-4 py-2 text-white rounded-md bg-blue-600 hover:bg-blue-700"
        >
          Next
        </Link>
      ) : (
        <span
          className="block w-fit mx-auto mt-2 px-4 py-2 text-white rounded-md bg-gray-400 cursor-not-allowed"
        >
          Next
        </span>
      )}

    </main>
  );
}

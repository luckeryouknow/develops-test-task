export type MakesForVehicleResult = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export type MakesForVehicleResponse = {
  Count: number;
  Message: string;
  Results: MakesForVehicleResult[];
  SearchCriteria: string;
}
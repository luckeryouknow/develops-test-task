export type ModelsForMakeIdYearResult = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export type ModelsForMakeIdYearResponse = {
  Count: number;
  Message: string;
  Results: ModelsForMakeIdYearResult[];
  SearchCriteria: string;
}
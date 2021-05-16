/**
 * Enum Tyeps
 * Group of consts used to assign types
 */

enum TypesOfResponse {
  SUCCESS,
  FAILED,
  FORBIDDED,
}

interface apiResponse<T> {
  status: number;
  type: TypesOfResponse;
  data: T;
}

const response2: apiResponse<object> = {
  status: 200,
  type: TypesOfResponse.SUCCESS,
  data: {
    name: "Test",
  },
};

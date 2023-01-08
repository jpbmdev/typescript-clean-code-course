import { HttpRequest, HttpResponse } from "../interfaces/http.interface";

export class RegisterVehicle {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ["name", "model", "year", "color"];

    for (const requiredProperty of requiredProperties) {
      if (!httpRequest?.body?.[requiredProperty]) {
        return {
          statusCode: 400,
          body: new Error(`error in the ${requiredProperty}`),
        };
      }
    }

    return { statusCode: 200 };
  }
}

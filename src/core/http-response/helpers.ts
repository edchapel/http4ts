import { HttpStatus } from "../http-status";
import { HttpBody } from "../http";
import { stringBody } from "../http-body/helpers";
import { HttpResponseImpl } from "./http-response-impl";
import { ResponseHttpHeaders } from "../http-headers";

type ResponeParams = {
  status: HttpStatus;
  body?: HttpBody | string;
  headers?: ResponseHttpHeaders;
};

/**
 * Instantiates an HttpResponse object based on the provided status, body and headers
 * @param obj The response representative object. Only status is mandatory.
 */
export function res({
  status,
  body = stringBody(""),
  headers = {}
}: ResponeParams) {
  const theBody = typeof body === "string" ? stringBody(body) : body;

  return new HttpResponseImpl(status, theBody, headers);
}

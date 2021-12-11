import { HttpErrorResponse } from '@angular/common/http';

export interface FhsErrorResponse extends HttpErrorResponse {
  readonly error: ErrorCode | null;
}

interface ErrorCode {
  readonly name: string;
  readonly title: string;
  readonly text: string;
}

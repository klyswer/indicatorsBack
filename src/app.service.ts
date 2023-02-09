import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  health(): string {
    return 'OK!';
  }
  async getIndicators(): Promise<AxiosResponse<any, any>> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://mindicador.cl/api').pipe(
        catchError((error: AxiosError) => {
          throw error;
        }),
      ),
    );
    return data;
  }
}

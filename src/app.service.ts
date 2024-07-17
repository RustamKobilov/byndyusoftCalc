import { Injectable } from "@nestjs/common";
import * as math from "mathjs";

@Injectable()
export class AppService {
  calculate(expression: string): number|string {
    try {
      return math.evaluate(expression);
    } catch (error) {
      return 'Ошибка вычисления. Возможно, введены некорректные данные!'
    }
  }
}

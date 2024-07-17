import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import * as fs from "fs";
import * as path from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getCalculatorPage() {
    const htmlPath = path.join(__dirname, '../calculator.html');
    console.log(htmlPath)
    const html = fs.readFileSync(htmlPath, 'utf-8');
    return html;
  }
  @Post()
  calculateExpression(@Body('expression') expression: string) {
    const result = this.appService.calculate(expression);
    return { value: result };
  }

}

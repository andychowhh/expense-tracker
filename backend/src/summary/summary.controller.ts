import { Controller, Get, Query } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  // @Get()
  // findAll(@Query('type') type: string, @Query('period') period: string) {
  //   return this.summaryService.findAll(type, period);
  // }
  @Get('last-year')
  findAll() {
    return this.summaryService.findLastYearSummary();
  }
}

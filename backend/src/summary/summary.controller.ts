import { Controller, Get, Query } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { ApiQuery } from '@nestjs/swagger';

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

  @ApiQuery({ name: 'to' })
  @ApiQuery({ name: 'from' })
  @Get('amount')
  findAmountSummary() {
    return this.summaryService.findAmountSummary();
  }

  @ApiQuery({ name: 'to' })
  @ApiQuery({ name: 'from' })
  @Get('categories')
  findCategoriesSummary() {
    return this.summaryService.findCategoriesSummary();
  }
}

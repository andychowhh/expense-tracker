import { Controller, Get, Query } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

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

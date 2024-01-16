// cats.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { CatService } from 'src/cat/cat.service';
import {Cat} from './interfaces/cat.interfaces';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatService) {}

  @Get()
    async findAll():Promise <Cat[]>  {
        return this.catsService.findAll();
    }
    @Get(':id')
    findOne(@Param() id: string): string    {
       
        return "este es un  #${id} cat";
    }
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Patch(':id')
async patchCats(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): Promise<string>{
    return "este es un  #${id} cat";
}

@Delete(':id')
async remove(@Param('id') id: number): Promise<string> {

    return "este es un  #${id} cat.";
 
}
}
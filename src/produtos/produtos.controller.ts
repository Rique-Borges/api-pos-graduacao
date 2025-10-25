// src/produtos/produtos.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Prisma } from '@prisma/client';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  // CREATE
  @Post()
  create(@Body() createProdutoDto: Prisma.ProdutoCreateInput) {
    return this.produtosService.create(createProdutoDto);
  }

  // FIND ALL
  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  // COUNT
  @Get('count')
  count() {
    return this.produtosService.count();
  }

  // FIND BY NAME
  @Get('search')
  findByName(@Query('nome') nome: string) {
    return this.produtosService.findByName(nome);
  }

  // FIND BY ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  // UPDATE
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProdutoDto: Prisma.ProdutoUpdateInput,
  ) {
    return this.produtosService.update(id, updateProdutoDto);
  }

  // DELETE
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id:string) {
    return this.produtosService.remove(id);
  }
}
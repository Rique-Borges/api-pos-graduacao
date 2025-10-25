// src/produtos/produtos.module.ts
import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Importe o PrismaModule aqui
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
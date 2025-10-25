// src/produtos/produtos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Produto } from '@prisma/client';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  // CREATE
  async create(data: Prisma.ProdutoCreateInput): Promise<Produto> {
    return this.prisma.produto.create({ data });
  }

  // FIND ALL
  async findAll(): Promise<Produto[]> {
    return this.prisma.produto.findMany();
  }

  // FIND BY ID
  async findOne(id: string): Promise<Produto> {
    const produto = await this.prisma.produto.findUnique({
      where: { id },
    });

    if (!produto) {
      throw new NotFoundException(`Produto com ID "${id}" não encontrado.`);
    }

    return produto;
  }

  // FIND BY NAME
  async findByName(nome: string): Promise<Produto[]> {
    return this.prisma.produto.findMany({
      where: {
        nome: {
          contains: nome
        },
      },
    });
  }

  // UPDATE
  async update(id: string, data: Prisma.ProdutoUpdateInput): Promise<Produto> {
    // Verifica se o produto existe antes de tentar atualizar
    await this.findOne(id);
    return this.prisma.produto.update({
      where: { id },
      data,
    });
  }

  // DELETE
  async remove(id: string): Promise<Produto> {
    // Verifica se o produto existe antes de tentar remover
    await this.findOne(id);
    return this.prisma.produto.delete({
      where: { id },
    });
  }

  // COUNT
  async count(): Promise<number> {
    return this.prisma.produto.count();
  }
}
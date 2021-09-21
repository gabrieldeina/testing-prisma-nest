import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBookDto: Prisma.BookCreateInput) {
    return this.prismaService.book.create({ data: createBookDto });
  }

  findAll() {
    return this.prismaService.book.findMany();
  }

  findOne(bookWhereUniqueInput: Prisma.BookWhereUniqueInput) {
    return this.prismaService.book.findUnique({ where: bookWhereUniqueInput });
  }

  update(
    where: Prisma.BookWhereUniqueInput,
    updateBookUniqueInput: Prisma.BookUpdateInput,
  ) {
    return this.prismaService.book.update({
      data: updateBookUniqueInput,
      where: where,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

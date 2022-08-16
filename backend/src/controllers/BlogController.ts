import { Body, Delete, Get, JsonController, Param, Post, Put, Req, Res } from "routing-controllers";
import { Request, Response } from 'express';
import { getRepository, createQueryBuilder } from 'typeorm';
import { Blog } from "../entity/Blog";

@JsonController()
export class BlogController {
  @Get('/blogs')
  async getBlogs(@Req() req: Request, @Res() res: Response) {
    const blogRepo = await getRepository(Blog);
    const blogs = await blogRepo.find();
    return res.json({ blogs })
  }

  @Get('/blogs/:id')
  async getPostById(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    const blogRepo = await getRepository(Blog);
    const blog = await blogRepo.findOne(id);

    return res.json({ blog })
  }

  @Post('/blogs')
  async createPost(@Body() post: any, @Req() req: Request, @Res() res: Response) {
    const result = await createQueryBuilder()
      .insert()
      .into(Blog)
      .values(post)
      .execute()
    
    return res.json({ result })
  }

  @Put('/blogs/:id')
  async updatePost(@Param('id') id: string, @Body() post: any, @Req() req: Request, @Res() res: Response) {
    const result = await createQueryBuilder()
      .update(Blog)
      .set(post)
      .where("id = :id", { id })
      .execute()

    return res.json({ result })
  }

  @Delete('/blogs/:id')
  async removePost(@Param('id') id: string, @Body() post: any, @Req() req: Request, @Res() res: Response) {
    const result = await createQueryBuilder()
    .delete()
    .from(Blog)
    .where("id = :id", { id })
    .execute()

    return res.json({ result })
  }
}
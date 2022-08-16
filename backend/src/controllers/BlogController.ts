import { Body, Delete, Get, JsonController, Param, Post, Put, Req, Res } from "routing-controllers";
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
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
  getPostById(@Param('id') id: string) {
    return 'This action returns post #' + id;
  }

  @Post('/blogs')
  createPost(@Body() post: any) {
    return 'Saving post...';
  }

  @Put('/blogs/:id')
  updatePost(@Param('id') id: number, @Body() post: any) {
    return 'Updating a post...';
  }

  @Delete('/blogs/:id')
  removePost(@Param('id') id: number) {
    return 'Removing post...';
  }
}
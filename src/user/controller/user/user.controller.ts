import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from 'src/typeorm/entities/User';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUser(): Promise<User[]> {
    return this.userService.getUser();
  }
  @Post()
  store(@Body() createUser: User) {
    return this.userService.create(createUser);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId);
  }

  @Patch('/:User_ID')
  update(
    @Body() updateUser: User,
    @Param('User_ID', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUser, userId);
  }
  @Delete('/:User_ID')
  deleteUser(@Param('User_ID', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}

import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { UserProfileDto, OrderResponseDto } from '@enterprise/shared-types';

@Injectable()
export class DashboardService {

  async getDashboardData(authHeader: string) {
    const headers = { Authorization: authHeader };

    const test: UserProfileDto = {
      email: 'cuong@mail.com',
      fullName: 'cuong',
      id: 'test',
      isActive: true,
    }

    return test;

    // // Lấy URL từ biến môi trường hoặc cấu hình nội bộ Docker
    // const userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:3001';
    // const orderServiceUrl = process.env.ORDER_SERVICE_URL || 'http://localhost:3002';

    // try {
    //   // Gọi đồng thời song song sang User Service và Order Service bằng Promise.all
    //   const [userRes, ordersRes] = await Promise.all([
    //     firstValueFrom(
    //       this.httpService.get<UserProfileDto>(`${userServiceUrl}/api/v1/profile`, { headers })
    //     ).catch(() => ({ data: null })),

    //     firstValueFrom(
    //       this.httpService.get<OrderResponseDto[]>(`${orderServiceUrl}/api/v1/orders`, { headers })
    //     ).catch(() => ({ data: [] })),
    //   ]);

    //   // Gom nhóm dữ liệu trả về cho Frontend theo đúng kiểu đã định nghĩa chung
    //   return {
    //     success: true,
    //     data: {
    //       user: userRes.data,
    //       orders: ordersRes.data,
    //     },
    //   };
    // } catch (error) {
    //   throw new HttpException(
    //     { success: false, message: 'Failed to aggregate dashboard data', error: error.message },
    //     HttpStatus.INTERNAL_SERVER_ERROR
    //   );
    // }
  }

  create(createDashboardDto: CreateDashboardDto) {
    return 'This action adds a new dashboard';
  }

  findAll() {
    return `This action returns all dashboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}

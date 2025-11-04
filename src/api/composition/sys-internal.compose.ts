import { ApiStateController } from '../http/controllers/sys-internall/api-state.controller';
import { ApiStateUseCase } from './../../application/use-cases/sys-internall/api-state.usecase';

const apiStateUseCase=new ApiStateUseCase()

const apiStateController=new ApiStateController(apiStateUseCase);

export {apiStateController}
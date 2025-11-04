import { ApiResult } from './../../../shared/types/app-result';
import type { AppOptions } from "../../../shared/types/app-options";

export interface IUseCase<Input,Output>{
    execute(input:Input,options?:AppOptions):Promise<ApiResult<Output>>
}
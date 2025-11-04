import type { Request,Response } from 'express';
import type { IUseCase } from '../../../../application/contract/use-case/use-case.interface';
import type { ApiStateDto } from '../../../../application/dtos/sys-internall/api-state.dto';
export class ApiStateController{

    constructor(private readonly apiStateUseCase:IUseCase<null,ApiStateDto>) {
        
    }

    public async apiState(req:Request,res:Response){
        const result=await this.apiStateUseCase.execute(null);
        res.status(result.statusCode).json(result.toJson());
    }
}
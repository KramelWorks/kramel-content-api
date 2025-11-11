export interface IAppMapper<TEntity,TOutput,TInputCreate,TInputUpdate>{
    create(input:TInputCreate):TEntity

    update(input:TInputUpdate,entity:TEntity):TEntity

    toDto(entity:TEntity):TOutput
}
export interface IEntityFactory<TEntity,TInputNewDto,TInputUpdateDto>{

    create(input:TInputNewDto):TEntity;

    update(input:TInputUpdateDto,entity:TEntity):TEntity;

}
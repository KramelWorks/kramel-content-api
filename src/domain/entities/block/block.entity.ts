import { SlugUtil } from '../../../shared/utils/slug.util';
import { BaseEntity } from './../base/base.entity';
import type { BlockProps } from './block.props';
export class Block extends BaseEntity{
    private _version:number;
    private _order:number;
    private readonly _slug:string;
    private readonly _title:string;
    private readonly _description?:string;
    private readonly _projectId:string;

    public get version(){return this._version};
    public get order(){return this._order};
    public get slug(){return this._slug};
    public get title(){return this._title};
    public get description(){return this._description};
    public get projectId(){return this._projectId};

    constructor(props:BlockProps) {
        super(props);
        this._version=props.version ?? 0;
        this._order=props.order ?? 1;
        this._title=props.title;
        this._slug=props.slug ?? SlugUtil.generate(this._title);
        this._description=props.description ?? "";
        this._projectId=props.projectId ?? "";
    }

    public incraseVersion(value:number){
        if(this._version===value) return;
        this._version=value+1;
        super.touch();
    }

    public changeOrder(value:number){
        if(this._order===value) return;
        this._order=value+1;        
        super.touch();
    }

    public toProps():BlockProps{
        return{
            version:this._version,
            order:this._order,
            slug:this._slug,
            title:this._title,
            description:this._description,
            projectId:this._projectId,
            id:super.id,
            createAt:super.createAt,
            updateAt:super.updateAt,
            deletedAt:super.deletedAt,
            tenantId:super.tenantId,
            isActive:super.isActive,
            isDeleted:super.isDeleted
        }

    }

}

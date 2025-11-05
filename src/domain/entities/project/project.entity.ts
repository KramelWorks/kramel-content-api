import { SlugUtil } from "../../../shared/utils/slug.util";
import { BaseEntity } from "../base/base.entity";
import { ProjectState } from "./project-state.enum";
import type { ProjectProps } from "./project.props";

export class Project extends BaseEntity{

    private readonly _title:string;
    private readonly _description:string;
    private _state:ProjectState;
    private readonly _slug:string;
    private readonly _version:number;
    private _tags:string[];

    public get title(){return this._title};
    public get description(){return this._description};
    public get state(){return this._state};
    public get slug(){return this._slug};
    public get version(){return this._version};
    public get tags(){return this._tags};

    constructor(props:ProjectProps) {
        super(props);
        this._title=props.title;
        this._description=props.description ?? "";
        this._state=props.state ?? ProjectState.Draft;
        this._slug=props.slug ?? SlugUtil.generate(this._title);
        this._version=props.version ?? 0;
        this._tags=props.tags ?? [];
    }

    public addTag(value:string){
        this._tags=[...this._tags,value]
        super.touch();
    }

    public removeTag(value:string){
        this._tags=this._tags.filter(x => x !==value);
        super.touch(); 
    }

    public activate(): void {
        super.activate();
    }

    public deactivate(): void {
        super.deactivate();
    }

    public delete(): void {
        super.markAsdeleted();
    }

    public restore(): void {
        super.restore();
    }

    public changeState(value:ProjectState){
        if(this._state===value) return;
        this._state=value;
    }

    public isDraft():boolean{ 
        return this._state===ProjectState.Draft
    };
    
    public isPreview():boolean{ 
        return this._state===ProjectState.Preview

    };

    public isPublished():boolean{ 
        return this._state===ProjectState.Published

    };

    public toProps():ProjectProps{
        return{
            title:this._title,
            description:this._description,
            state:this._state,
            slug:this._slug,
            version:this._version,
            tags:this._tags,
            createAt:super.createAt,
            updateAt:super.updateAt,
            deletedAt:super.deletedAt,
            tenantId:super.tenantId,
            isActive:super.isActive,
            isDeleted:super.isDeleted,
        }
    }
} 
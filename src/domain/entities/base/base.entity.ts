import type { BaseProps } from "./base.props";

export class BaseEntity{
    private readonly _createAt?:Date;
    private _updateAt?:Date;
    private _deletedAt?:Date;
    private _tenantId?:string;
    private _isActive:boolean;
    private _isDeleted:boolean

    public get createAt(){return this._createAt};
    public get updateAt(){return this._updateAt};
    public get deletedAt(){return this._deletedAt};
    public get tenantId(){return this._tenantId};
    public get isActive(){return this._isActive};
    public get isDeleted(){return this._isDeleted};

    constructor(props:BaseProps) {
        this._createAt=props.createAt ?? new Date();
        this._updateAt=props.updateAt  ?? new Date();;
        this._deletedAt=props.deletedAt;
        this._tenantId=props.tenantId;
        this._isActive=props.isActive ?? true;
        this._isDeleted=props.isDeleted ?? false;
    }

    protected newTenant(value:string){
        if(this._tenantId==value) return;
        this._tenantId=value;

    }

    protected activate(){
        if(this._isActive) return;
        this._isActive=true;
        this.touch();
    }

    protected deactivate(){
        if(!this._isActive) return;
        this._isActive=false;
        this.touch();
    }

    protected markAsdeleted(){
        if(this._isDeleted) return;
        this._isDeleted=true;
        this._deletedAt=new Date();
        this.touch();
    }

    protected restore(){
        if(!this._isDeleted) return;
        this._isDeleted=false;
        this._deletedAt=undefined;
        this.touch();
    }

    protected touch(){
        this._updateAt=new Date();    
    }
}

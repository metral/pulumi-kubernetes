// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class AaaaRecord extends lumi.NamedResource implements AaaaRecordArgs {
    public readonly _name: string;
    public readonly records: string[];
    public readonly resourceGroupName: string;
    public readonly tags?: {[key: string]: any};
    public readonly ttl: number;
    public readonly zoneName: string;

    constructor(name: string, args: AaaaRecordArgs) {
        super(name);
        this._name = args._name;
        this.records = args.records;
        this.resourceGroupName = args.resourceGroupName;
        this.tags = args.tags;
        this.ttl = args.ttl;
        this.zoneName = args.zoneName;
    }
}

export interface AaaaRecordArgs {
    readonly _name: string;
    readonly records: string[];
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: any};
    readonly ttl: number;
    readonly zoneName: string;
}


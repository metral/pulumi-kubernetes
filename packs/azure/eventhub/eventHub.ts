// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class EventHub extends lumi.NamedResource implements EventHubArgs {
    public readonly location: string;
    public readonly messageRetention: number;
    public readonly _name: string;
    public readonly namespaceName: string;
    public readonly partitionCount: number;
    public readonly partitionIds?: string[];
    public readonly resourceGroupName: string;

    constructor(name: string, args: EventHubArgs) {
        super(name);
        this.location = args.location;
        this.messageRetention = args.messageRetention;
        this._name = args._name;
        this.namespaceName = args.namespaceName;
        this.partitionCount = args.partitionCount;
        this.partitionIds = args.partitionIds;
        this.resourceGroupName = args.resourceGroupName;
    }
}

export interface EventHubArgs {
    readonly location: string;
    readonly messageRetention: number;
    readonly _name: string;
    readonly namespaceName: string;
    readonly partitionCount: number;
    readonly partitionIds?: string[];
    readonly resourceGroupName: string;
}


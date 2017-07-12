// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Route extends lumi.NamedResource implements RouteArgs {
    public readonly addressPrefix: string;
    public readonly _name: string;
    public readonly nextHopInIpAddress?: string;
    public readonly nextHopType: string;
    public readonly resourceGroupName: string;
    public readonly routeTableName: string;

    constructor(name: string, args: RouteArgs) {
        super(name);
        this.addressPrefix = args.addressPrefix;
        this._name = args._name;
        this.nextHopInIpAddress = args.nextHopInIpAddress;
        this.nextHopType = args.nextHopType;
        this.resourceGroupName = args.resourceGroupName;
        this.routeTableName = args.routeTableName;
    }
}

export interface RouteArgs {
    readonly addressPrefix: string;
    readonly _name: string;
    readonly nextHopInIpAddress?: string;
    readonly nextHopType: string;
    readonly resourceGroupName: string;
    readonly routeTableName: string;
}


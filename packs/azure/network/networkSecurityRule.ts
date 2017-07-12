// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class NetworkSecurityRule extends lumi.NamedResource implements NetworkSecurityRuleArgs {
    public readonly access: string;
    public readonly description?: string;
    public readonly destinationAddressPrefix: string;
    public readonly destinationPortRange: string;
    public readonly direction: string;
    public readonly _name: string;
    public readonly networkSecurityGroupName: string;
    public readonly priority: number;
    public readonly protocol: string;
    public readonly resourceGroupName: string;
    public readonly sourceAddressPrefix: string;
    public readonly sourcePortRange: string;

    constructor(name: string, args: NetworkSecurityRuleArgs) {
        super(name);
        this.access = args.access;
        this.description = args.description;
        this.destinationAddressPrefix = args.destinationAddressPrefix;
        this.destinationPortRange = args.destinationPortRange;
        this.direction = args.direction;
        this._name = args._name;
        this.networkSecurityGroupName = args.networkSecurityGroupName;
        this.priority = args.priority;
        this.protocol = args.protocol;
        this.resourceGroupName = args.resourceGroupName;
        this.sourceAddressPrefix = args.sourceAddressPrefix;
        this.sourcePortRange = args.sourcePortRange;
    }
}

export interface NetworkSecurityRuleArgs {
    readonly access: string;
    readonly description?: string;
    readonly destinationAddressPrefix: string;
    readonly destinationPortRange: string;
    readonly direction: string;
    readonly _name: string;
    readonly networkSecurityGroupName: string;
    readonly priority: number;
    readonly protocol: string;
    readonly resourceGroupName: string;
    readonly sourceAddressPrefix: string;
    readonly sourcePortRange: string;
}


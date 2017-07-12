// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class SqlServer extends lumi.NamedResource implements SqlServerArgs {
    public readonly administratorLogin: string;
    public readonly administratorLoginPassword: string;
    public readonly fullyQualifiedDomainName?: string;
    public readonly location: string;
    public readonly _name: string;
    public readonly resourceGroupName: string;
    public readonly tags?: {[key: string]: any};
    public readonly version: string;

    constructor(name: string, args: SqlServerArgs) {
        super(name);
        this.administratorLogin = args.administratorLogin;
        this.administratorLoginPassword = args.administratorLoginPassword;
        this.fullyQualifiedDomainName = args.fullyQualifiedDomainName;
        this.location = args.location;
        this._name = args._name;
        this.resourceGroupName = args.resourceGroupName;
        this.tags = args.tags;
        this.version = args.version;
    }
}

export interface SqlServerArgs {
    readonly administratorLogin: string;
    readonly administratorLoginPassword: string;
    readonly fullyQualifiedDomainName?: string;
    readonly location: string;
    readonly _name: string;
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: any};
    readonly version: string;
}

